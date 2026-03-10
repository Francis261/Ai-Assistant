# bind_textdomain_codeset

Source: https://devdocs.io/php/function.bind-textdomain-codeset

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

bind_textdomain_codeset — Specify or get the character encoding in which the messages from the DOMAIN message catalog will be returned

### Description

```
bind_textdomain_codeset(string $domain, ?string $codeset = null): string|false
```

bind_textdomain_codeset() allows to set or get the encoding in which messages from domain will be returned by gettext() and similar functions.

### Parameters

The domain.

The code set. If null, the currently set encoding is returned.

### Return Values

A string on success.

### Errors/Exceptions

Throws a ValueError if domain is the empty string.

### Changelog

### Notes

Note:

The bind_textdomain_codeset() information is maintained per process, not per thread.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bind-textdomain-codeset.php
