# SplFileInfo::isReadable

Source: https://devdocs.io/php/splfileinfo.isreadable

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::isReadable — Tells if file is readable

### Description

```
public SplFileInfo::isReadable(): bool
```

Check if the file is readable.

### Parameters

This function has no parameters.

### Return Values

Returns true if readable, false otherwise.

### Examples

Example #1 SplFileInfo::isReadable() example

```
<?php
$info = new SplFileInfo('readable.jpg');
if ($info->isReadable()) {
    echo $info->getFilename() . ' is readable';
}
?>
```

The above example will output something similar to:

```
readable.jpg is readable
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.isreadable.php
