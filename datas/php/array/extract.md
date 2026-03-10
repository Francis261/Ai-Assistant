# extract

Source: https://devdocs.io/php/function.extract

(PHP 4, PHP 5, PHP 7, PHP 8)

extract — Import variables into the current symbol table from an array

### Description

```
extract(array &$array, int $flags = EXTR_OVERWRITE, string $prefix = ""): int
```

Import variables from an array into the current symbol table.

Checks each key to see whether it has a valid variable name. It also checks for collisions with existing variables in the symbol table.

Do not use extract() on untrusted data, like user input (e.g. $_GET, $_FILES).

### Parameters

An associative array. This function treats keys as variable names and values as variable values. For each key/value pair it will create a variable in the current symbol table, subject to flags and prefix parameters.

You must use an associative array; a numerically indexed array will not produce results unless you use EXTR_PREFIX_ALL or EXTR_PREFIX_INVALID.

The way invalid/numeric keys and collisions are treated is determined by the extraction flags. It can be one of the following values:

If flags is not specified, it is assumed to be EXTR_OVERWRITE.

Note that prefix is only required if flags is EXTR_PREFIX_SAME, EXTR_PREFIX_ALL, EXTR_PREFIX_INVALID or EXTR_PREFIX_IF_EXISTS. If the prefixed result is not a valid variable name, it is not imported into the symbol table. Prefixes are automatically separated from the array key by an underscore character.

### Return Values

Returns the number of variables successfully imported into the symbol table.

### Examples

Example #1 extract() example

```
<?php
$size = "large";
$var_array = array(
    "color" => "blue",
    "size"  => "medium",
    "shape" => "sphere"
);

extract($var_array, EXTR_PREFIX_SAME, "wddx");

echo "$color, $size, $shape, $wddx_size\n";

?>
```

The above example will output:

```
blue, large, sphere, medium
```

The $size wasn't overwritten because we specified EXTR_PREFIX_SAME, which resulted in $wddx_size being created. If EXTR_SKIP was specified, then $wddx_size wouldn't even have been created. EXTR_OVERWRITE would have caused $size to have value "medium", and EXTR_PREFIX_ALL would result in new variables being named $wddx_color, $wddx_size, and $wddx_shape.

### Notes

Do not use extract() on untrusted data, like user input (i.e. $_GET, $_FILES, etc.). If you do, make sure you use one of the non-overwriting flags values such as EXTR_SKIP and be aware that you should extract in the same order that's defined in variables_order within the php.ini.

### See Also

- compact() - Create array containing variables and their values
- list() - Assign variables as if they were an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.extract.php
