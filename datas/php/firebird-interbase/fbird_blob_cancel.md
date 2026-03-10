# fbird_blob_cancel

Source: https://devdocs.io/php/function.fbird-blob-cancel

(PHP 5, PHP 7 < 7.4.0)

fbird_blob_cancel — Cancel creating blob

### Description

```
fbird_blob_cancel(resource $blob_handle): bool
```

This function will discard a BLOB if it has not yet been closed by fbird_blob_close().

### Parameters

A BLOB handle opened with fbird_blob_create().

### Return Values

Returns true on success or false on failure.

### See Also

- fbird_blob_close() - Alias of ibase_blob_close
- fbird_blob_create() - Alias of ibase_blob_create
- fbird_blob_import() - Alias of ibase_blob_import

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fbird-blob-cancel.php
