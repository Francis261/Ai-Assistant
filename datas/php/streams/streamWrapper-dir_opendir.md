# streamWrapper::dir_opendir

Source: https://devdocs.io/php/streamwrapper.dir-opendir

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::dir_opendir — Open directory handle

### Description

```
public streamWrapper::dir_opendir(string $path, int $options): bool
```

This method is called in response to opendir().

### Parameters

Specifies the URL that was passed to opendir().

Note:

The URL can be broken apart with parse_url().

### Return Values

Returns true on success or false on failure.

### See Also

- opendir() - Open directory handle
- streamWrapper::dir_closedir() - Close directory handle
- parse_url() - Parse a URL and return its components

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.dir-opendir.php
