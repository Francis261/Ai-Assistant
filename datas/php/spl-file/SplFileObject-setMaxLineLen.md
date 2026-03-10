# SplFileObject::setMaxLineLen

Source: https://devdocs.io/php/splfileobject.setmaxlinelen

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::setMaxLineLen — Set maximum line length

### Description

```
public SplFileObject::setMaxLineLen(int $maxLength): void
```

Sets the maximum length of a line to be read.

### Parameters

The maximum length of a line.

### Return Values

No value is returned.

### Errors/Exceptions

Throws DomainException when maxLength is less than zero.

### Examples

Example #1 SplFileObject::setMaxLineLen() example

```
<?php
$file = new SplFileObject("lipsum.txt");
$file->setMaxLineLen(20);
foreach ($file as $line) {
    echo $line . "\n";
}
?>
```

Contents of lipsum.txt

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis nec sapien felis, ac sodales nisl.
Nulla vitae magna vitae purus aliquet consequat.
```

The above example will output something similar to:

```
Lorem ipsum dolor s
it amet, consectetu
r adipiscing elit.

Duis nec sapien fel
is, ac sodales nisl
.

Nulla vitae magna v
itae purus aliquet 
consequat.
```

### See Also

- SplFileObject::getMaxLineLen() - Get maximum line length

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.setmaxlinelen.php
