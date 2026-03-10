# mailparse_msg_free

Source: https://devdocs.io/php/function.mailparse-msg-free

(PECL mailparse >= 0.9.0)

mailparse_msg_free — Frees a MIME resource

### Description

```
mailparse_msg_free(resource $mimemail): bool
```

Frees a MIME resource.

### Parameters

A valid MIME resource allocated by mailparse_msg_create() or mailparse_msg_parse_file().

### Return Values

Returns true on success or false on failure.

### See Also

- mailparse_msg_create() - Create a mime mail resource
- mailparse_msg_parse_file() - Parses a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mailparse-msg-free.php
