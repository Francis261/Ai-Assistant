# ibase_blob_get

Source: https://devdocs.io/php/function.ibase-blob-get

(PHP 5, PHP 7 < 7.4.0)

ibase_blob_get — Get len bytes data from open blob

### Description

```
ibase_blob_get(resource $blob_handle, int $len): string
```

This function returns at most len bytes from a BLOB that has been opened for reading by ibase_blob_open().

Note:

It is not possible to read from a BLOB that has been opened for writing by ibase_blob_create().

### Parameters

A BLOB handle opened with ibase_blob_open().

Size of returned data.

### Return Values

Returns at most len bytes from the BLOB, or false on failure.

### Examples

Example #1 ibase_blob_get() example

```
<?php
$result    = ibase_query("SELECT blob_value FROM table");
$data      = ibase_fetch_object($result);
$blob_data = ibase_blob_info($data->BLOB_VALUE);
$blob_hndl = ibase_blob_open($data->BLOB_VALUE);
echo         ibase_blob_get($blob_hndl, $blob_data[0]);
?>
```

### See Also

- ibase_blob_open() - Open blob for retrieving data parts
- ibase_blob_close() - Close blob
- ibase_blob_echo() - Output blob contents to browser

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-blob-get.php
