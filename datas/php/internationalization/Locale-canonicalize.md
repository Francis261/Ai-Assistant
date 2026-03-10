# Locale::canonicalize

Source: https://devdocs.io/php/locale.canonicalize

# locale_canonicalize

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::canonicalize -- locale_canonicalize — Canonicalize the locale string

### Description

```
public static Locale::canonicalize(string $locale): ?string
```

Canonicalizes the passed locale string to ICU format.

This does not necessarily indicate or return a valid locale. It is only a version of the input that has been canonicalized according to ICU rules.

The behavior of this function depends on the version of ICU PHP is using (INTL_ICU_VERSION).

### Parameters

### Return Values

Canonicalized locale string.

Returns null when the length of locale exceeds INTL_MAX_LOCALE_LEN.

### Examples

Example #1 locale_canonicalize() example

```
echo Locale::canonicalize('en-US.utf8') . "\n";
echo Locale::canonicalize('totally-not-valid') . "\n";
```

The above example will output something similar to:

```
en_US
totally_NOT_VALID
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.canonicalize.php
