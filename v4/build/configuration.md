# Configuration

Wee is setup through a simple configuration file called `wee.config.js` to define your project structure and output.

## Paths
Specify high level project directory names

```js
paths: {
    root: 'public',
    assets: 'assets',
    source: 'source',
    components: 'source/components',
    build: 'build',
}
```

| Option     | Description                                                                                               | Required |
|------------|-----------------------------------------------------------------------------------------------------------|----------|
| root       | Web accessible directory                                                                                  | -        |
| assets     | Destination of all assets and output generated build process. This directory is nested inside of web root | -        |
| source     | Location of all files and assets for project. The build process watches and builds from this directory    | -        |
| components | Location of the components for the project                                                                | -        |
| build      | Build process tasks and configurations                                                                    | -        |

## Script
Wee utilizes Webpack to build JavaScript output files

Many of the options in the `script` block of `wee.config.js` directly translate to [Webpack documentation](webpack.js.org). Please refer to this documentation if you would like a deeper understanding of some of the concepts discussed.

```js
script: {
    entry: {
        app: 'app.js',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
},
```

### [Entry](https://webpack.js.org/concepts/#entry)

Define the [entry point(s)](https://webpack.js.org/concepts/) for your application. Each key represents the output filename, and the value represents the starting point of Webpack's dependency graph. Think of it as the starting point of your application. In most cases, your [routes](/scripts/routes) will live in this file. Glob patterns can be used if referencing multiple entry points.

```js
entry: {
    app: 'app.js',
    other: [
        './source/scripts/other/*.js',
        'otherapp.js',
    ],
},
```

Results will be placed in `/public/assets/scripts`

```text
app.bundle.js
other.bundle.js
```

?> **Note:** File paths are relative to `source/scripts` directory unless prefixed with `./` or `../`.

### [Manifest](https://webpack.js.org/concepts/manifest/)

The manifest file is necessary if you enable content hashing in the filenames of your output file names.  This helps with cache control.

```js
entry: {
    app: 'app.js'
},
output: {
    filename: '[nane].bundle.[contenthash].js',
},
```

```json
{
  "app.css": "app.min.3810d55547a2e185b1fd.css",
  "app.js": "app.bundle.789038bc35db550d57a4.js",
}
```

### [Output](https://webpack.js.org/concepts/#output)

Define name of output file(s). You can hard-code a filename or use a [substitution](https://webpack.js.org/configuration/output/#output-filename) if you have multiple entry points.

```js
entry: {
    app: 'app.js'
},
output: {
    filename: 'app.bundle.js',
},
```

```js
entry: {
    app: 'app.js',
    other: 'other.js'
},
output: {
    filename: '[name].bundle.js',
},
```

### [Chunking](https://webpack.js.org/plugins/commons-chunk-plugin/)

Generate separate output files containing shared dependencies. This can be very useful if multiple entry points exist by reducing each bundle's individual payloads, and allowing the browser to cache the shared codebase.

Enabling the vendor chunk will pull all dependencies located within the `node_modules` folder into a separate bundle.  Since most updates won't include any changes to the project's dependencies, the `vendor.js` file will be cached while your application code is updated and downloaded again.

```js
chunking: {
    vendor: {
        enabled: false,
        options: {
            name: 'vendor',
        },
    },
    common: {
        enabled: false,
        options: {
            name: 'common',
        },
    },
},
```

?> **Note:** `chunking.options` can take any options passed to the [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/).

## Server

### [Browsersync](https://www.browsersync.io/)

Wee uses [Browsersync](https://www.browsersync.io/), a library for running a development server that monitors changes to project files and either auto-injects updates (CSS changes) or auto-refreshes the browser (JS changes) when changes are made. This can be very helpful for streamlining the development process. The CLI command [wee run](/cli/commands#run) starts the dev server based on the configuration in `wee.config.js`.

```js
server: {
    ghostMode: false,
    host: 'auto',
    port: 9000,
    https: true,
    proxy: 'https://wee.dev',
    static: true,
    reload: {
        enable: true,
        watch: {
            root: true,
            paths: [],
            extensions: [
                'html',
            ],
            ignore: [],
        },
    },
},
```

### Ghostmode

Browsersync provides the ability to mirror browsers on different devices. Clicks, scrolls & form inputs on any device will be mirrored to all others when this property is enabled in `wee.json`. This is helpful for manual device testing when you are building a page or feature of a site.

```js
ghostMode: true
```

### Host

Override host detection if you know the correct IP to use for the development server. Otherwise, leave this setting on `auto`.

```js
host: "192.168.1.1"
```

### Port

Use a specific port for the development server URL. The default port in `wee.json` is `9000`.

```js
port: 8080
```

### HTTPS

Enable HTTPS for localhost development. Note - this is not needed for proxy option as it will be inferred from your local target URL.

```js
https: true
```

### Proxy

If you already have a local server setup, set the local domain that Browsersync should proxy. When the development server is started, you will be able to access your local domain through the Browsersync proxy. The proxy domain generated by Browsersync is based on the `host` and `port` configuration properties.

```js
proxy: "https://wee.dev"
```

**CLI Command**

```bash
wee run --local
```

?> **Note:** Running this command will override the `static` property in `wee.json`.

### Static

Run the development server for serving static files (JS/CSS/HTML) located in your web root (`public` directory by default). Set this property to false if wanting to proxy a local domain. Otherwise, a static development server will be launched when executing `wee run` without a flag.

```js
static: true
```

**CLI Command**

```bash
wee run --static
```

### Reload

Configure whether the development server should reload when files change as well as what files to watch for changes.

```js
reload: {
    enable: true,
    watch: {
        root: true,
        paths: [],
        extensions: [
            'html',
        ],
        ignore: [],
    },
},
```

| Option           | Description                                                                                 |
|------------------|---------------------------------------------------------------------------------------------|
| enable           | Cause the browser to refresh, or inject the files where possible whenever changes occur     |
| watch.root       | Determine if web root should be watched. This value is configured by paths.root in wee.json |
| watch.paths      | Specify files to watch. Globbing patterns may be used.                                      |
| watch.extensions | Specify file extensions that should be watched besides css and js extensions                |
| watch.ignore     | Specify paths that should be ignored                                                        |

## Style

By default, a single minified stylesheet will be generated by the build process. The options provided here give granular control over the main stylesheet as well as the option to create additional independent stylesheets.

```js
style: {
    entry: {},
    output: {
        filename: '[name].min.css',
        chunkFilename: '[name].min.css',
    },
    breakpoints: {
        mobileLandscape: 480,
        tablet: 768,
        desktop: 1024,
        desktop2: 1280,
        desktop3: 1440,
    },
    breakpointOffset: 25,
},
```

### Breakpoints

Each breakpoint defined in this configuration block will register a min-width media query in your stylesheet output. Each breakpoint can be referred to in component files by their key name.

`breakpointOffset` is intended to account for browsers that push content over to make room for the vertical scrollbar. Each breakpoint value will have this value subtracted from it before generating the media query in output stylesheets.

```js
breakpoints: {
    mobileLandscape: 480,
    tablet: 768,
    desktop: 1024,
    desktop2: 1280,
    desktop3: 1440,
},
breakpointOffset: 25
```

```scss|scss
/* Example card component */
@include mobileLandscape {
    .card {
        background: blue;
    }
}

-+-

/* output */
@media(min-width: 455px) {
    .card {
        background: blue;
    }
}
```

?> **Note:** Breakpoint names should be camelCase

## PurgeCSS

[PurgeCSS](https://www.purgecss.com/) is a tool that will remove unused CSS.  The path string can contain glob patterns.  If you just need to set the paths, the following configuration is recommended, otherwise you can set an `options` key which will be passed to purgeCSS.  If you use this option you should omit the `paths` key on the top level.  Check out the full list of [purgeCSS options](https://www.purgecss.com/configuration#configuration-file).

```js
purgeCss: {
    enabled: false,
    paths: [
        'public/index.html',
    ],
},
```

```js
purgeCss: {
    enabled: true,
    options: {
        whitelist: ['random', 'yep', 'button'],
        keyframes: true,
        paths: [
            'public/index.html',
        ],
    },
},
```

## Additional Configuration

Wee provides two different ways to interact with the webpack build process on a per project basis, `configureWebpack` and `chainWebpack`.  The latter uses [chain webpack](https://github.com/neutrinojs/webpack-chain).  Check out the full documentation for usage.  `configureWebpack` gets merged in at the end of the build process using [webpack merge](https://github.com/survivejs/webpack-merge).

```js
const CoolWebpackPlugin = require('cool-webpack-plugin');

configureWebpack: {
    plugins: [
        new CoolWebpackPlugin({
            option: 'thatsNeat',
        }),
    ]
},
```

```js
const CoolWebpackPlugin = require('cool-webpack-plugin');

chainWebpack: (config) => {
    config.plugin('cool-webpack-plugin')
        .use(CoolWebpackPlugin, [{
            option: 'thatsNeat',
        }])
        .end();
},
```
