# $_COOKIE

Source: https://devdocs.io/php/reserved.variables.cookies

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

$_COOKIE — HTTP Cookies

### Description

An associative array of variables passed to the current script via HTTP Cookies.

### Examples

Example #1 $_COOKIE example

```
<?php
echo 'Hello ' . htmlspecialchars($_COOKIE["name"]) . '!';
?>
```

Assuming the "name" cookie has been set earlier

The above example will output something similar to:

```
Hello Hannes!
```

### Notes

Note:

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods.

### See Also

- setcookie() - Send a cookie
- Handling external variables
- The filter extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.cookies.php
