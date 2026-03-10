# imap_delete

Source: https://devdocs.io/php/function.imap-delete

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_delete — Mark a message for deletion from current mailbox

### Description

```
imap_delete(IMAP\Connection $imap, string $message_nums, int $flags = 0): true
```

Marks messages listed in message_nums for deletion. Messages marked for deletion will stay in the mailbox until either imap_expunge() is called or imap_close() is called with the optional parameter CL_EXPUNGE.

### Parameters

An IMAP\Connection instance.

A string representing one or more messages in IMAP4-style sequence format ("n", "n:m", or combination of these delimited by commas).

You can set the FT_UID which tells the function to treat the message_nums argument as a UID.

### Return Values

Always returns true.

### Errors/Exceptions

Throws a ValueError if flags is invalid.

### Changelog

### Examples

Example #1 imap_delete() example

```
<?php

$mbox = imap_open("{imap.example.org}INBOX", "username", "password")
    or die("Can't connect: " . imap_last_error());

$check = imap_mailboxmsginfo($mbox);
echo "Messages before delete: " . $check->Nmsgs . "<br />\n";

imap_delete($mbox, 1);

$check = imap_mailboxmsginfo($mbox);
echo "Messages after  delete: " . $check->Nmsgs . "<br />\n";

imap_expunge($mbox);

$check = imap_mailboxmsginfo($mbox);
echo "Messages after expunge: " . $check->Nmsgs . "<br />\n";

imap_close($mbox);
?>
```

### Notes

Note:

IMAP mailboxes may not have their message flags saved between connections, so imap_expunge() should be called during the same connection in order to guarantee that messages marked for deletion will actually be purged.

### See Also

- imap_undelete() - Unmark the message which is marked deleted
- imap_expunge() - Delete all messages marked for deletion
- imap_close() - Close an IMAP stream

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-delete.php
