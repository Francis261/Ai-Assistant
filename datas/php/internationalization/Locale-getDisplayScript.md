# Locale::getDisplayScript

Source: https://devdocs.io/php/locale.getdisplayscript

# locale_get_display_script

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::getDisplayScript -- locale_get_display_script — Returns an appropriately localized display name for script of the input locale

### Description

Object-oriented style

```
public static Locale::getDisplayScript(string $locale, ?string $displayLocale = null): string|false
```

Procedural style

```
locale_get_display_script(string $locale, ?string $displayLocale = null): string|false
```

Returns an appropriately localized display name for script of the input locale. If is null then the default locale is used.

### Parameters

The locale to return a display script for

Optional format locale to use to display the script name

### Return Values

Display name of the script for the locale in the format appropriate for displayLocale, or false on failure.

### Changelog

### Examples

Example #1 locale_get_display_script() example

```
<?php
echo locale_get_display_script('sl-Latn-IT-nedis', 'en');
echo ";\n";
echo locale_get_display_script('sl-Latn-IT-nedis', 'fr');
echo ";\n";
echo locale_get_display_script('sl-Latn-IT-nedis', 'de');
?>
```

Example #2 OO example

```
<?php
echo Locale::getDisplayScript('sl-Latn-IT-nedis', 'en');
echo ";\n";
echo Locale::getDisplayScript('sl-Latn-IT-nedis', 'fr');
echo ";\n";
echo Locale::getDisplayScript('sl-Latn-IT-nedis', 'de');
?>
```

The above example will output:

```
Latin;
latin;
Lateinisch
```

### See Also

- locale_get_display_name() - Returns an appropriately localized display name for the input locale
- locale_get_display_language() - Returns an appropriately localized display name for language of the inputlocale
- locale_get_display_region() - Returns an appropriately localized display name for region of the input locale
- locale_get_display_variant() - Returns an appropriately localized display name for variants of the input locale

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.getdisplayscript.php
