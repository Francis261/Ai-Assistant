# Locale::filterMatches

Source: https://devdocs.io/php/locale.filtermatches

# locale_filter_matches

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::filterMatches -- locale_filter_matches — Checks if a language tag filter matches with locale

### Description

Object-oriented style

```
public static Locale::filterMatches(string $languageTag, string $locale, bool $canonicalize = false): ?bool
```

Procedural style

```
locale_filter_matches(string $languageTag, string $locale, bool $canonicalize = false): ?bool
```

Checks if a languageTag filter matches with locale according to RFC 4647's basic filtering algorithm

### Parameters

The language tag to check

The language range to check against

If true, the arguments will be converted to canonical form before matching.

### Return Values

true if locale matches languageTag false otherwise.

Returns null when the length of locale exceeds INTL_MAX_LOCALE_LEN.

### Examples

Example #1 locale_filter_matches() example

```
<?php
echo (locale_filter_matches('de-DEVA','de-DE', false)) ? "Matches" : "Does not match";
echo '; ';
echo (locale_filter_matches('de-DE_1996','de-DE', false)) ? "Matches" : "Does not match";
?>
```

Example #2 OO example

```
<?php
echo (Locale::filterMatches('de-DEVA','de-DE', false)) ? "Matches" : "Does not match";
echo '; ';
echo (Locale::filterMatches('de-DE-1996','de-DE', false)) ? "Matches" : "Does not match";
?>
```

The above example will output:

```
Does not match; Matches
```

### See Also

- locale_lookup() - Searches the language tag list for the best match to the language

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.filtermatches.php
