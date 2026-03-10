# debug_backtrace

Source: https://devdocs.io/php/function.debug-backtrace

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

debug_backtrace — Generates a backtrace

### Description

```
debug_backtrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT, int $limit = 0): array
```

debug_backtrace() generates a PHP backtrace.

### Parameters

This parameter is a bitmask for the following options:

Note:

There are four possible combinations:

This parameter can be used to limit the number of stack frames returned. By default (limit=0) it returns all stack frames.

### Return Values

Returns an array of associative arrays. The possible returned elements are as follows:

### Examples

Example #1 debug_backtrace() example

```
<?php
// filename: /tmp/a.php

function a_test($str)
{
    echo "\nHi: $str";
    var_dump(debug_backtrace());
}

a_test('friend');
?>

<?php
// filename: /tmp/b.php
include_once '/tmp/a.php';
?>
```

Results similar to the following when executing /tmp/b.php:

```
Hi: friend
array(2) {
[0]=>
array(4) {
    ["file"] => string(10) "/tmp/a.php"
    ["line"] => int(10)
    ["function"] => string(6) "a_test"
    ["args"]=>
    array(1) {
      [0] => &string(6) "friend"
    }
}
[1]=>
array(4) {
    ["file"] => string(10) "/tmp/b.php"
    ["line"] => int(2)
    ["args"] =>
    array(1) {
      [0] => string(10) "/tmp/a.php"
    }
    ["function"] => string(12) "include_once"
  }
}
```

### See Also

- trigger_error() - Generates a user-level error/warning/notice message
- debug_print_backtrace() - Prints a backtrace

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.debug-backtrace.php
