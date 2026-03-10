# streamWrapper::stream_read

Source: https://devdocs.io/php/streamwrapper.stream-read

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_read — Read from stream

### Description

```
public streamWrapper::stream_read(int $count): string|false
```

This method is called in response to fread() and fgets().

Note:

Remember to update the read/write position of the stream (by the number of bytes that were successfully read).

### Parameters

How many bytes of data from the current position should be returned.

### Return Values

If there are less than count bytes available, as many as are available should be returned. If no more data is available, an empty string should be returned. To signal that reading failed, false should be returned.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

Note:

If the return value is longer then count an E_WARNING error will be emitted, and excess data will be lost.

### Notes

Note:

streamWrapper::stream_eof() is called directly after calling streamWrapper::stream_read() to check if EOF has been reached. If not implemented, EOF is assumed.

When reading the whole file (for example, with file_get_contents()), PHP will call streamWrapper::stream_read() followed by streamWrapper::stream_eof() in a loop but as long as streamWrapper::stream_read() returns a non-empty string, the return value of streamWrapper::stream_eof() is ignored.

### See Also

- fread() - Binary-safe file read
- fgets() - Gets line from file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-read.php
