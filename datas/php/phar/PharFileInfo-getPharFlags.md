# PharFileInfo::getPharFlags

Source: https://devdocs.io/php/pharfileinfo.getpharflags

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

PharFileInfo::getPharFlags — Returns the Phar file entry flags

### Description

```
public PharFileInfo::getPharFlags(): int
```

This returns the flags set in the manifest for a Phar. This will always return 0 in the current implementation.

### Parameters

This function has no parameters.

### Return Values

The Phar flags (always 0 in the current implementation)

### Examples

Example #1 A PharFileInfo::getPharFlags() example

```
<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    var_dump($file->getPharFlags());
} catch (Exception $e) {
    echo 'Could not create/modify my.phar: ', $e;
}
?>
```

The above example will output:

```
int(0)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.getpharflags.php
