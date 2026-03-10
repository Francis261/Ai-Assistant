# SplFileObject::getFlags

Source: https://devdocs.io/php/splfileobject.getflags

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::getFlags — Gets flags for the SplFileObject

### Description

```
public SplFileObject::getFlags(): int
```

Gets the flags set for an instance of SplFileObject as an int.

### Parameters

This function has no parameters.

### Return Values

Returns an int representing the flags.

### Examples

Example #1 SplFileObject::getFlags() example

```
<?php
$file = new SplFileObject(__FILE__, "r");

if ($file->getFlags() & SplFileObject::SKIP_EMPTY) {
    echo "Skipping empty lines\n";
} else {
    echo "Not skipping empty lines\n";
}

$file->setFlags(SplFileObject::SKIP_EMPTY);

if ($file->getFlags() & SplFileObject::SKIP_EMPTY) {
    echo "Skipping empty lines\n";
} else {
    echo "Not skipping empty lines\n";
}
?>
```

The above example will output something similar to:

```
Not skipping empty lines
Skipping empty lines
```

### See Also

- SplFileObject::setFlags() - Sets flags for the SplFileObject

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.getflags.php
