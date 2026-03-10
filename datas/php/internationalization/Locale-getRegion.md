# Locale::getRegion

Source: https://devdocs.io/php/locale.getregion

# locale_get_region

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::getRegion -- locale_get_region — Gets the region for the input locale

### Description

Object-oriented style

```
public static Locale::getRegion(string $locale): ?string
```

Procedural style

```
locale_get_region(string $locale): ?string
```

Gets the region for the input locale.

### Parameters

The locale to extract the region code from

### Return Values

The region subtag for the locale or null if not present

Returns null when the length of locale exceeds INTL_MAX_LOCALE_LEN.

### Examples

Example #1 locale_get_region() example

```
<?php
echo locale_get_region('de-CH-1901');
?>
```

Example #2 OO example

```
<?php
echo Locale::getRegion('de-CH-1901');
?>
```

The above example will output:

```
CH
```

### See Also

- locale_get_primary_language() - Gets the primary language for the input locale
- locale_get_script() - Gets the script for the input locale
- locale_get_all_variants() - Gets the variants for the input locale

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.getregion.php
