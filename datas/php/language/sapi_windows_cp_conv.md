# sapi_windows_cp_conv

Source: https://devdocs.io/php/function.sapi-windows-cp-conv

(PHP 7 >= 7.1.0, PHP 8)

sapi_windows_cp_conv — Convert string from one codepage to another

### Description

```
sapi_windows_cp_conv(int|string $in_codepage, int|string $out_codepage, string $subject): ?string
```

Convert string from one codepage to another.

### Parameters

The codepage of the subject string. Either the codepage name or identifier.

The codepage to convert the subject string to. Either the codepage name or identifier.

The string to convert.

### Return Values

The subject string converted to out_codepage, or null on failure.

### Errors/Exceptions

This function issues E_WARNING level errors, if invalid codepages are given, or if the subject is not valid for in_codepage.

### See Also

- sapi_windows_cp_get() - Get current codepage
- iconv() - Convert a string from one character encoding to another

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sapi-windows-cp-conv.php
