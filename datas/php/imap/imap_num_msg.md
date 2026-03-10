# imap_num_msg

Source: https://devdocs.io/php/function.imap-num-msg

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_num_msg — Gets the number of messages in the current mailbox

### Description

```
imap_num_msg(IMAP\Connection $imap): int|false
```

Gets the number of messages in the current mailbox.

### Parameters

An IMAP\Connection instance.

### Return Values

Return the number of messages in the current mailbox, as an integer, or false on error.

### Changelog

### See Also

- imap_num_recent() - Gets the number of recent messages in current mailbox
- imap_status() - Returns status information on a mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-num-msg.php
