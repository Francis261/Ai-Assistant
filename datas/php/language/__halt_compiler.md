# __halt_compiler

Source: https://devdocs.io/php/function.halt-compiler

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

__halt_compiler — Halts the compiler execution

### Description

```
__halt_compiler(): void
```

Halts the execution of the compiler. This can be useful to embed data in PHP scripts, like the installation files.

Byte position of the data start can be determined by the __COMPILER_HALT_OFFSET__ constant which is defined only if there is a __halt_compiler() presented in the file.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 A __halt_compiler() example

```
<?php

// open this file
$fp = fopen(__FILE__, 'r');

// seek file pointer to data
fseek($fp, __COMPILER_HALT_OFFSET__);

// and output it
var_dump(stream_get_contents($fp));

// the end of the script execution
__halt_compiler(); the installation data (eg. tar, gz, PHP, etc.)
```

### Notes

Note:

__halt_compiler() can only be used from the outermost scope.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.halt-compiler.php
