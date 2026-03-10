# socket_wsaprotocol_info_export

Source: https://devdocs.io/php/function.socket-wsaprotocol-info-export

(PHP 7 >= 7.3.0, PHP 8)

socket_wsaprotocol_info_export — Exports the WSAPROTOCOL_INFO Structure

### Description

```
socket_wsaprotocol_info_export(Socket $socket, int $process_id): string|false
```

Exports the WSAPROTOCOL_INFO structure into shared memory and returns an identifier to be used with socket_wsaprotocol_info_import(). The exported ID is only valid for the given process_id.

Note: This function is available only on Windows.

### Parameters

A Socket instance.

The ID of the process which will import the socket.

### Return Values

Returns an identifier to be used for the import, or false on failure

### Changelog

### See Also

- socket_wsaprotocol_info_import() - Imports a Socket from another Process
- socket_wsaprotocol_info_release() - Releases an exported WSAPROTOCOL_INFO Structure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-wsaprotocol-info-export.php
