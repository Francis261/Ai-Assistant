# imap_fetchbody

Source: https://devdocs.io/php/function.imap-fetchbody

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_fetchbody — Fetch a particular section of the body of the message

### Description

```
imap_fetchbody(
 IMAP\Connection $imap,
 int $message_num,
 string $section,
 int $flags = 0
): string|false
```

Fetch of a particular section of the body of the specified messages. Body parts are not decoded by this function.

### Parameters

An IMAP\Connection instance.

The message number

The part number. It is a string of integers delimited by period which index into a body part list as per the IMAP4 specification

A bitmask with one or more of the following:

- FT_UID - The message_num is a UID
- FT_PEEK - Do not set the \Seen flag if not already set
- FT_INTERNAL - The return string is in internal format, will not canonicalize to CRLF.

### Return Values

Returns a particular section of the body of the specified messages as a text string, or false on failure.

### Changelog

### See Also

- imap_savebody() - Save a specific body section to a file
- imap_fetchstructure() - Read the structure of a particular message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-fetchbody.php
