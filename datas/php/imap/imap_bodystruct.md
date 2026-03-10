# imap_bodystruct

Source: https://devdocs.io/php/function.imap-bodystruct

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_bodystruct — Read the structure of a specified body section of a specific message

### Description

```
imap_bodystruct(IMAP\Connection $imap, int $message_num, string $section): stdClass|false
```

Read the structure of a specified body section of a specific message.

### Parameters

An IMAP\Connection instance.

The message number

The body section to read

### Return Values

Returns the information in an object, or false on failure. For a detailed description of the object structure and properties see imap_fetchstructure().

### Changelog

### See Also

- imap_fetchstructure() - Read the structure of a particular message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-bodystruct.php
