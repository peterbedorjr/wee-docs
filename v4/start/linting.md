# Linting

Wee uses [eslint](https://eslint.org/) and [stylelint](https://stylelint.io/) to lint files during the build process.

## Eslint

Wee's eslint config, `.eslintrc.js`, extends the [Airbnb JavaScript Styleguide](https://github.com/airbnb/javascript) and the [Vue Recommended](https://eslint.vuejs.org/rules/_) with a few modifications to the ruleset to fit our needs at [Lewis Communications](https://www.lewiscommunications.com):

```js
rules: {
    strict: 0,
    indent: ['error', 4],
    'eol-last': 0,
    'no-plusplus': 0,
    'prefer-template': 0,
    'import/prefer-default-export': 0,
    'space-unary-ops': 0,
    'newline-per-chained-call': 0,
    radix: 0,
    'import/no-dynamic-require': 0,
    'no-param-reassign': [
        'error',
        {
            ignorePropertyModificationsFor: [
                'state'
            ],
        },
    ],
    'vue/html-indent': ['error', 4],
},
```

## Stylelint

Wee's stylelint config, `.stylelintrc.js` extends the [Config Standard](https://github.com/stylelint/stylelint-config-standard) and uses the [Stylelint Order](https://github.com/hudochenkov/stylelint-order) plugin with a few modifications:

```js
rules: {
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'no-eol-whitespace': null,
    indentation: 4,
    'number-leading-zero': null,
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'string-quotes': 'single',
    'at-rule-name-case': null,
},
```

?> **Note:** If necessary, you can add any files or patterns to the `.stylelintignore` file to be ignored by stylelint