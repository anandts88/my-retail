module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    "ecmaFeatures": {
      "arrowFunctions": true,                    // enable arrow functions
      "binaryLiterals": true,                    // enable binary literals
      "blockBindings": true,                     // enable let and const (aka block bindings)
      "classes": true,                           // enable classes
      "defaultParams": true,                     // enable default function parameters
      "destructuring": true,                     // enable destructuring
      "forOf": true,                             // enable for-of loops
      "generators": true,                        // enable generators
      "modules": true,                           // enable modules and global strict mode
      "objectLiteralComputedProperties": true,   // enable computed object literal property names
      "objectLiteralDuplicateProperties": true,  // enable duplicate object literal properties in strict mode
      "objectLiteralShorthandMethods": true,     // enable object literal shorthand methods
      "objectLiteralShorthandProperties": true,  // enable object literal shorthand properties
      "octalLiterals": true,                     // enable octal literals
      "regexUFlag": true,                        // enable the regular expression u flag
      "regexYFlag": true,                        // enable the regular expression y flag
      "restParams": true,                        // enable the rest parameters
      "spread": true,                            // enable the spread operator
      "superInFunctions": true,                  // enable super references inside of functions
      "templateStrings": true,                   // enable template strings
      "unicodeCodePointEscapes": true,           // enable code point escapes
      "globalReturn": true,                      // allow return statements in the global scope
      "jsx": true                                // enable JSX
    }
  },
  extends: 'eslint:recommended',
  env: {
    'browser': true
  },

  "globals": {
    "server": true,
    "document": true,
    "window": true,
    "-Promise": true
  },

  rules: {
    ////////// Possible Errors //////////

    "comma-dangle": 1,             // disallow trailing commas in object literals
    "no-cond-assign": 1,           // disallow assignment in conditional expressions
    "no-console": 0,               // disallow use of console (off by default in the node environment)
    "no-constant-condition": 0,    // disallow use of constant expressions in conditions
    "no-control-regex": 0,         // disallow control characters in regular expressions
    "no-debugger": 0,              // disallow use of debugger
    "no-dupe-args": 1,             // disallow duplicate arguments in functions
    "no-dupe-keys": 1,             // disallow duplicate keys when creating object literals
    "no-duplicate-case": 1,        // disallow a duplicate case label
    "no-empty-character-class": 0, // disallow the use of empty character classes in regular expressions
    "no-empty": 1,                 // disallow empty statements
    "no-ex-assign": 1,             // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 1,    // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": 0,          // disallow unnecessary parentheses (off by default)
    "no-extra-semi": 1,            // disallow unnecessary semicolons
    "no-func-assign": 1,           // disallow overwriting functions written as function declarations
    "no-inner-declarations": 0,    // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 0,        // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": 1,  // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": 0,        // disallow negation of the left operand of an in expression
    "no-obj-calls": 0,             // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 0,          // disallow multiple spaces in a regular expression literal
    "no-sparse-arrays": 1,         // disallow sparse arrays
    "no-unreachable": 1,           // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 1,                // disallow comparisons with the value NaN
    "valid-jsdoc": 0,              // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": 1,             // Ensure that the results of typeof are compared against a valid string
    "no-unexpected-multiline": 1,  // Avoid code that looks like two expressions but is actually one (off by default)


    ////////// Best Practices //////////

    "accessor-pairs": 0,        // enforces getter/setter pairs in objects (off by default)
    "array-callback-return": 0,  // enforce return statements in callbacks of array methods
    "block-scoped-var": 1,      // treat var statements as if they were block scoped (off by default)
    "complexity": 0,            // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": 0,     // require return statements to either always or never specify values
    "curly": 1,                 // specify curly brace conventions for all control statements
    "default-case": 0,          // require default case in switch statements (off by default)
    "dot-notation": 0,          // encourages use of dot notation whenever possible
    "dot-location": [1, "property"],          // enforces consistent newlines before or after dots (off by default)
    "eqeqeq": 1,                // require the use of === and !==
    "guard-for-in": 0,          // make sure for-in loops have an if statement (off by default)
    "no-alert": 0,              // disallow the use of alert, confirm, and prompt
    "no-caller": 0,             // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 0,          // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": 1,        // disallow else after a return in an if (off by default)
    "no-empty-function": 1,     // disallow empty functions
    "no-empty-pattern": 1,      // disallow empty destructuring patterns
    "no-eq-null": 0,            // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": 1,               // disallow use of eval()
    "no-extend-native": 0,      // disallow adding to native types
    "no-extra-bind": 0,         // disallow unnecessary function binding
    "no-extra-label": 1,        // disallow unnecessary labels
    "no-fallthrough": 0,        // disallow fallthrough of case statements
    "no-floating-decimal": 1,   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 1,       // disallow use of eval()-like methods
    "no-implicit-coercion": 0,  // disallow shorthand type conversions
    "no-iterator": 0,           // disallow usage of __iterator__ property
    "no-labels": 0,             // disallow use of labeled statements
    "no-lone-blocks": 0,        // disallow unnecessary nested blocks
    "no-loop-func": 0,          // disallow creation of functions within loops
    "no-multi-spaces": 1,       // disallow use of multiple spaces
    "no-multi-str": 1,          // disallow use of multiline strings
    "no-native-reassign": 1,    // disallow reassignments of native objects
    "no-new-func": 0,           // disallow use of new operator for Function object
    "no-new-wrappers": 0,       // disallows creating new instances of String, Number, and Boolean
    "no-new": 0,                // disallow use of new operator when not part of the assignment or comparison
    "no-octal-escape": 0,       // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-octal": 0,              // disallow use of octal literals
    "no-param-reassign": 1,     // disallow reassignment of function parameters (off by default)
    "no-process-env": 0,        // disallow use of process.env (off by default)
    "no-proto": 0,              // disallow usage of __proto__ property
    "no-redeclare": 1,          // disallow declaring the same variable more then once
    "no-return-assign": 1,      // disallow use of assignment in return statement
    "no-script-url": 0,         // disallow use of javascript: urls
    "no-self-compare": 1,       // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": 1,          // disallow use of comma operator
    "no-throw-literal": 0,      // restrict what can be thrown as an exception (off by default)
    "no-unmodified-loop-condition": 0, // disallow unmodified loop conditions
    "no-unused-expressions": 1, // disallow usage of expressions in statement position
    "no-unused-labels": 1,      // disallow unused labels
    "no-useless-call": 0,       // disallow unnecessary calls to .call() and .apply()
    "no-useless-concat": 1,     // disallow unnecessary concatenation of literals or template literals
    "no-useless-escape": 0,     // disallow unnecessary escape characters
    "no-void": 1,               // disallow use of void operator (off by default)
    "no-warning-comments": 0,   // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    "no-with": 0,               // disallow use of the with statement
    "radix": 0,                 // require use of the second argument for parseInt() (off by default)
    "vars-on-top": 1,           // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": 0,             // require immediate function invocation to be wrapped in parentheses (off by default)
    "yoda": 0,                  // require or disallow Yoda conditions


    ////////// Strict Mode //////////

    "strict": 0,          // controls location of Use Strict Directives


    ////////// Variables //////////

    "init-declarations": 0,           // require or disallow initialization in var declarations
    "no-catch-shadow": 1,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 0,               // disallow deletion of variables
    "no-label-var": 0,                // disallow labels that share a name with a variable
    "no-shadow": 0,                   // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 1,  // disallow shadowing of names such as arguments
    "no-undef": 0,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef-init": 0,               // disallow use of undefined when initializing variables
    "no-undefined": 0,                // disallow use of undefined variable (off by default)
    "no-unused-vars": 1,              // disallow declaration of variables that are not used in the code
    "no-use-before-define": 1,        // disallow use of variables before they are defined


    ////////// Node.js //////////

    "callback-return": 0,  // require return statements after callbacks"
    "global-require": 1,  // require require() calls to be placed at top-level module scope
    "handle-callback-err": 0,   // enforces error handling in callbacks (off by default) (on by default in the node environment)
    "no-mixed-requires": 1,     // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    "no-new-require": 0,        // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    "no-path-concat": 1,        // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    "no-process-exit": 0,       // disallow process.exit() (on by default in the node environment)
    "no-restricted-modules": 0, // restrict usage of specified node modules (off by default)
    "no-sync": 0,               // disallow use of synchronous methods (off by default)


    ////////// Stylistic Issues //////////

    "array-bracket-spacing": 0,       // enforce spacing inside array brackets (off by default)
    "block-spacing": 1, // enforce consistent spacing inside single-line blocks
    "brace-style": 1,                 // enforce one true brace style (off by default)
    "camelcase": 1,                   // require camel case names
    "comma-spacing": 1,               // enforce spacing before and after comma
    "comma-style": 1,                 // enforce one true comma style (off by default)
    "computed-property-spacing": 0,   // require or disallow padding inside computed properties (off by default)
    "consistent-this": 0,             // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": 1,                    // enforce newline at the end of file, with no multiple empty lines
    "func-names": 0,                  // require function expressions to have a name (off by default)
    "func-style": 0,                  // enforces use of function declarations or expressions (off by default)
    "id-length": [1, { "min": 2, "max": 50}], // enforce minimum and maximum identifier lengths
    "indent": 0,                      // this option sets a specific tab width for your code (off by default)
    "key-spacing": 1,                 // enforces spacing between keys and values in object literal properties
    "keyword-spacing": 1, // enforce consistent spacing before and after keywords
    "max-depth": 1, // enforce a maximum depth that blocks can be nested
    "max-len": [1, { "code": 120, "tabWidth": 2 }], // enforce a maximum line length
    "lines-around-comment": 0,        // enforces empty lines around comments (off by default)
    "linebreak-style": 0,             // disallow mixed 'LF' and 'CRLF' as linebreaks (off by default)
    "max-nested-callbacks": 0,        // specify the maximum depth callbacks can be nested (off by default)
    "new-cap": 0,                     // require a capital letter for constructors
    "new-parens": 0,                  // disallow the omission of parentheses when invoking a constructor with no arguments
    "newline-after-var": 1,           // allow/disallow an empty newline after var statement (off by default)
    "newline-before-return": 1, // require an empty line before return statements
    "newline-per-chained-call": 1, // require a newline after each call in a method chain
    "no-array-constructor": 0,        // disallow use of the Array constructor
    "no-continue": 0,                 // disallow use of the continue statement (off by default)
    "no-inline-comments": 0,          // disallow comments inline after code (off by default)
    "no-lonely-if": 1,                // disallow if as the only statement in an else block (off by default)
    "no-mixed-spaces-and-tabs": 1,    // disallow mixed spaces and tabs for indentation
    "no-multiple-empty-lines": 1,     // disallow multiple empty lines (off by default)
    "no-nested-ternary": 0,           // disallow nested ternary expressions (off by default)
    "no-new-object": 0,               // disallow use of the Object constructor
    "no-spaced-func": 0,              // disallow space between function identifier and application
    "no-ternary": 0,                  // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": 1,          // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0,        // disallow dangling underscores in identifiers
    "no-whitespace-before-property": 1, // disallow whitespace before properties
    "object-curly-spacing": [1, "always"], // enforce consistent spacing inside braces
    "one-var": 0,                     // allow just one var statement per function (off by default)
    "operator-assignment": 1,         // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "operator-linebreak": 0,          // enforce operators to be placed before or after line breaks (off by default)
    "padded-blocks": 0,               // enforce padding within blocks (off by default)
    "quote-props": 0,                 // require quotes around object literal property names (off by default)
    "quotes": 0,                      // specify whether double or single quotes should be used
    "semi-spacing": 1,                // enforce spacing before and after semicolons
    "semi": 1,                        // require or disallow use of semicolons instead of ASI
    "sort-vars": 0,                   // sort variables within the same declaration block (off by default)
    "space-after-keywords": 0,        // require a space after certain keywords (off by default)
    "space-before-blocks": 1,         // require or disallow space before blocks (off by default)
    "space-before-function-paren": [1, "never"], // require or disallow space before function opening parenthesis (off by default)
    "space-in-parens": 0,             // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": 0,             // require spaces around operators
    "space-return-throw-case": 0,     // require a space after return, throw, and case
    "space-unary-ops": 0,             // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "spaced-comment": 0,              // require or disallow a space immediately following the // or /* in a comment (off by default)
    "wrap-regex": 0,                  // require regex literals to be wrapped in parentheses (off by default)


    ////////// ECMAScript 6 //////////

    "arrow-body-style": 0,  // require braces around arrow function bodies
    "arrow-parens": 1, // require parentheses around arrow function arguments
    "arrow-spacing": 1,  // enforce consistent spacing before and after the arrow in arrow functions
    "constructor-super": 1,      // verify super() callings in constructors (off by default)
    "generator-star-spacing": 0, // enforce the spacing around the * in generator functions (off by default)
    "no-class-assign": 0, // disallow reassigning class members
    "no-confusing-arrow": 0, // disallow arrow functions where they could be confused with comparisons
    "no-const-assign": 1, //  disallow reassigning const variables
    "no-dupe-class-members": 1, //  disallow duplicate class members
    "no-duplicate-imports": 1, //  disallow duplicate module imports
    "no-new-symbol": 0, //  disallow new operators with the Symbol object
    "no-restricted-imports": 0, //  disallow specified modules when loaded by import
    "no-this-before-super": 0, //  disallow this/super before calling super() in constructors
    "no-useless-computed-key": 0, //  disallow unnecessary computed property keys in object literals
    "no-useless-constructor": 1, //  disallow unnecessary constructors
    "no-var": 1, //  require let or const instead of var
    "object-shorthand": 0, //  require or disallow method and property shorthand syntax for object literals
    "prefer-arrow-callback": 0, //  require arrow functions as callbacks
    "prefer-const": 0, //  require const declarations for variables that are never reassigned after declared
    "prefer-reflect": 0, //  require Reflect methods where applicable
    "prefer-rest-params": 0, //  require rest parameters instead of arguments
    "prefer-spread": 0, //  require spread operators instead of .apply()
    "prefer-template": 1, //  require template literals instead of string concatenation
    "require-yield": 0, //  require generator functions to contain yield
    "sort-imports": 0, //  enforce sorted import declarations within modules
    "template-curly-spacing": [1, "never"], //  require or disallow spacing around embedded expressions of template strings
    "yield-star-spacing": 0, // require or disallow spacing around the * in yield* expressions


    ////////// Legacy //////////

    "max-params": 0,      // limits the number of parameters that can be used in the function declaration. (off by default)
    "max-statements": 0,  // specify the maximum number of statement allowed in a function (off by default)
    "no-bitwise": 0,      // disallow use of bitwise operators (off by default)
    "no-plusplus": 0      // disallow use of unary operators, ++ and -- (off by default)
  }
};
