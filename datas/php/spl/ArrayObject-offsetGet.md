# ArrayObject::offsetGet

Source: https://devdocs.io/php/arrayobject.offsetget

(PHP 5, PHP 7, PHP 8)

ArrayObject::offsetGet — Returns the value at the specified index

### Description

```
public ArrayObject::offsetGet(mixed $key): mixed
```

### Parameters

The index with the value.

### Return Values

The value at the specified index or null.

### Errors/Exceptions

Produces an E_NOTICE error message when the specified index does not exist.

### Examples

Example #1 ArrayObject::offsetGet() example

```
<?php
$arrayobj = new ArrayObject(array('zero', 7, 'example'=>'e.g.'));
var_dump($arrayobj->offsetGet(1));
var_dump($arrayobj->offsetGet('example'));
var_dump($arrayobj->offsetExists('notfound'));
?>
```

The above example will output:

```
int(7)
string(4) "e.g."
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.offsetget.php
