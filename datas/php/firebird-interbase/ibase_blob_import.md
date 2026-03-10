# ibase_blob_import

Source: https://devdocs.io/php/function.ibase-blob-import

(PHP 5, PHP 7 < 7.4.0)

ibase_blob_import — Create blob, copy file in it, and close it

### Description

```
ibase_blob_import(resource $link_identifier, resource $file_handle): string
```

```
ibase_blob_import(resource $file_handle): string
```

This function creates a BLOB, reads an entire file into it, closes it and returns the assigned BLOB id.

### Parameters

An InterBase link identifier. If omitted, the last opened link is assumed.

The file handle is a handle returned by fopen().

### Return Values

Returns the BLOB id on success, or false on error.

### Examples

Example #1 ibase_blob_import() example

```
<?php
$dbh = ibase_connect($host, $username, $password);
$filename = '/tmp/bar';

$fd = fopen($filename, 'r');
if ($fd) {

    $blob = ibase_blob_import($dbh, $fd);
    fclose($fd);

    if (!is_string($blob)) {
        // import failed
    } else {
        $query = "INSERT INTO foo (name, data) VALUES ('$filename', ?)";
        $prepared = ibase_prepare($dbh, $query);
        if (!ibase_execute($prepared, $blob)) {
            // record insertion failed
        }
    }
} else {
    // unable to open the data file
}
?>
```

### See Also

- ibase_blob_add() - Add data into a newly created blob
- ibase_blob_cancel() - Cancel creating blob
- ibase_blob_close() - Close blob
- ibase_blob_create() - Create a new blob for adding data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-blob-import.php
