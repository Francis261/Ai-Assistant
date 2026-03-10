# imap_ping

Source: https://devdocs.io/php/function.imap-ping

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_ping — Check if the IMAP stream is still active

### Description

```
imap_ping(IMAP\Connection $imap): bool
```

imap_ping() pings the stream to see if it's still active. It may discover new mail; this is the preferred method for a periodic "new mail check" as well as a "keep alive" for servers which have inactivity timeout.

### Parameters

An IMAP\Connection instance.

### Return Values

Returns true if the stream is still alive, false otherwise.

### Changelog

### Examples

Example #1 imap_ping() Example

```
<?php

$imap = imap_open("{imap.example.org}", "mailadmin", "password");

// after some sleeping
if (!imap_ping($imap)) {
    // do some stuff to reconnect
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-ping.php
