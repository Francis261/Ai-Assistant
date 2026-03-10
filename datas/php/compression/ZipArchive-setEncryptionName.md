# ZipArchive::setEncryptionName

Source: https://devdocs.io/php/ziparchive.setencryptionname

(PHP >= 7.2.0, PHP 8, PECL zip >= 1.14.0)

ZipArchive::setEncryptionName — Set the encryption method of an entry defined by its name

### Description

```
public ZipArchive::setEncryptionName(string $name, int $method, #[\SensitiveParameter] ?string $password = null): bool
```

Set the encryption method of an entry defined by its name.

### Parameters

Name of the entry.

The encryption method defined by one of the ZipArchive::EM_ constants.

Optional password, default used when missing.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

This example creates a ZIP file archive test.zip and add the file test.txt encrypted using the AES 256 method.

Example #1 Archive and encrypt a file

```
<?php
$zip = new ZipArchive();
if ($zip->open('test.zip', ZipArchive::CREATE) === TRUE) {
    $zip->setPassword('secret');
    $zip->addFile('text.txt');
    $zip->setEncryptionName('text.txt', ZipArchive::EM_AES_256);
    $zip->close();
    echo "Ok\n";
} else {
    echo "KO\n";
}
?>
```

### Notes

Note:

This function is only available if built against libzip ≥ 1.2.0.

### See Also

- ZipArchive::setPassword() - Set the password for the active archive
- ZipArchive::setEncryptionIndex() - Set the encryption method of an entry defined by its index

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setencryptionname.php
