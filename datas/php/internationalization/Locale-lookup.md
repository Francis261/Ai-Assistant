# Locale::lookup

Source: https://devdocs.io/php/locale.lookup

# locale_lookup

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::lookup -- locale_lookup — Searches the language tag list for the best match to the language

### Description

Object-oriented style

```
public static Locale::lookup(
 array $languageTag,
 string $locale,
 bool $canonicalize = false,
 ?string $defaultLocale = null
): ?string
```

Procedural style

```
locale_lookup(
 array $languageTag,
 string $locale,
 bool $canonicalize = false,
 ?string $defaultLocale = null
): ?string
```

Searches the items in languageTag for the best match to the language range specified in locale according to RFC 4647's lookup algorithm.

### Parameters

An array containing a list of language tags to compare to locale. Maximum 100 items allowed.

The locale to use as the language range when matching.

If true, the arguments will be converted to canonical form before matching.

The locale to use if no match is found.

### Return Values

The closest matching language tag or default value.

Returns null when the length of locale exceeds INTL_MAX_LOCALE_LEN.

### Changelog

### Examples

Example #1 locale_lookup() example

```
<?php
$arr = array(
    'de-DEVA',
    'de-DE-1996',
    'de',
    'de-De'
);
echo locale_lookup($arr, 'de-DE-1996-x-prv1-prv2', true, 'en_US');
?>
```

Example #2 OO example

```
<?php
$arr = array(
    'de-DEVA',
    'de-DE-1996',
    'de',
    'de-De'
);
echo Locale::lookup($arr, 'de-DE-1996-x-prv1-prv2', true, 'en_US');
?>
```

The above example will output:

```
de_de_1996
```

### See Also

- locale_filter_matches() - Checks if a language tag filter matches with locale

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.lookup.php
