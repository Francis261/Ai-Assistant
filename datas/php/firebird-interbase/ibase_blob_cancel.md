# ibase_blob_cancel

Source: https://devdocs.io/php/function.ibase-blob-cancel

(PHP 5, PHP 7 < 7.4.0)

ibase_blob_cancel — Cancel creating blob

### Description

```
ibase_blob_cancel(resource $blob_handle): bool
```

This function will discard a BLOB if it has not yet been closed by ibase_blob_close().

### Parameters

A BLOB handle opened with ibase_blob_create().

### Return Values

Returns true on success or false on failure.

### See Also

- ibase_blob_close() - Close blob
- ibase_blob_create() - Create a new blob for adding data
- ibase_blob_import() - Create blob, copy file in it, and close it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-blob-cancel.php
