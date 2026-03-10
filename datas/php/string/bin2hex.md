# bin2hex

Source: https://devdocs.io/php/function.bin2hex

(PHP 4, PHP 5, PHP 7, PHP 8)

bin2hex — Convert binary data into hexadecimal representation

### Description

```
bin2hex(string $string): string
```

Returns an ASCII string containing the hexadecimal representation of string. The conversion is done byte-wise with the high-nibble first.

### Parameters

A string.

### Return Values

Returns the hexadecimal representation of the given string.

### Examples

Example #1 bin2hex() example

```
<?php

$hex = bin2hex('Hello world!');

var_dump($hex);
var_dump(hex2bin($hex));
?>
```

The above example will output:

```
string(24) "48656c6c6f20776f726c6421"
string(12) "Hello world!"
```

### See Also

- hex2bin() - Decodes a hexadecimally encoded binary string
- pack() - Pack data into binary string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bin2hex.php
