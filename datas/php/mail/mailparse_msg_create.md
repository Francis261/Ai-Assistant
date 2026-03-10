# mailparse_msg_create

Source: https://devdocs.io/php/function.mailparse-msg-create

(PECL mailparse >= 0.9.0)

mailparse_msg_create — Create a mime mail resource

### Description

```
mailparse_msg_create(): resource
```

Create a MIME mail resource.

### Parameters

This function has no parameters.

### Return Values

Returns a handle that can be used to parse a message.

### Notes

Note:

It is recommended to call mailparse_msg_free() on the result of this function, when it is no longer needed, to avoid memory leaks.

### See Also

- mailparse_msg_free() - Frees a MIME resource
- mailparse_msg_parse_file() - Parses a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mailparse-msg-create.php
