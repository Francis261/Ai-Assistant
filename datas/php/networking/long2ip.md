# long2ip

Source: https://devdocs.io/php/function.long2ip

(PHP 4, PHP 5, PHP 7, PHP 8)

long2ip — Converts a long integer address into a string in (IPv4) Internet standard dotted format

### Description

```
long2ip(int $ip): string
```

The function long2ip() generates an Internet address in dotted format (i.e.: aaa.bbb.ccc.ddd) from the long integer representation.

### Parameters

A proper address representation in long integer.

### Return Values

Returns the Internet IP address as a string.

### Changelog

### Notes

Note:

On 32-bit architectures, casting integer representations of IP addresses from string to int will not give correct results for numbers which exceed PHP_INT_MAX.

### See Also

- ip2long() - Converts a string containing an (IPv4) Internet Protocol dotted address into a long integer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.long2ip.php
