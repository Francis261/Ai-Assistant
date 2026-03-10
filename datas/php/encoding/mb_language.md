# mb_language

Source: https://devdocs.io/php/function.mb-language

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_language — Set/Get current language

### Description

```
mb_language(?string $language = null): string|bool
```

Set/Get the current language.

### Parameters

Used for encoding e-mail messages. The valid languages are listed in the following table. mb_send_mail() uses this setting to encode e-mail.

### Return Values

If language is set and language is valid, it returns true. Otherwise, it returns false. When language is omitted or null, it returns the language name as a string.

### Changelog

### See Also

- mb_send_mail() - Send encoded mail

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-language.php
