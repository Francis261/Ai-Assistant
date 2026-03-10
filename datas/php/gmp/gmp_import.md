# gmp_import

Source: https://devdocs.io/php/function.gmp-import

(PHP 5 >= 5.6.1, PHP 7, PHP 8)

gmp_import — Import from a binary string

### Description

```
gmp_import(string $data, int $word_size = 1, int $flags = GMP_MSW_FIRST | GMP_NATIVE_ENDIAN): GMP
```

Import a GMP number from a binary string

### Parameters

The binary string being imported

Default value is 1. The number of bytes in each chunk of binary data. This is mainly used in conjunction with the options parameter.

Default value is GMP_MSW_FIRST | GMP_NATIVE_ENDIAN.

### Return Values

Returns a GMP number.

### Changelog

### Examples

Example #1 gmp_import() example

```
<?php
$number = gmp_import("\0");
echo gmp_strval($number) . "\n";

$number = gmp_import("\0\1\2");
echo gmp_strval($number) . "\n";
?>
```

The above example will output:

```
0
258
```

### See Also

- gmp_export() - Export to a binary string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-import.php
