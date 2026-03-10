# imap_clearflag_full

Source: https://devdocs.io/php/function.imap-clearflag-full

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_clearflag_full — Clears flags on messages

### Description

```
imap_clearflag_full(
 IMAP\Connection $imap,
 string $sequence,
 string $flag,
 int $options = 0
): true
```

This function causes a store to delete the specified flag to the flags set for the messages in the specified sequence.

### Parameters

An IMAP\Connection instance.

A sequence of message numbers. You can enumerate desired messages with the X,Y syntax, or retrieve all messages within an interval with the X:Y syntax

The flags which you can unset are "\\Seen", "\\Answered", "\\Flagged", "\\Deleted", and "\\Draft" (as defined by » RFC2060)

options are a bit mask and may contain the single option:

- ST_UID - The sequence argument contains UIDs instead of sequence numbers

### Return Values

Always returns true.

### Errors/Exceptions

Throws a ValueError if options is invalid.

### Changelog

### See Also

- imap_setflag_full() - Sets flags on messages

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-clearflag-full.php
