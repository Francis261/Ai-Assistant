# streamWrapper::dir_closedir

Source: https://devdocs.io/php/streamwrapper.dir-closedir

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::dir_closedir — Close directory handle

### Description

```
public streamWrapper::dir_closedir(): bool
```

This method is called in response to closedir().

Any resources which were locked, or allocated, during opening and use of the directory stream should be released.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### See Also

- closedir() - Close directory handle
- streamWrapper::dir_opendir() - Open directory handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.dir-closedir.php
