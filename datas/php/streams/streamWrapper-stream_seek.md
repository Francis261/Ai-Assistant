# streamWrapper::stream_seek

Source: https://devdocs.io/php/streamwrapper.stream-seek

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_seek — Seeks to specific location in a stream

### Description

```
public streamWrapper::stream_seek(int $offset, int $whence): bool
```

This method is called in response to fseek().

The read/write position of the stream should be updated according to the offset and whence.

### Parameters

The stream offset to seek to.

Possible values:

- SEEK_SET - Set position equal to offset bytes.
- SEEK_CUR - Set position to current location plus offset.
- SEEK_END - Set position to end-of-file plus offset.

Note: The current implementation never sets whence to SEEK_CUR; instead such seeks are internally converted to SEEK_SET seeks.

### Return Values

Return true if the position was updated, false otherwise.

### Notes

Note:

If not implemented, false is assumed as the return value.

Note:

Upon success, streamWrapper::stream_tell() is called directly after calling streamWrapper::stream_seek(). If streamWrapper::stream_tell() fails, the return value to the caller function will be set to false.

Note:

Not all seeks operations on the stream will result in this function being called. PHP streams have read buffering enabled by default (see also stream_set_read_buffer()) and seeking may be done by merely moving the buffer pointer.

### See Also

- fseek() - Seeks on a file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-seek.php
