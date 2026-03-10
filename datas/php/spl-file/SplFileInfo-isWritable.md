# SplFileInfo::isWritable

Source: https://devdocs.io/php/splfileinfo.iswritable

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::isWritable — Tells if the entry is writable

### Description

```
public SplFileInfo::isWritable(): bool
```

Checks if the current entry is writable.

### Parameters

This function has no parameters.

### Return Values

Returns true if writable, false otherwise;

### Examples

Example #1 SplFileInfo::isWriteable() example

```
<?php
$info = new SplFileInfo('locked.jpg');
if (!$info->isWriteable()) {
    echo $info->getFilename() . ' is not writeable';
}
?>
```

The above example will output something similar to:

```
locked.jpg is not writeable
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.iswritable.php
