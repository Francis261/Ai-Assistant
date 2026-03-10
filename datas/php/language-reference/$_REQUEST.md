# $_REQUEST

Source: https://devdocs.io/php/reserved.variables.request

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

$_REQUEST — HTTP Request variables

### Description

An associative array that by default contains the contents of $_GET, $_POST and $_COOKIE.

### Notes

Note:

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods.

Note:

When running on the command line , this will not include the argv and argc entries; these are present in the $_SERVER array.

Note:

The variables in $_REQUEST are provided to the script via the GET, POST, and COOKIE input mechanisms and therefore could be modified by the remote user and cannot be trusted. The presence and order of variables listed in this array is defined according to the PHP request_order, and variables_order configuration directives.

### See Also

- Handling external variables
- The filter extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.request.php
