# phpinfo

Source: https://devdocs.io/php/function.phpinfo

(PHP 4, PHP 5, PHP 7, PHP 8)

phpinfo — Outputs information about PHP's configuration

### Description

```
phpinfo(int $flags = INFO_ALL): true
```

Outputs a large amount of information about the current state of PHP. This includes information about PHP compilation options and extensions, the PHP version, server information and environment (if compiled as a module), the PHP environment, OS version information, paths, master and local values of configuration options, HTTP headers, and the PHP License.

Because every system is setup differently, phpinfo() is commonly used to check configuration settings and for available predefined variables on a given system.

phpinfo() is also a valuable debugging tool as it contains all EGPCS (Environment, GET, POST, Cookie, Server) data.

### Parameters

The output may be customized by passing one or more of the following constants bitwise values summed together in the optional flags parameter. One can also combine the respective constants or bitwise values together with the bitwise or operator.

### Return Values

Always returns true.

### Examples

Example #1 phpinfo() Example

```
<?php

// Show all information, defaults to INFO_ALL
phpinfo();

// Show just the module information.
// phpinfo(8) yields identical results.
phpinfo(INFO_MODULES);

?>
```

### Notes

Note:

In versions of PHP before 5.5, parts of the information displayed are disabled when the expose_php configuration setting is set to off. This includes the PHP and Zend logos, and the credits.

Note:

phpinfo() outputs plain text instead of HTML when using the CLI mode.

### See Also

- phpversion() - Gets the current PHP version
- phpcredits() - Prints out the credits for PHP
- ini_get() - Gets the value of a configuration option
- ini_set() - Sets the value of a configuration option
- get_loaded_extensions() - Returns an array with the names of all modules compiled and loaded
- Predefined Variables

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.phpinfo.php
