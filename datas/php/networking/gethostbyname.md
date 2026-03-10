# gethostbyname

Source: https://devdocs.io/php/function.gethostbyname

(PHP 4, PHP 5, PHP 7, PHP 8)

gethostbyname — Get the IPv4 address corresponding to a given Internet host name

### Description

```
gethostbyname(string $hostname): string
```

Returns the IPv4 address of the Internet host specified by hostname.

### Parameters

The host name.

### Return Values

Returns the IPv4 address or a string containing the unmodified hostname on failure.

### Examples

Example #1 A simple gethostbyname() example

```
<?php
$ip = gethostbyname('www.example.com');

echo $ip;
?>
```

### See Also

- gethostbyaddr() - Get the Internet host name corresponding to a given IP address
- gethostbynamel() - Get a list of IPv4 addresses corresponding to a given Internet host name
- inet_pton() - Converts a human readable IP address to its packed in_addr representation
- inet_ntop() - Converts a packed internet address to a human readable representation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gethostbyname.php
