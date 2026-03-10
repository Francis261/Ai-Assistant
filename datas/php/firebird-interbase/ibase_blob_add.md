# ibase_blob_add

Source: https://devdocs.io/php/function.ibase-blob-add

(PHP 5, PHP 7 < 7.4.0)

ibase_blob_add — Add data into a newly created blob

### Description

```
ibase_blob_add(resource $blob_handle, string $data): void
```

ibase_blob_add() adds data into a blob created with ibase_blob_create().

### Parameters

A blob handle opened with ibase_blob_create().

The data to be added.

### Return Values

No value is returned.

### See Also

- ibase_blob_cancel() - Cancel creating blob
- ibase_blob_close() - Close blob
- ibase_blob_create() - Create a new blob for adding data
- ibase_blob_import() - Create blob, copy file in it, and close it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-blob-add.php
