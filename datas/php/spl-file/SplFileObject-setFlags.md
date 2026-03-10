# SplFileObject::setFlags

Source: https://devdocs.io/php/splfileobject.setflags

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::setFlags — Sets flags for the SplFileObject

### Description

```
public SplFileObject::setFlags(int $flags): void
```

Sets the flags to be used by the SplFileObject.

### Parameters

Bit mask of the flags to set. See SplFileObject constants for the available flags.

### Return Values

No value is returned.

### Examples

Example #1 SplFileObject::setFlags() example

```
<?php
$file = new SplFileObject("data.csv");
$file->setFlags(SplFileObject::READ_CSV);
foreach ($file as $fields) {
    var_dump($fields);
}
?>
```

### See Also

- SplFileObject::getFlags() - Gets flags for the SplFileObject

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.setflags.php
