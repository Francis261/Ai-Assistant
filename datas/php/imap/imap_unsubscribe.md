# imap_unsubscribe

Source: https://devdocs.io/php/function.imap-unsubscribe

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_unsubscribe — Unsubscribe from a mailbox

### Description

```
imap_unsubscribe(IMAP\Connection $imap, string $mailbox): bool
```

Unsubscribe from the specified mailbox.

### Parameters

An IMAP\Connection instance.

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- imap_subscribe() - Subscribe to a mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-unsubscribe.php
