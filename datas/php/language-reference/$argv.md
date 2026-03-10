# $argv

Source: https://devdocs.io/php/reserved.variables.argv

(PHP 4, PHP 5, PHP 7, PHP 8)

$argv — Array of arguments passed to script

### Description

Contains an array of all the arguments passed to the script when running from the command line.

Note: The first argument $argv[0] is always the name that was used to run the script.

Note: This variable is not available when register_argc_argv is disabled.

To test if a script is being run from the command line, php_sapi_name() should be used instead of checking whether $argv or $_SERVER['argv'] is set.

### Examples

Example #1 $argv example

```
<?php
var_dump($argv);
?>
```

When executing the example with: php script.php arg1 arg2 arg3

The above example will output something similar to:

```
array(4) {
  [0]=>
  string(10) "script.php"
  [1]=>
  string(4) "arg1"
  [2]=>
  string(4) "arg2"
  [3]=>
  string(4) "arg3"
}
```

### Notes

Note:

This is also available as $_SERVER['argv'].

### See Also

- getopt() - Gets options from the command line argument list
- $argc

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.argv.php
