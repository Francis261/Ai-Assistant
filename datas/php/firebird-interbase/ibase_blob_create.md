# ibase_blob_create

Source: https://devdocs.io/php/function.ibase-blob-create

(PHP 5, PHP 7 < 7.4.0)

ibase_blob_create — Create a new blob for adding data

### Description

```
ibase_blob_create(resource $link_identifier = null): resource|false
```

ibase_blob_create() creates a new BLOB for filling with data.

### Parameters

An InterBase link identifier. If omitted, the last opened link is assumed.

### Return Values

Returns a BLOB handle for later use with ibase_blob_add() or false on failure.

### See Also

- ibase_blob_add() - Add data into a newly created blob
- ibase_blob_cancel() - Cancel creating blob
- ibase_blob_close() - Close blob
- ibase_blob_import() - Create blob, copy file in it, and close it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-blob-create.php
