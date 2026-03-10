# streamWrapper::stream_eof

Source: https://devdocs.io/php/streamwrapper.stream-eof

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_eof — Tests for end-of-file on a file pointer

### Description

```
public streamWrapper::stream_eof(): bool
```

This method is called in response to feof().

### Parameters

This function has no parameters.

### Return Values

Should return true if the read/write position is at the end of the stream and if no more data is available to be read, or false otherwise.

### Notes

When reading the whole file (for example, with file_get_contents()), PHP will call streamWrapper::stream_read() followed by streamWrapper::stream_eof() in a loop but as long as streamWrapper::stream_read() returns a non-empty string, the return value of streamWrapper::stream_eof() is ignored.

### See Also

- feof() - Tests for end-of-file on a file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-eof.php
