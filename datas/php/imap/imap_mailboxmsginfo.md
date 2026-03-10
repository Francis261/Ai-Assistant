# imap_mailboxmsginfo

Source: https://devdocs.io/php/function.imap-mailboxmsginfo

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mailboxmsginfo — Get information about the current mailbox

### Description

```
imap_mailboxmsginfo(IMAP\Connection $imap): stdClass
```

Checks the current mailbox status on the server. It is similar to imap_status(), but will additionally sum up the size of all messages in the mailbox, which will take some additional time to execute.

### Parameters

An IMAP\Connection instance.

### Return Values

Returns the information in an object with following properties:

### Changelog

### Examples

Example #1 imap_mailboxmsginfo() example

```
<?php

$mbox = imap_open("{imap.example.org}INBOX", "username", "password")
      or die("can't connect: " . imap_last_error());

$check = imap_mailboxmsginfo($mbox);

if ($check) {
    echo "Date: "     . $check->Date    . "<br />\n" ;
    echo "Driver: "   . $check->Driver  . "<br />\n" ;
    echo "Mailbox: "  . $check->Mailbox . "<br />\n" ;
    echo "Messages: " . $check->Nmsgs   . "<br />\n" ;
    echo "Recent: "   . $check->Recent  . "<br />\n" ;
    echo "Unread: "   . $check->Unread  . "<br />\n" ;
    echo "Deleted: "  . $check->Deleted . "<br />\n" ;
    echo "Size: "     . $check->Size    . "<br />\n" ;
} else {
    echo "imap_mailboxmsginfo() failed: " . imap_last_error() . "<br />\n";
}

imap_close($mbox);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-mailboxmsginfo.php
