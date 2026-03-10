# socket_wsaprotocol_info_release

Source: https://devdocs.io/php/function.socket-wsaprotocol-info-release

(PHP 7 >= 7.3.0, PHP 8)

socket_wsaprotocol_info_release — Releases an exported WSAPROTOCOL_INFO Structure

### Description

```
socket_wsaprotocol_info_release(string $info_id): bool
```

Releases the shared memory corresponding to the given info_id.

Note: This function is available only on Windows.

### Parameters

The ID which has been returned by a former call to socket_wsaprotocol_info_export().

### Return Values

Returns true on success or false on failure.

### See Also

- socket_wsaprotocol_info_export() - Exports the WSAPROTOCOL_INFO Structure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-wsaprotocol-info-release.php
