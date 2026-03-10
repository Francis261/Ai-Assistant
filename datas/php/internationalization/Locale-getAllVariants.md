# Locale::getAllVariants

Source: https://devdocs.io/php/locale.getallvariants

# locale_get_all_variants

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::getAllVariants -- locale_get_all_variants — Gets the variants for the input locale

### Description

Object-oriented style

```
public static Locale::getAllVariants(string $locale): ?array
```

Procedural style

```
locale_get_all_variants(string $locale): ?array
```

Gets the variants for the input locale

### Parameters

The locale to extract the variants from

### Return Values

The array containing the list of all variants subtag for the locale or null if not present

Returns null when the length of locale exceeds INTL_MAX_LOCALE_LEN.

### Examples

Example #1 locale_get_all_variants() example

```
<?php
$arr = locale_get_all_variants('sl_IT_NEDIS_ROJAZ_1901');
var_export( $arr );
?>
```

Example #2 OO example

```
<?php
 $arr = Locale::getAllVariants('sl_IT_NEDIS_ROJAZ_1901');
 var_export( $arr );
?>
```

The above example will output:

```
array (
    0 => 'NEDIS',
    1 => 'ROJAZ',
    2 => '1901',
)
```

### See Also

- locale_get_primary_language() - Gets the primary language for the input locale
- locale_get_script() - Gets the script for the input locale
- locale_get_region() - Gets the region for the input locale

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.getallvariants.php
