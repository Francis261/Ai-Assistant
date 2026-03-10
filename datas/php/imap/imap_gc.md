# imap_gc

Source: https://devdocs.io/php/function.imap-gc

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

imap_gc — Clears IMAP cache

### Description

```
imap_gc(IMAP\Connection $imap, int $flags): true
```

Purges the cache of entries of a specific type.

### Parameters

An IMAP\Connection instance.

Specifies the cache to purge. It may one or a combination of the following constants: IMAP_GC_ELT (message cache elements), IMAP_GC_ENV (envelope and bodies), IMAP_GC_TEXTS (texts).

### Return Values

Always returns true.

### Errors/Exceptions

Throws a ValueError if flags is invalid.

### Changelog

### Examples

Example #1 imap_gc() example

```
<?php

$mbox = imap_open("{imap.example.org:143}", "username", "password");

imap_gc($mbox, IMAP_GC_ELT);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-gc.php
