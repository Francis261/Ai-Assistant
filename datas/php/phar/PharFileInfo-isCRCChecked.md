# PharFileInfo::isCRCChecked

Source: https://devdocs.io/php/pharfileinfo.iscrcchecked

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

PharFileInfo::isCRCChecked — Returns whether file entry has had its CRC verified

### Description

```
public PharFileInfo::isCRCChecked(): bool
```

This returns whether a file within a Phar archive has had its CRC verified.

### Parameters

This function has no parameters.

### Return Values

true if the file has had its CRC verified, false if not.

### Examples

Example #1 A PharFileInfo::isCRCChecked() example

```
<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    var_dump($file->isCRCChecked());
} catch (Exception $e) {
    echo 'Create/modify operations failed on my.phar: ', $e;
}
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.iscrcchecked.php
