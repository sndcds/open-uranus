import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/node_modules/"],
  },
  ...compat.extends("eslint:recommended"),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "array-bracket-newline": ["error", "consistent"],
      "array-bracket-spacing": ["error", "never"],
      "array-callback-return": "error",
      "arrow-parens": ["error", "always"],

      "arrow-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],

      "block-scoped-var": "error",
      "block-spacing": "error",
      "brace-style": ["error", "stroustrup"],

      "comma-dangle": [
        "error",
        {
          arrays: "never",
          objects: "never",
          imports: "never",
          exports: "never",
          functions: "never",
        },
      ],

      "comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      "comma-style": ["error", "last"],
      "computed-property-spacing": "error",
      curly: ["error", "all"],
      "dot-location": ["error", "property"],
      "eol-last": ["error", "never"],
      eqeqeq: "error",
      "func-call-spacing": "error",
      "func-name-matching": "error",

      "func-style": [
        "error",
        "declaration",
        {
          allowArrowFunctions: true,
        },
      ],

      indent: ["error", 2],

      "key-spacing": [
        "error",
        {
          beforeColon: false,
          afterColon: true,
        },
      ],

      "keyword-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],

      "linebreak-style": ["error", "unix"],
      "lines-between-class-members": "error",
      "max-nested-callbacks": "error",
      "max-statements-per-line": "error",
      "new-parens": "error",
      "no-array-constructor": "error",
      "no-await-in-loop": "error",
      "no-caller": "error",

      "no-constant-condition": [
        "error",
        {
          checkLoops: false,
        },
      ],

      "no-div-regex": "error",
      "no-empty": "error",
      "no-extra-bind": "error",

      "no-extra-parens": [
        "error",
        "all",
        {
          conditionalAssign: false,
          nestedBinaryExpressions: false,
          returnAssign: false,
        },
      ],

      "no-implicit-coercion": [
        "error",
        {
          allow: ["!!"],
        },
      ],

      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-new-object": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "no-proto": "error",
      "no-prototype-builtins": "off",

      "no-restricted-properties": [
        "error",
        {
          object: "Lang",
          property: "copyProperties",
          message: "Use Object.assign()",
        },
        {
          object: "Lang",
          property: "bind",
          message: "Use arrow notation or Function.prototype.bind()",
        },
        {
          object: "Lang",
          property: "Class",
          message: "Use ES6 classes",
        },
      ],

      "no-return-assign": "error",
      "no-return-await": "error",
      "no-self-compare": "error",
      "no-shadow": "error",
      "no-shadow-restricted-names": "error",
      "no-template-curly-in-string": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-unused-vars": "off",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-whitespace-before-property": "error",
      "no-with": "error",
      "nonblock-statement-body-position": ["error", "below"],

      "object-curly-newline": [
        "error",
        {
          consistent: true,
        },
      ],

      "object-curly-spacing": ["error", "always"],
      "object-shorthand": "error",
      "operator-assignment": "error",
      "operator-linebreak": "error",
      "padded-blocks": ["error", "never"],
      "prefer-const": "error",
      "prefer-numeric-literals": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      quotes: ["error", "single"],
      "require-await": "error",
      "rest-spread-spacing": ["error", "never"],
      semi: ["error", "never"],

      "semi-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      "semi-style": "error",
      "space-before-blocks": "error",

      "space-before-function-paren": [
        "error",
        {
          named: "never",
          anonymous: "always",
          asyncArrow: "always",
        },
      ],

      "space-in-parens": "error",

      "space-infix-ops": [
        "error",
        {
          int32Hint: false,
        },
      ],

      "space-unary-ops": "error",
      "spaced-comment": "error",
      "switch-colon-spacing": "error",
      "symbol-description": "error",
      "template-curly-spacing": "error",
      "template-tag-spacing": "error",
      "unicode-bom": "error",
      "wrap-iife": ["error", "inside"],
      "yield-star-spacing": "error",
      yoda: "error",
      "no-duplicate-imports": "error",

      "no-use-before-define": [
        "error",
        {
          functions: false,
        },
      ],

      "no-unused-private-class-members": "error",
      "no-unmodified-loop-condition": "error",
      "no-promise-executor-return": "error",
      "require-atomic-updates": "error",
      "arrow-body-style": ["error", "as-needed"],
      "consistent-return": "error",
      "default-case-last": "error",
    },
  },
];
