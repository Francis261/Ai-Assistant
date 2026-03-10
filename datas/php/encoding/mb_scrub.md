# mb_scrub

Source: https://devdocs.io/php/function.mb-scrub

(PHP 7 >= 7.2.0, PHP 8)

mb_scrub — Replace ill-formed byte sequences with the substitute character

### Description

```
mb_scrub(string $string, ?string $encoding = null): string
```

Perform a character set conversion from the specified encoding, or the default encoding if no encoding was specified, to the same encoding. This has the effect of replacing any invalid byte sequences with the substitute character.

### Parameters

The input string.

The encoding used to interpret string. If it is omitted or null, the mbstring.internal_encoding setting will be used if set, otherwise the default_charset setting will be used.

### Return Values

The string result with invalid byte sequences replaced.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-scrub.php
