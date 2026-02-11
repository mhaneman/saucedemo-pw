import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
  js.configs.recommended,

  // Global ignores
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.min.js",
      "test-results/**",
      "playwright-report/**",
      ".git/**",
      "*.config.js",
    ],
  },

  // Main configuration for all JS/TS files
  {
    files: ["**/*.js", "**/*.ts", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
      },
    },
    rules: {
      // Variable and scope rules
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-undef": "error",
      "no-redeclare": "error",
      "no-shadow": "warn",
      "prefer-const": "error",
      "no-var": "error",

      // Code style and formatting
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
      "eol-last": "error",
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "key-spacing": "error",
      "space-before-blocks": "error",
      "space-infix-ops": "error",
      "keyword-spacing": "error",
      "arrow-spacing": "error",

      // Best practices
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "prefer-template": "error",
      "prefer-arrow-callback": "error",
      curly: "error",
      "default-case": "error",
      "dot-notation": "error",
      eqeqeq: ["error", "always"],
      "no-caller": "error",
      "no-empty": "warn",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-throw-literal": "error",

      // Error prevention
      "no-unreachable": "error",
      "no-duplicate-case": "error",
      "no-extra-boolean-cast": "error",
      "no-irregular-whitespace": "error",
      "no-unexpected-multiline": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
      "no-case-declarations": "error",
      "no-empty-pattern": "error",
      "no-fallthrough": "error",
      "no-global-assign": "error",
      "no-octal": "error",
      "no-self-assign": "error",
      "no-unused-labels": "error",
      "no-useless-escape": "error",

      // Modern JavaScript features
      "prefer-destructuring": [
        "error",
        {
          array: false,
          object: true,
        },
      ],
      "prefer-spread": "error",
      "prefer-rest-params": "error",
      "no-useless-concat": "error",
      "object-shorthand": "error",
    },
  },

  // TypeScript files (basic rules without TypeScript parser)
  {
    files: ["**/*.ts"],
    rules: {
      // Allow TypeScript specific syntax
      "no-unused-vars": "off", // TypeScript compiler handles this better
      "no-undef": "off", // TypeScript compiler handles this

      // Stricter rules for TypeScript files
      "no-explicit-any": "off", // Would need TypeScript parser
      "prefer-const": "error",
      "no-var": "error",
    },
  },

  // Test files (Playwright tests)
  {
    files: [
      "**/tests/**/*.ts",
      "**/tests/**/*.js",
      "**/*.spec.ts",
      "**/*.spec.js",
      "**/*.test.ts",
      "**/*.test.js",
    ],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeEach: "readonly",
        beforeAll: "readonly",
        afterEach: "readonly",
        afterAll: "readonly",
        page: "readonly",
        browser: "readonly",
        context: "readonly",
      },
    },
    rules: {
      // More lenient rules for test files
      "no-console": "off",
      "prefer-const": "error",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Test-specific best practices
      "max-nested-callbacks": ["error", 5],
      "no-magic-numbers": "off",
      "no-duplicate-string": "off",
    },
  },

  // Page Object Model files
  {
    files: [
      "**/pages/**/*.ts",
      "**/pages/**/*.js",
      "**/page-objects/**/*.ts",
      "**/page-objects/**/*.js",
    ],
    rules: {
      // Allow more flexibility in POM files
      "class-methods-use-this": "off",
      "no-empty-function": "off",
      "prefer-const": "error",
    },
  },

  // Configuration files
  {
    files: [
      "playwright.config.ts",
      "playwright.config.js",
      "*.config.js",
      "*.config.ts",
      "*.config.mjs",
    ],
    languageOptions: {
      globals: {
        defineConfig: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "import/no-extraneous-dependencies": "off",
    },
  },
];
