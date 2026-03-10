# spl_autoload_extensions

Source: https://devdocs.io/php/function.spl-autoload-extensions

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

spl_autoload_extensions — Register and return default file extensions for spl_autoload

### Description

```
spl_autoload_extensions(?string $file_extensions = null): string
```

This function can modify and check the file extensions that the built in __autoload() fallback function spl_autoload() will be using.

Note: There should not be a space between the defined file extensions.

### Parameters

If null, it simply returns the current list of extensions each separated by comma. To modify the list of file extensions, simply invoke the functions with the new list of file extensions to use in a single string with each extensions separated by comma.

### Return Values

A comma delimited list of default file extensions for spl_autoload().

### Changelog

### Examples

Example #1 spl_autoload_extensions() example

```
<?php
spl_autoload_extensions(".php,.inc");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.spl-autoload-extensions.php
