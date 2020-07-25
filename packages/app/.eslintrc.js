import path from 'path'

export default {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        'import/resolver': {
            alias: {
                map: [
                    ['@pages', path.resolve('./pages')]
                ],
                extensions: [
                    '.js',
                    '.ts',
                    '.jsx',
                    '.tsx',
                    '.json'
                ]
            }
        }
    }
};
