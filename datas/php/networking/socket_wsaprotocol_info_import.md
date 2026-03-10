# socket_wsaprotocol_info_import

Source: https://devdocs.io/php/function.socket-wsaprotocol-info-import

(PHP 7 >= 7.3.0, PHP 8)

socket_wsaprotocol_info_import — Imports a Socket from another Process

### Description

```
socket_wsaprotocol_info_import(string $info_id): Socket|false
```

Imports a socket which has formerly been exported from another process.

Note: This function is available only on Windows.

### Parameters

The ID which has been returned by a former call to socket_wsaprotocol_info_export().

### Return Values

Returns a Socket instance on success, or false on failure

### Changelog

### See Also

- socket_wsaprotocol_info_export() - Exports the WSAPROTOCOL_INFO Structure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-wsaprotocol-info-import.php
