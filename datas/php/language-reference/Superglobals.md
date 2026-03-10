# Superglobals

Source: https://devdocs.io/php/language.variables.superglobals

Superglobals — Built-in variables that are always available in all scopes

### Description

Several predefined variables in PHP are "superglobals", which means they are available in all scopes throughout a script. There is no need to do global $variable; to access them within functions or methods.

These superglobal variables are:

- $GLOBALS
- $_SERVER
- $_GET
- $_POST
- $_FILES
- $_COOKIE
- $_SESSION
- $_REQUEST
- $_ENV

### Notes

Note: Variable availability

By default, all of the superglobals are available but there are directives that affect this availability. For further information, refer to the documentation for variables_order.

Note: Variable variables

Superglobals cannot be used as variable variables inside functions or class methods.

### See Also

- variable scope
- The variables_order directive
- The filter extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.variables.superglobals.php
