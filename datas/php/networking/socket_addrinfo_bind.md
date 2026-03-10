# socket_addrinfo_bind

Source: https://devdocs.io/php/function.socket-addrinfo-bind

(PHP 7 >= 7.2.0, PHP 8)

socket_addrinfo_bind — Create and bind to a socket from a given addrinfo

### Description

```
socket_addrinfo_bind(AddressInfo $address): Socket|false
```

Create a Socket instance, and bind it to the provided AddressInfo. The return value of this function may be used with socket_listen().

### Parameters

AddressInfo instance created from socket_addrinfo_lookup().

### Return Values

Returns a Socket instance on success or false on failure.

### Changelog

### See Also

- socket_addrinfo_connect() - Create and connect to a socket from a given addrinfo
- socket_addrinfo_explain() - Get information about addrinfo
- socket_addrinfo_lookup() - Get array with contents of getaddrinfo about the given hostname
- socket_listen() - Listens for a connection on a socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-addrinfo-bind.php
