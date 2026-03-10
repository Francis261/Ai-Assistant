# socket_addrinfo_explain

Source: https://devdocs.io/php/function.socket-addrinfo-explain

(PHP 7 >= 7.2.0, PHP 8)

socket_addrinfo_explain — Get information about addrinfo

### Description

```
socket_addrinfo_explain(AddressInfo $address): array
```

socket_addrinfo_explain() exposed the underlying addrinfo structure.

### Parameters

AddressInfo instance created from socket_addrinfo_lookup().

### Return Values

Returns an array containing the fields in the addrinfo structure.

### Changelog

### See Also

- socket_addrinfo_bind() - Create and bind to a socket from a given addrinfo
- socket_addrinfo_connect() - Create and connect to a socket from a given addrinfo
- socket_addrinfo_lookup() - Get array with contents of getaddrinfo about the given hostname

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-addrinfo-explain.php
