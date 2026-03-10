# imap_headers

Source: https://devdocs.io/php/function.imap-headers

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_headers — Returns headers for all messages in a mailbox

### Description

```
imap_headers(IMAP\Connection $imap): array|false
```

Returns headers for all messages in a mailbox.

### Parameters

An IMAP\Connection instance.

### Return Values

Returns an array of string formatted with header info. One element per mail message. Returns false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-headers.php
