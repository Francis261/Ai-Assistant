# socket_addrinfo_connect

Source: https://devdocs.io/php/function.socket-addrinfo-connect

(PHP 7 >= 7.2.0, PHP 8)

socket_addrinfo_connect — Create and connect to a socket from a given addrinfo

### Description

```
socket_addrinfo_connect(AddressInfo $address): Socket|false
```

Create a Socket instance, and connect it to the provided AddressInfo instance. The return value of this function may be used with the rest of the socket functions.

### Parameters

AddressInfo instance created from socket_addrinfo_lookup().

### Return Values

Returns a Socket instance on success or false on failure.

### Changelog

### See Also

- socket_addrinfo_bind() - Create and bind to a socket from a given addrinfo
- socket_addrinfo_explain() - Get information about addrinfo
- socket_addrinfo_lookup() - Get array with contents of getaddrinfo about the given hostname

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-addrinfo-connect.php
