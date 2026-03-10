# socket_addrinfo_lookup

Source: https://devdocs.io/php/function.socket-addrinfo-lookup

(PHP 7 >= 7.2.0, PHP 8)

socket_addrinfo_lookup — Get array with contents of getaddrinfo about the given hostname

### Description

```
socket_addrinfo_lookup(string $host, ?string $service = null, array $hints = []): array|false
```

Lookup different ways we can connect to host. The returned array contains a set of AddressInfo instances that we can bind to using socket_addrinfo_bind().

### Parameters

Hostname to search.

The service to connect to. If service is a numeric string, it designates the port. Otherwise it designates a network service name, which is mapped to a port by the operating system.

Hints provide criteria for selecting addresses returned. You may specify the hints as defined by getaddrinfo.

### Return Values

Returns an array of AddressInfo instances that can be used with the socket_addrinfo_()* family of functions. On failure, false is returned.

### Changelog

### See Also

- socket_addrinfo_bind() - Create and bind to a socket from a given addrinfo
- socket_addrinfo_connect() - Create and connect to a socket from a given addrinfo
- socket_addrinfo_explain() - Get information about addrinfo

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-addrinfo-lookup.php
