# streamWrapper::stream_flush

Source: https://devdocs.io/php/streamwrapper.stream-flush

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_flush — Flushes the output

### Description

```
public streamWrapper::stream_flush(): bool
```

This method is called in response to fflush() and when the stream is being closed while any unflushed data has been written to it before.

If you have cached data in your stream but not yet stored it into the underlying storage, you should do so now.

### Parameters

This function has no parameters.

### Return Values

Should return true if the cached data was successfully stored (or if there was no data to store), or false if the data could not be stored.

### Notes

Note:

If not implemented, false is assumed as the return value.

### See Also

- fflush() - Flushes the output to a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-flush.php
