# imap_savebody

Source: https://devdocs.io/php/function.imap-savebody

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

imap_savebody — Save a specific body section to a file

### Description

```
imap_savebody(
 IMAP\Connection $imap,
 resource|string|int $file,
 int $message_num,
 string $section = "",
 int $flags = 0
): bool
```

Saves a part or the whole body of the specified message.

### Parameters

An IMAP\Connection instance.

The path to the saved file as a string, or a valid file descriptor returned by fopen().

The message number

The part number. It is a string of integers delimited by period which index into a body part list as per the IMAP4 specification

A bitmask with one or more of the following:

- FT_UID - The message_num is a UID
- FT_PEEK - Do not set the \Seen flag if not already set
- FT_INTERNAL - The return string is in internal format, will not canonicalize to CRLF.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- imap_fetchbody() - Fetch a particular section of the body of the message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-savebody.php
