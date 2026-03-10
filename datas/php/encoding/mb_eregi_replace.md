# mb_eregi_replace

Source: https://devdocs.io/php/function.mb-eregi-replace

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_eregi_replace — Replace regular expression with multibyte support ignoring case

### Description

```
mb_eregi_replace(
 string $pattern,
 string $replacement,
 string $string,
 ?string $options = null
): string|false|null
```

Scans string for matches to pattern, then replaces the matched text with replacement.

### Parameters

The regular expression pattern. Multibyte characters may be used. The case will be ignored.

The replacement text.

The searched string.

### Return Values

The resultant string or false on error. If string is not valid for the current encoding, null is returned.

### Changelog

### Notes

Note:

The internal encoding or the character encoding specified by mb_regex_encoding() will be used as the character encoding for this function.

Never use the e modifier when working on untrusted input. No automatic escaping will happen (as known from preg_replace()). Not taking care of this will most likely create remote code execution vulnerabilities in your application.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_ereg_replace() - Replace regular expression with multibyte support

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-eregi-replace.php
