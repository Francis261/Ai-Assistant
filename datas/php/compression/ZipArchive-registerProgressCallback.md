# ZipArchive::registerProgressCallback

Source: https://devdocs.io/php/ziparchive.registerprogresscallback

(PHP >= 8.0.0, PECL zip >= 1.17.0)

ZipArchive::registerProgressCallback — Register a callback to provide updates during archive close.

### Description

```
public ZipArchive::registerProgressCallback(float $rate, callable $callback): bool
```

Register a callback function to provide updates during archive close.

### Parameters

Change between each call of the callback (from 0.0 to 1.0).

This function will receive the current state as a float (from 0.0 to 1.0).

### Return Values

Returns true on success or false on failure.

### Examples

This example creates a ZIP file archive php.zip and show progression.

Example #1 Archive a file

```
$zip = new ZipArchive();
if ($zip->open('php.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
    $zip->addFile(PHP_BINARY, 'php');
    $zip->registerProgressCallback(0.05, function ($r) {
        printf("%d%%\n", $r * 100);
    });
    $zip->close();
}
```

### Notes

Note:

This function is only available if built against libzip ≥ 1.3.0.

### See Also

- ZipArchive::registerCancelCallback() - Register a callback to allow cancellation during archive close.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.registerprogresscallback.php
