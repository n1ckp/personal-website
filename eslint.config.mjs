import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ['out', 'node_modules', '.next', '**/.eslintrc.js'],
    },
    ...compat.extends('eslint-config-next'),
    {
        rules: {
            'react/react-in-jsx-scope': 0,
            'react/require-default-props': 0,
            'react/no-array-index-key': 0,
            'react/no-unused-prop-types': 0,
            'react/jsx-props-no-spreading': 0,
        },
    },
];
