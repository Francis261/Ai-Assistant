# mailparse_msg_parse

Source: https://devdocs.io/php/function.mailparse-msg-parse

(PECL mailparse >= 0.9.0)

mailparse_msg_parse — Incrementally parse data into buffer

### Description

```
mailparse_msg_parse(resource $mimemail, string $data): bool
```

Incrementally parse data into the supplied mime mail resource.

This function allow you to stream portions of a file at a time, rather than read and parse the whole thing.

### Parameters

A valid MIME resource.

Note:

The final chunk of data is supposed to end with a newline (CRLF); otherwise the last line of the message will not be parsed.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mailparse-msg-parse.php
