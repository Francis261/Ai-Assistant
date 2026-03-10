# debug_print_backtrace

Source: https://devdocs.io/php/function.debug-print-backtrace

(PHP 5, PHP 7, PHP 8)

debug_print_backtrace — Prints a backtrace

### Description

```
debug_print_backtrace(int $options = 0, int $limit = 0): void
```

debug_print_backtrace() prints a PHP backtrace. It prints the function calls, included/required files and eval()ed stuff.

### Parameters

This parameter is a bitmask for the following options:

This parameter can be used to limit the number of stack frames printed. By default (limit=0) it prints all stack frames.

### Return Values

No value is returned.

### Examples

Example #1 debug_print_backtrace() example

```
<?php
// include.php file

function a() {
    b();
}

function b() {
    c();
}

function c(){
    debug_print_backtrace();
}

a();

?>
```

```
<?php
// test.php file
// this is the file you should run

include 'include.php';
?>
```

The above example will output something similar to:

```
#0  c() called at [/tmp/include.php:10]
#1  b() called at [/tmp/include.php:6]
#2  a() called at [/tmp/include.php:17]
#3  include(/tmp/include.php) called at [/tmp/test.php:3]
```

### See Also

- debug_backtrace() - Generates a backtrace

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.debug-print-backtrace.php
