# imap_is_open

Source: https://devdocs.io/php/function.imap-is-open

(PHP 8 >= 8.2.1)

imap_is_open — Check if the IMAP stream is still valid

### Description

```
imap_is_open(IMAP\Connection $imap): bool
```

Check if the IMAP stream is still valid.

### Parameters

An IMAP\Connection instance.

### Return Values

Returns true if the stream is still valid, false otherwise.

### Examples

Example #1 imap_is_open() example

```
<?php
$mbox = imap_open("{imap.example.org:143}INBOX", "username", "password") or die(implode(", ", imap_errors()));
imap_is_open($mbox);
// ...
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-is-open.php
