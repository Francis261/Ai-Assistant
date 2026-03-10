# mailparse_msg_parse_file

Source: https://devdocs.io/php/function.mailparse-msg-parse-file

(PECL mailparse >= 0.9.0)

mailparse_msg_parse_file — Parses a file

### Description

```
mailparse_msg_parse_file(string $filename): resource
```

Parses a file. This is the optimal way of parsing a mail file that you have on disk.

### Parameters

Path to the file holding the message. The file is opened and streamed through the parser.

Note:

The message contained in filename is supposed to end with a newline (CRLF); otherwise the last line of the message will not be parsed.

### Return Values

Returns a MIME resource representing the structure, or false on error.

### Notes

Note:

It is recommended to call mailparse_msg_free() on the result of this function, when it is no longer needed, to avoid memory leaks.

### See Also

- mailparse_msg_free() - Frees a MIME resource
- mailparse_msg_create() - Create a mime mail resource

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mailparse-msg-parse-file.php
