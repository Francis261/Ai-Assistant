# ssh2_send_eof

Source: https://devdocs.io/php/function.ssh2-send-eof

(PECL ssh2 >= 1.3)

ssh2_send_eof — Send EOF to stream

### Description

```
ssh2_send_eof(resource $channel): bool
```

Sends an EOF to the stream; this is typically used to close standard input, while keeping output and error alive. For example, one can send a remote process some data over standard input, close it to start processing, and still be able to read out the results without creating additional files.

### Parameters

An SSH stream; can be acquired through functions like ssh2_fetch_stream() or ssh2_connect().

### Return Values

Returns true on success or false on failure.

### See Also

- ssh2_fetch_stream() - Fetch an extended data stream

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-send-eof.php
