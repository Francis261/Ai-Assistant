# Locale::getKeywords

Source: https://devdocs.io/php/locale.getkeywords

# locale_get_keywords

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::getKeywords -- locale_get_keywords — Gets the keywords for the input locale

### Description

Object-oriented style

```
public static Locale::getKeywords(string $locale): array|false|null
```

Procedural style

```
locale_get_keywords(string $locale): array|false|null
```

Gets the keywords for the input locale.

### Parameters

The locale to extract the keywords from

### Return Values

Associative array containing the keyword-value pairs for this locale

Returns null when the length of locale exceeds INTL_MAX_LOCALE_LEN.

### Examples

Example #1 locale_get_keywords() example

```
<?php
$keywords_arr = locale_get_keywords('de_DE@currency=EUR;collation=PHONEBOOK');
if ($keywords_arr) {
    foreach ($keywords_arr as $key => $value) {
        echo "$key = $value\n";
    }
}
?>
```

Example #2 OO example

```
<?php
$keywords_arr = Locale::getKeywords('de_DE@currency=EUR;collation=PHONEBOOK');
if ($keywords_arr) {
    foreach ($keywords_arr as $key => $value) {
        echo "$key = $value\n";
    }
}
?>
```

The above example will output:

```
collation = PHONEBOOK
currency = EUR
```

### See Also

- locale_get_all_variants() - Gets the variants for the input locale

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.getkeywords.php
