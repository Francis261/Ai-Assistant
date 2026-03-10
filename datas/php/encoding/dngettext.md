# dngettext

Source: https://devdocs.io/php/function.dngettext

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

dngettext — Plural version of dgettext

### Description

```
dngettext(
 string $domain,
 string $singular,
 string $plural,
 int $count
): string
```

The dngettext() function allows you to override the current domain for a single plural message lookup.

### Parameters

The domain

### Return Values

A string on success.

### Errors/Exceptions

Throws a ValueError if domain is the empty string.

### Changelog

### See Also

- ngettext() - Plural version of gettext

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dngettext.php
