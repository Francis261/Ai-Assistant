# imap_body

Source: https://devdocs.io/php/function.imap-body

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_body — Read the message body

### Description

```
imap_body(IMAP\Connection $imap, int $message_num, int $flags = 0): string|false
```

imap_body() returns the body of the message, numbered message_num in the current mailbox.

imap_body() will only return a verbatim copy of the message body. To extract single parts of a multipart MIME-encoded message you have to use imap_fetchstructure() to analyze its structure and imap_fetchbody() to extract a copy of a single body component.

### Parameters

An IMAP\Connection instance.

The message number

The optional flags are a bit mask with one or more of the following:

- FT_UID - The message_num is a UID
- FT_PEEK - Do not set the \Seen flag if not already set
- FT_INTERNAL - The return string is in internal format, will not canonicalize to CRLF.

### Return Values

Returns the body of the specified message, as a string, or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-body.php
