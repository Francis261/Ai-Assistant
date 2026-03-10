# gmp_export

Source: https://devdocs.io/php/function.gmp-export

(PHP 5 >= 5.6.1, PHP 7, PHP 8)

gmp_export — Export to a binary string

### Description

```
gmp_export(GMP|int|string $num, int $word_size = 1, int $flags = GMP_MSW_FIRST | GMP_NATIVE_ENDIAN): string
```

Export a GMP number to a binary string

### Parameters

The GMP number being exported

Default value is 1. The number of bytes in each chunk of binary data. This is mainly used in conjunction with the options parameter.

Default value is GMP_MSW_FIRST | GMP_NATIVE_ENDIAN.

### Return Values

Returns a string.

### Changelog

### Examples

Example #1 gmp_export() example

```
<?php
$number = gmp_init(16705);
echo gmp_export($number) . "\n";
?>
```

The above example will output:

```
AA
```

### See Also

- gmp_import() - Import from a binary string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-export.php
