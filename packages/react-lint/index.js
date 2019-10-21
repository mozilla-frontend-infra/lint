const airbnb = require('@neutrinojs/airbnb');
const merge = require('deepmerge');
const lint = require('@mozilla-frontend-infra/lint');

module.exports = (options = {}) => neutrino => {
  neutrino.use(
    lint({
      use: [
        airbnb,
        {
          baseConfig: {
            extends: ['plugin:react/recommended', 'prettier/react'],
          },
          rules: {
            // Prefer double or quotes in JSX attributes
            // http://eslint.org/docs/rules/jsx-quotes
            'jsx-quotes': ['error', 'prefer-double'],
            // Enable anchors with react-router Link
            'jsx-a11y/anchor-is-valid': [
              'error',
              {
                components: ['Link'],
                specialLink: ['to'],
              },
            ],
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            // Ensure JSX props are indented 2 spaces from opening tag
            'react/jsx-indent-props': ['error', 2],
            // Ensure JSX components are PascalCase
            'react/jsx-pascal-case': 'error',
            // Require space before self-closing bracket in JSX
            'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
            // Disable enforcement of React PropTypes
            'react/default-props-match-prop-types': 'off',
            'react/jsx-closing-bracket-location': 'off',
            'react/destructuring-assignment': 'off',
            'react/jsx-handler-names': [
              'error',
              {
                eventHandlerPrefix: 'handle',
                eventHandlerPropPrefix: 'on',
              },
            ],
            'react/jsx-indent': 'off',
            'react/prefer-stateless-function': 'off',
            'react/prop-types': 'off',
            'react/sort-comp': 'off',
            // Too strict for now:
            'react/forbid-prop-types': 'off',
            // Can produce false-positives:
            'react/no-unused-prop-types': 'off',
            // Doesn't always help with a lot of PureComponents:
            'react/require-default-props': 'off',
            // Github doesn't syntax highlight <></> properly
            'react/jsx-fragments': ['error', 'element'],
          },
        },
      ],
    })
  );

  neutrino.config.module
    .rule('lint')
    .use('eslint')
    .tap(opts => merge(opts, options));
};
