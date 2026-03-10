# imap_fetchheader

Source: https://devdocs.io/php/function.imap-fetchheader

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_fetchheader — Returns header for a message

### Description

```
imap_fetchheader(IMAP\Connection $imap, int $message_num, int $flags = 0): string|false
```

This function causes a fetch of the complete, unfiltered » RFC2822 format header of the specified message.

### Parameters

An IMAP\Connection instance.

The message number

The possible flags are:

- FT_UID - The message_num argument is a UID
- FT_INTERNAL - The return string is in "internal" format, without any attempt to canonicalize to CRLF newlines
- FT_PREFETCHTEXT - The RFC822.TEXT should be pre-fetched at the same time. This avoids an extra RTT on an IMAP connection if a full message text is desired (e.g. in a "save to local file" operation)

### Return Values

Returns the header of the specified message as a text string, or false on failure.

### Changelog

### See Also

- imap_fetch_overview() - Read an overview of the information in the headers of the given message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-fetchheader.php
