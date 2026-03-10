# $_GET

Source: https://devdocs.io/php/reserved.variables.get

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

$_GET — Query string variables

### Description

An associative array of variables passed to the current script via the URL parameters (also known as the query string). Note that this array is populated whenever a query string is present, regardless of the HTTP request method.

### Examples

Example #1 $_GET example

```
<?php
echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!';
?>
```

Assuming the user entered http://example.com/?name=Hannes.

The above example will output something similar to:

```
Hello Hannes!
```

### Notes

Note:

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods.

Note:

The values in $_GET are automatically passed through urldecode().

### See Also

- Handling external variables
- The filter extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.get.php
