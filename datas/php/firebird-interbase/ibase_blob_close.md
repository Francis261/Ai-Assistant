# ibase_blob_close

Source: https://devdocs.io/php/function.ibase-blob-close

(PHP 5, PHP 7 < 7.4.0)

ibase_blob_close — Close blob

### Description

```
ibase_blob_close(resource $blob_handle): mixed
```

This function closes a BLOB that has either been opened for reading by ibase_blob_open() or has been opened for writing by ibase_blob_create().

### Parameters

A BLOB handle opened with ibase_blob_create() or ibase_blob_open().

### Return Values

If the BLOB was being read, this function returns true on success, if the BLOB was being written to, this function returns a string containing the BLOB id that has been assigned to it by the database. On failure, this function returns false.

### See Also

- ibase_blob_cancel() - Cancel creating blob
- ibase_blob_open() - Open blob for retrieving data parts

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-blob-close.php
