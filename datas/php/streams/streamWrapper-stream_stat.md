# streamWrapper::stream_stat

Source: https://devdocs.io/php/streamwrapper.stream-stat

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_stat — Retrieve information about a file resource

### Description

```
public streamWrapper::stream_stat(): array|false
```

This method is called in response to fstat().

### Parameters

This function has no parameters.

### Return Values

See stat().

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

### See Also

- stat() - Gives information about a file
- streamwrapper::url_stat() - Retrieve information about a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-stat.php
