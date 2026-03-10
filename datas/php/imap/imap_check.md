# imap_check

Source: https://devdocs.io/php/function.imap-check

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_check — Check current mailbox

### Description

```
imap_check(IMAP\Connection $imap): stdClass|false
```

Checks information about the current mailbox.

### Parameters

An IMAP\Connection instance.

### Return Values

Returns the information in an object with following properties:

- Date - current system time formatted according to » RFC2822
- Driver - protocol used to access this mailbox: POP3, IMAP, NNTP
- Mailbox - the mailbox name
- Nmsgs - number of messages in the mailbox
- Recent - number of recent messages in the mailbox

Returns false on failure.

### Changelog

### Examples

Example #1 imap_check() example

```
<?php

$imap = imap_check($imap_stream);
var_dump($imap);

?>
```

The above example will output something similar to:

```
object(stdClass)(5) {
  ["Date"]=>
  string(37) "Wed, 10 Dec 2003 17:56:54 +0100 (CET)"
  ["Driver"]=>
  string(4) "imap"
  ["Mailbox"]=>
  string(54)
  "{www.example.com:143/imap/user="foo@example.com"}INBOX"
  ["Nmsgs"]=>
  int(1)
  ["Recent"]=>
  int(0)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-check.php
