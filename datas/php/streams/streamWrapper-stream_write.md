# streamWrapper::stream_write

Source: https://devdocs.io/php/streamwrapper.stream-write

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_write — Write to stream

### Description

```
public streamWrapper::stream_write(string $data): int
```

This method is called in response to fwrite().

Note:

Remember to update the current position of the stream by number of bytes that were successfully written.

### Parameters

Should be stored into the underlying stream.

Note:

If there is not enough room in the underlying stream, store as much as possible.

### Return Values

Should return the number of bytes that were successfully stored, or 0 if none could be stored.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

Note:

If the return value is greater the length of data, E_WARNING will be emitted and the return value will truncated to its length.

### See Also

- fwrite() - Binary-safe file write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-write.php
