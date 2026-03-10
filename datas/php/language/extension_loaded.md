# extension_loaded

Source: https://devdocs.io/php/function.extension-loaded

(PHP 4, PHP 5, PHP 7, PHP 8)

extension_loaded — Find out whether an extension is loaded

### Description

```
extension_loaded(string $extension): bool
```

Finds out whether the extension is loaded.

### Parameters

The extension name. This parameter is case-insensitive.

You can see the names of various extensions by using phpinfo() or if you're using the CGI or CLI version of PHP you can use the -m switch to list all available extensions:

```
$ php -m
[PHP Modules]
xml
tokenizer
standard
sockets
session
posix
pcre
overload
mysql
mbstring
ctype

[Zend Modules]
```

### Return Values

Returns true if the extension identified by extension is loaded, false otherwise.

### Examples

Example #1 extension_loaded() example

```
<?php
if (!extension_loaded('gd')) {
    if (!dl('gd.so')) {
        exit;
    }
}
?>
```

### See Also

- get_loaded_extensions() - Returns an array with the names of all modules compiled and loaded
- get_extension_funcs() - Returns an array with the names of the functions of a module
- phpinfo() - Outputs information about PHP's configuration
- dl() - Loads a PHP extension at runtime
- function_exists() - Return true if the given function has been defined

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.extension-loaded.php
