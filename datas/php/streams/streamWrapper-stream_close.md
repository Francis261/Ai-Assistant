# streamWrapper::stream_close

Source: https://devdocs.io/php/streamwrapper.stream-close

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_close — Close a resource

### Description

```
public streamWrapper::stream_close(): void
```

This method is called in response to fclose().

All resources that were locked, or allocated, by the wrapper should be released.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- fclose() - Closes an open file pointer
- streamWrapper::dir_closedir() - Close directory handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-close.php
