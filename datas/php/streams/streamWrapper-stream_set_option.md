# streamWrapper::stream_set_option

Source: https://devdocs.io/php/streamwrapper.stream-set-option

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

streamWrapper::stream_set_option — Change stream options

### Description

```
public streamWrapper::stream_set_option(int $option, int $arg1, int $arg2): bool
```

This method is called to set options on the stream.

### Parameters

One of:

- STREAM_OPTION_BLOCKING (The method was called in response to stream_set_blocking())
- STREAM_OPTION_READ_TIMEOUT (The method was called in response to stream_set_timeout())
- STREAM_OPTION_READ_BUFFER (The method was called in response to stream_set_read_buffer())
- STREAM_OPTION_WRITE_BUFFER (The method was called in response to stream_set_write_buffer())

If option is

- STREAM_OPTION_BLOCKING: requested blocking mode (1 meaning block 0 not blocking).
- STREAM_OPTION_READ_TIMEOUT: the timeout in seconds.
- STREAM_OPTION_READ_BUFFER: buffer mode (STREAM_BUFFER_NONE or STREAM_BUFFER_FULL).
- STREAM_OPTION_WRITE_BUFFER: buffer mode (STREAM_BUFFER_NONE or STREAM_BUFFER_FULL).

If option is

- STREAM_OPTION_BLOCKING: This option is not set.
- STREAM_OPTION_READ_TIMEOUT: the timeout in microseconds.
- STREAM_OPTION_READ_BUFFER: the requested buffer size.
- STREAM_OPTION_WRITE_BUFFER: the requested buffer size.

### Return Values

Returns true on success or false on failure. If option is not implemented, false should be returned.

### See Also

- stream_set_blocking() - Set blocking/non-blocking mode on a stream
- stream_set_timeout() - Set timeout period on a stream
- stream_set_write_buffer() - Sets write file buffering on the given stream

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-set-option.php
