# Internal (built-in) functions

Source: https://devdocs.io/php/functions.internal

## Internal (built-in) functions

PHP comes standard with many functions and constructs. There are also functions that require specific PHP extensions compiled in, otherwise fatal "undefined function" errors will appear. For example, to use image functions such as imagecreatetruecolor(), PHP must be compiled with GD support. Or, to use mysqli_connect(), PHP must be compiled with MySQLi support. There are many core functions that are included in every version of PHP, such as the string and variable functions. A call to phpinfo() or get_loaded_extensions() will show which extensions are loaded into PHP. Also note that many extensions are enabled by default and that the PHP manual is split up by extension. See the configuration, installation, and individual extension chapters, for information on how to set up PHP.

Reading and understanding a function's prototype is explained within the manual section titled how to read a function definition. It's important to realize what a function returns or if a function works directly on a passed in value. For example, str_replace() will return the modified string while usort() works on the actual passed in variable itself. Each manual page also has specific information for each function like information on function parameters, behavior changes, return values for both success and failure, and availability information. Knowing these important (yet often subtle) differences is crucial for writing correct PHP code.

Note: If the parameters given to a function are not what it expects, such as passing an array where a string is expected, the return value of the function is undefined. In this case it will likely return null but this is just a convention, and cannot be relied upon. As of PHP 8.0.0, a TypeError exception is supposed to be thrown in this case.

Note:

Scalar types for built-in functions are nullable by default in coercive mode. As of PHP 8.1.0, passing null to an internal function parameter that is not declared nullable is discouraged and emits a deprecation notice in coercive mode to align with the behavior of user-defined functions, where scalar types need to be marked as nullable explicitly.

For example, strlen() function expects the parameter $string to be a non-nullable string. For historical reasons, PHP allows passing null for this parameter in coercive mode, and the parameter is implicitly cast to string, resulting in a "" value. In contrast, a TypeError is emitted in strict mode.

```
<?php
var_dump(strlen(null));
// "Deprecated: Passing null to parameter #1 ($string) of type string is deprecated" as of PHP 8.1.0
// int(0)

var_dump(str_contains("foobar", null));
// "Deprecated: Passing null to parameter #2 ($needle) of type string is deprecated" as of PHP 8.1.0
// bool(true)
?>
```

### See Also

- function_exists()
- the function reference
- get_extension_funcs()
- dl()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/functions.internal.php
