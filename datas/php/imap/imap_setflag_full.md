# imap_setflag_full

Source: https://devdocs.io/php/function.imap-setflag-full

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_setflag_full — Sets flags on messages

### Description

```
imap_setflag_full(
 IMAP\Connection $imap,
 string $sequence,
 string $flag,
 int $options = 0
): true
```

Causes a store to add the specified flag to the flags set for the messages in the specified sequence.

### Parameters

An IMAP\Connection instance.

A sequence of message numbers. You can enumerate desired messages with the X,Y syntax, or retrieve all messages within an interval with the X:Y syntax

The flags which you can set are \Seen, \Answered, \Flagged, \Deleted, and \Draft as defined by » RFC2060.

A bit mask that may contain the single option:

- ST_UID - The sequence argument contains UIDs instead of sequence numbers

### Return Values

Always returns true.

### Errors/Exceptions

Throws a ValueError if options is invalid.

### Changelog

### Examples

Example #1 imap_setflag_full() example

```
<?php
$mbox = imap_open("{imap.example.org:143}", "username", "password")
     or die("can't connect: " . imap_last_error());

$status = imap_setflag_full($mbox, "2,5", "\\Seen \\Flagged");

echo gettype($status) . "\n";
echo $status . "\n";

imap_close($mbox);
?>
```

### See Also

- imap_clearflag_full() - Clears flags on messages

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-setflag-full.php
