# imap_fetchstructure

Source: https://devdocs.io/php/function.imap-fetchstructure

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_fetchstructure — Read the structure of a particular message

### Description

```
imap_fetchstructure(IMAP\Connection $imap, int $message_num, int $flags = 0): stdClass|false
```

Fetches all the structured information for a given message.

### Parameters

An IMAP\Connection instance.

The message number

This optional parameter only has a single option, FT_UID, which tells the function to treat the message_num argument as a UID.

### Return Values

Returns an object with properties listed in the table below, or false on failure.

### Changelog

### See Also

- imap_fetchbody() - Fetch a particular section of the body of the message
- imap_bodystruct() - Read the structure of a specified body section of a specific message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-fetchstructure.php
