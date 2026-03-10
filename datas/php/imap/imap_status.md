# imap_status

Source: https://devdocs.io/php/function.imap-status

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_status — Returns status information on a mailbox

### Description

```
imap_status(IMAP\Connection $imap, string $mailbox, int $flags): stdClass|false
```

Gets status information about the given mailbox.

### Parameters

An IMAP\Connection instance.

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

Valid flags are:

- SA_MESSAGES - set $status->messages to the number of messages in the mailbox
- SA_RECENT - set $status->recent to the number of recent messages in the mailbox
- SA_UNSEEN - set $status->unseen to the number of unseen (new) messages in the mailbox
- SA_UIDNEXT - set $status->uidnext to the next uid to be used in the mailbox
- SA_UIDVALIDITY - set $status->uidvalidity to a constant that changes when uids for the mailbox may no longer be valid
- SA_ALL - set all of the above

### Return Values

This function returns an object containing status information, or false on failure. The object has the following properties: messages, recent, unseen, uidnext, and uidvalidity.

flags is also set, which contains a bitmask which can be checked against any of the above constants.

### Changelog

### Examples

Example #1 imap_status() example

```
<?php
$mbox = imap_open("{imap.example.com}", "username", "password", OP_HALFOPEN)
      or die("can't connect: " . imap_last_error());

$status = imap_status($mbox, "{imap.example.org}INBOX", SA_ALL);
if ($status) {
  echo "Messages:   " . $status->messages    . "<br />\n";
  echo "Recent:     " . $status->recent      . "<br />\n";
  echo "Unseen:     " . $status->unseen      . "<br />\n";
  echo "UIDnext:    " . $status->uidnext     . "<br />\n";
  echo "UIDvalidity:" . $status->uidvalidity . "<br />\n";
} else {
  echo "imap_status failed: " . imap_last_error() . "\n";
}

imap_close($mbox);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-status.php
