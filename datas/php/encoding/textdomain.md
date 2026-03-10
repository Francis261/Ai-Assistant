# textdomain

Source: https://devdocs.io/php/function.textdomain

(PHP 4, PHP 5, PHP 7, PHP 8)

textdomain — Sets the default domain

### Description

```
textdomain(?string $domain = null): string
```

This function sets the domain to search within when calls are made to gettext(), usually the named after an application.

### Parameters

The new message domain, or null to get the current setting without changing it

### Return Values

If successful, this function returns the current message domain, after possibly changing it.

### Errors/Exceptions

Throws a ValueError if domain is the empty string.

### Changelog

### Notes

Note:

The textdomain() information is maintained per process, not per thread.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.textdomain.php
