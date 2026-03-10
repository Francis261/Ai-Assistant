# sapi_windows_cp_get

Source: https://devdocs.io/php/function.sapi-windows-cp-get

(PHP 7 >= 7.1.0, PHP 8)

sapi_windows_cp_get — Get current codepage

### Description

```
sapi_windows_cp_get(string $kind = ""): int
```

Gets the current codepage.

### Parameters

The kind of operating system codepage to get, either 'ansi' or 'oem'. Any other value refers to the current codepage of the process.

### Return Values

If kind is 'ansi', the current ANSI code page of the operating system is returned. If kind is 'oem', the current OEM code page of the operating system is returned. Otherwise, the current codepage of the process is returned.

### See Also

- sapi_windows_cp_set() - Set process codepage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sapi-windows-cp-get.php
