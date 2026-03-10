# $_ENV

Source: https://devdocs.io/php/reserved.variables.environment

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

$_ENV — Environment variables

### Description

An associative array of variables passed to the current script via the environment method.

These variables are imported into PHP's global namespace from the environment under which the PHP parser is running. Many are provided by the shell under which PHP is running and different systems are likely running different kinds of shells, a definitive list is impossible. Please see your shell's documentation for a list of defined environment variables.

Other environment variables include the CGI variables, placed there regardless of whether PHP is running as a server module or CGI processor.

### Examples

Example #1 $_ENV example

```
<?php
echo 'My username is ' .$_ENV["USER"] . '!';
?>
```

Assuming "bjori" executes this script

The above example will output something similar to:

```
My username is bjori!
```

### Notes

Note:

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods.

### See Also

- getenv() - Gets the value of a single or all environment variables
- The filter extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.environment.php
