# ZipArchive::registerCancelCallback

Source: https://devdocs.io/php/ziparchive.registercancelcallback

(PHP >= 8.0.0, PECL zip >= 1.17.0)

ZipArchive::registerCancelCallback — Register a callback to allow cancellation during archive close.

### Description

```
public ZipArchive::registerCancelCallback(callable $callback): bool
```

Register a callback function to allow cancellation during archive close.

### Parameters

If this function return 0 operation will continue, other value it will be cancelled.

### Return Values

Returns true on success or false on failure.

### Examples

This example creates a ZIP file archive php.zip and cancel operation on some run condition.

Example #1 Archive a file

```
<?php
$zip = new ZipArchive();
if ($zip->open('php.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
    $zip->addFile(PHP_BINARY, 'php');
    $zip->registerCancelCallback(function () {
        return ($someruncondition ? -1 : 0);
    });
    $zip->close();
}
```

### Notes

Note:

This function is only available if built against libzip ≥ 1.6.0.

### See Also

- ZipArchive::registerProgressCallback() - Register a callback to provide updates during archive close.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.registercancelcallback.php
