# Router

Wee comes with a robust routing solution to separate your markup and JavaScript.  There are a couple of different ways to interact with the router and a couple of common patterns we use here at [Lewis Communications](https://www.lewiscommunications.com).

By default your routes are defined in the `routes.js` file located in the `source/scripts` directory.  By default, the routes file should look like:

```js
// routes.js

/**
 * Dynamically load a component
 *
 * @param {String} component
 */
const load = component => import(/* webpackChunkName: "[request]" */ `../components/${component}`)
    .then(m => m.default || m);

export default [
    {
        path: '/',
        handler: [
            () => load('welcome'),
        ],
    },
];
```

Your routes are imported into the `app.js` file and passed to the `$router.map` function:

```js
// app.js

import $router from 'wee-routes';
import './bootstrap';
import routes from './routes';

$router.pjax()
    .map(routes)
    .run();
```

There are two ways to import route handler from component files.  The first method is through a standard ES module import and the second is using the dyanmic import proposal.  Note, however, that when using the dynamic imports you'll need to pass a function that returns the dynamic import.  Wee provides a helper function in the `routes.js` file to make this a little simpler.

Here is an example of how you would use a standard ES module import:

```js
import welcome from '../components/welcome';

export default [
    {
        path: '/',
        handler: [
            welcome
        ],
    },
];
```

A common pattern we use is to include any common functionality in a `common` or `global` component and set it for each route like:

```js
import welcome from '../components/welcome';
import about from '../components/about';
import contact from '../components/contact';
import global from '../components/global';
import nav from '../components/nav';

const common = [global, nav];

export default [
    {
        path: '/',
        handler: [
            ...common,
            welcome,
        ],
    },
    {
        path: '/about',
        handler: [
            ...common,
            about,
        ],
    },
    {
        path: '/contact',
        handler: [
            ...common,
            contact,
        ],
    },
];
```

For complex routing setups you can split your routes up however it make sense to you so long as they are exported correctly.  Here is an example of how you might accomplish this.

```js
// routes/app.js

export default [
    {
        path: '/',
        handler: [
            app,
        ],
    },
];

// routes/foo.js

export default [
    {
        path: '/foo',
        handler: [
            foo,
        ],
    },
];

// routes/bar.js

export default [
    {
        path: '/bar',
        handler: [
            bar,
        ],
    },
];

// routes.js

import app from './routes/app.js';
import foo from './routes/foo.js';
import bar from './routes/bar.js';

export default [
    ...app,
    ...foo,
    ...bar,
];
```

<!-- By default your routes are defined in the `app.js` file located in `source/scripts`.  This is what the file will look like on a fresh installation of Wee: -->

<!-- ```js
import $router from 'wee-routes';
import './bootstrap';

/**
 * Dynamically load a component
 * @param {String} component
 */
const load = component => import(/* webpackChunkName: "[request]" */ `../components/${component}`)
    .then(m => m.default || m);

$router.pjax().map([
    {
        path: '/',
        handler: [
            () => load('welcome'),
        ],
    },
]).run();
``` -->



