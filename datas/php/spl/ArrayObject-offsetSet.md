# ArrayObject::offsetSet

Source: https://devdocs.io/php/arrayobject.offsetset

(PHP 5, PHP 7, PHP 8)

ArrayObject::offsetSet — Sets the value at the specified index to newval

### Description

```
public ArrayObject::offsetSet(mixed $key, mixed $value): void
```

Sets the value at the specified index to newval.

### Parameters

The index being set.

The new value for the key.

### Return Values

No value is returned.

### Examples

Example #1 ArrayObject::offsetSet() example

```
<?php
class Example {
    public $property = 'prop:public';
}
$arrayobj = new ArrayObject(new Example());
$arrayobj->offsetSet(4, 'four');
$arrayobj->offsetSet('group', array('g1', 'g2'));
var_dump($arrayobj);

$arrayobj = new ArrayObject(array('zero','one'));
$arrayobj->offsetSet(null, 'last');
var_dump($arrayobj);
?>
```

The above example will output:

```
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  object(Example)#2 (3) {
    ["property"]=>
    string(11) "prop:public"
    ["4"]=>
    string(4) "four"
    ["group"]=>
    array(2) {
      [0]=>
      string(2) "g1"
      [1]=>
      string(2) "g2"
    }
  }
}
object(ArrayObject)#3 (1) {
  ["storage":"ArrayObject":private]=>
  array(3) {
    [0]=>
    string(4) "zero"
    [1]=>
    string(3) "one"
    [2]=>
    string(4) "last"
  }
}
```

### See Also

- ArrayObject::append() - Appends the value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.offsetset.php
