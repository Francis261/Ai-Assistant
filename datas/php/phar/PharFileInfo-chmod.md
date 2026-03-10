# PharFileInfo::chmod

Source: https://devdocs.io/php/pharfileinfo.chmod

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

PharFileInfo::chmod — Sets file-specific permission bits

### Description

```
public PharFileInfo::chmod(int $perms): void
```

PharFileInfo::chmod() allows setting of the executable file permissions bit, as well as read-only bits. Writeable bits are ignored, and set at runtime based on the phar.readonly INI variable. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed if the file is within a Phar archive. Files within PharData archives do not have this restriction.

### Parameters

permissions (see chmod())

### Return Values

No value is returned.

### Examples

Example #1 A PharFileInfo::chmod() example

```
<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar('brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['file.sh'] = '#!/usr/local/lib/php
    <?php echo "hi"; ?>';
    // set executable bit
    $p['file.sh']->chmod(0555);
    var_dump($p['file.sh']->isExecutable());
} catch (Exception $e) {
    echo 'Could not create/modify phar: ', $e;
}
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.chmod.php
