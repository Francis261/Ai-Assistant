# ibase_blob_echo

Source: https://devdocs.io/php/function.ibase-blob-echo

(PHP 5, PHP 7 < 7.4.0)

ibase_blob_echo — Output blob contents to browser

### Description

```
ibase_blob_echo(string $blob_id): bool
```

```
ibase_blob_echo(resource $link_identifier, string $blob_id): bool
```

This function opens a BLOB for reading and sends its contents directly to standard output (the browser, in most cases).

### Parameters

An InterBase link identifier. If omitted, the last opened link is assumed.

### Return Values

Returns true on success or false on failure.

### See Also

- ibase_blob_open() - Open blob for retrieving data parts
- ibase_blob_close() - Close blob
- ibase_blob_get() - Get len bytes data from open blob

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-blob-echo.php
