# ArrayObject::offsetUnset

Source: https://devdocs.io/php/arrayobject.offsetunset

(PHP 5, PHP 7, PHP 8)

ArrayObject::offsetUnset — Unsets the value at the specified index

### Description

```
public ArrayObject::offsetUnset(mixed $key): void
```

Unsets the value at the specified index.

### Parameters

The index being unset.

### Return Values

No value is returned.

### Examples

Example #1 ArrayObject::offsetUnset() example

```
<?php
$arrayobj = new ArrayObject(array(0=>'zero',2=>'two'));
$arrayobj->offsetUnset(2);
var_dump($arrayobj);
?>
```

The above example will output:

```
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(1) {
    [0]=>
    string(4) "zero"
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.offsetunset.php
