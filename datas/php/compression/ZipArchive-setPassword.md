# ZipArchive::setPassword

Source: https://devdocs.io/php/ziparchive.setpassword

(PHP 5 >= 5.6.0, PHP 7, PHP 8, PECL zip >= 1.12.4)

ZipArchive::setPassword — Set the password for the active archive

### Description

```
public ZipArchive::setPassword(#[\SensitiveParameter] string $password): bool
```

Sets the password for the active archive.

### Parameters

The password to be used for the archive.

### Return Values

Returns true on success or false on failure.

### Notes

Note:

As of PHP 7.2.0 and libzip 1.2.0 the password is used to decompress the archive, and is also the default password for ZipArchive::setEncryptionName() and ZipArchive::setEncryptionIndex(). Formerly, this function only set the password to be used to decompress the archive; it did not turn a non-password-protected ZipArchive into a password-protected ZipArchive.

### See Also

- ZipArchive::setEncryptionIndex() - Set the encryption method of an entry defined by its index
- ZipArchive::setEncryptionName() - Set the encryption method of an entry defined by its name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.setpassword.php
