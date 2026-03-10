# imap_fetchmime

Source: https://devdocs.io/php/function.imap-fetchmime

(PHP 5 >= 5.3.6, PHP 7, PHP 8)

imap_fetchmime — Fetch MIME headers for a particular section of the message

### Description

```
imap_fetchmime(
 IMAP\Connection $imap,
 int $message_num,
 string $section,
 int $flags = 0
): string|false
```

Fetch the MIME headers of a particular section of the body of the specified messages.

### Parameters

An IMAP\Connection instance.

The message number

The part number. It is a string of integers delimited by period which index into a body part list as per the IMAP4 specification

A bitmask with one or more of the following:

- FT_UID - The message_num is a UID
- FT_PEEK - Do not set the \Seen flag if not already set
- FT_INTERNAL - The return string is in internal format, will not canonicalize to CRLF.

### Return Values

Returns the MIME headers of a particular section of the body of the specified messages as a text string, or false on failure.

### Changelog

### See Also

- imap_fetchbody() - Fetch a particular section of the body of the message
- imap_fetchstructure() - Read the structure of a particular message
- imap_fetchheader() - Returns header for a message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-fetchmime.php
