# wddx_packet_start

Source: https://devdocs.io/php/function.wddx-packet-start

(PHP 4, PHP 5, PHP 7)

wddx_packet_start — Starts a new WDDX packet with structure inside it

This function was REMOVED in PHP 7.4.0.

### Description

```
wddx_packet_start(string $comment = ?): resource
```

Start a new WDDX packet for incremental addition of variables. It automatically creates a structure definition inside the packet to contain the variables.

### Parameters

An optional comment string.

### Return Values

Returns a packet ID for use in later functions, or false on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.wddx-packet-start.php
