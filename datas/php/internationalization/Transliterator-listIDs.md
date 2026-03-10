# Transliterator::listIDs

Source: https://devdocs.io/php/transliterator.listids

# transliterator_list_ids

(PHP 5 >= 5.4.0, PHP 7, PHP 8, PECL intl >= 2.0.0)

Transliterator::listIDs -- transliterator_list_ids — Get transliterator IDs

### Description

Object-oriented style

```
public static Transliterator::listIDs(): array|false
```

Procedural style

```
transliterator_list_ids(): array|false
```

Returns an array with the registered transliterator IDs.

### Parameters

This function has no parameters.

### Return Values

An array of registered transliterator IDs on success, or false on failure.

### Examples

Example #1 Retrieving the registered transliterator IDs

```
<?php
print_r(Transliterator::listIDs());
?>
```

The above example will output something similar to:

```
Array
(
    [0] => ASCII-Latin
    [1] => Accents-Any
    [2] => Amharic-Latin/BGN
    [3] => Any-Accents
    [4] => Any-Publishing
...
    [650] => Any-ps_Latn/BGN
    [651] => Any-tk/BGN
    [652] => Any-ch_FONIPA
    [653] => Any-cs_FONIPA
    [654] => Any-cy_FONIPA
)
```

### See Also

- Transliterator::getErrorMessage() - Get last error message
- Transliterator::transliterate() - Transliterate a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/transliterator.listids.php
