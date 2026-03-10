# imap_reopen

Source: https://devdocs.io/php/function.imap-reopen

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_reopen — Reopen IMAP stream to new mailbox

### Description

```
imap_reopen(
 IMAP\Connection $imap,
 string $mailbox,
 int $flags = 0,
 int $retries = 0
): bool
```

Reopens the specified stream to a new mailbox on an IMAP or NNTP server.

### Parameters

An IMAP\Connection instance.

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

The flags are a bit mask with one or more of the following:

- OP_READONLY - Open mailbox read-only
- OP_ANONYMOUS - Don't use or update a .newsrc for news (NNTP only)
- OP_HALFOPEN - For IMAP and NNTP names, open a connection but don't open a mailbox.
- OP_EXPUNGE - Silently expunge recycle stream
- CL_EXPUNGE - Expunge mailbox automatically upon mailbox close (see also imap_delete() and imap_expunge())

Number of maximum connect attempts

### Return Values

Returns true if the stream is reopened, false otherwise.

### Changelog

### Examples

Example #1 imap_reopen() example

```
<?php
$mbox = imap_open("{imap.example.org:143}INBOX", "username", "password") or die(implode(", ", imap_errors()));
// ...
imap_reopen($mbox, "{imap.example.org:143}INBOX.Sent") or die(implode(", ", imap_errors()));
// ..
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-reopen.php
