# ReflectionClass::isCloneable

Source: https://devdocs.io/php/reflectionclass.iscloneable

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

ReflectionClass::isCloneable — Returns whether this class is cloneable

### Description

```
public ReflectionClass::isCloneable(): bool
```

Returns whether this class is cloneable.

### Parameters

This function has no parameters.

### Return Values

Returns true if the class is cloneable, false otherwise.

### Examples

Example #1 Basic usage of ReflectionClass::isCloneable()

```
<?php
class NotCloneable {
    public $var1;
    
    private function __clone() {
    }
}

class Cloneable {
    public $var1;
}

$notCloneable = new ReflectionClass('NotCloneable');
$cloneable = new ReflectionClass('Cloneable');

var_dump($notCloneable->isCloneable());
var_dump($cloneable->isCloneable());
?>
```

The above example will output:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.iscloneable.php
