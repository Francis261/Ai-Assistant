# $argc

Source: https://devdocs.io/php/reserved.variables.argc

(PHP 4, PHP 5, PHP 7, PHP 8)

$argc — The number of arguments passed to script

### Description

Contains the number of arguments passed to the current script when running from the command line.

Note: The script's filename is always passed as an argument to the script, therefore the minimum value of $argc is 1.

Note: This variable is not available when register_argc_argv is disabled.

### Examples

Example #1 $argc example

```
<?php
var_dump($argc);
?>
```

When executing the example with: php script.php arg1 arg2 arg3

The above example will output something similar to:

```
int(4)
```

### Notes

Note:

This is also available as $_SERVER['argc'].

### See Also

- getopt() - Gets options from the command line argument list
- $argv

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.argc.php
