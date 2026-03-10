# Locale::getScript

Source: https://devdocs.io/php/locale.getscript

# locale_get_script

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::getScript -- locale_get_script — Gets the script for the input locale

### Description

Object-oriented style

```
public static Locale::getScript(string $locale): ?string
```

Procedural style

```
locale_get_script(string $locale): ?string
```

Gets the script for the input locale.

### Parameters

The locale to extract the script code from

### Return Values

The script subtag for the locale or null if not present

### Examples

Example #1 locale_get_script() example

```
<?php
echo locale_get_script('sr-Cyrl');
?>
```

Example #2 OO example

```
<?php
echo Locale::getScript('sr-Cyrl');
?>
```

The above example will output:

```
Cyrl
```

### See Also

- locale_get_primary_language() - Gets the primary language for the input locale
- locale_get_region() - Gets the region for the input locale
- locale_get_all_variants() - Gets the variants for the input locale

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.getscript.php
