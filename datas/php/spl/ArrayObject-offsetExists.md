# ArrayObject::offsetExists

Source: https://devdocs.io/php/arrayobject.offsetexists

(PHP 5, PHP 7, PHP 8)

ArrayObject::offsetExists — Returns whether the requested index exists

### Description

```
public ArrayObject::offsetExists(mixed $key): bool
```

### Parameters

The index being checked.

### Return Values

true if the requested index exists, otherwise false

### Examples

Example #1 ArrayObject::offsetExists() example

```
<?php
$arrayobj = new ArrayObject(array('zero', 'one', 'example'=>'e.g.'));
var_dump($arrayobj->offsetExists(1));
var_dump($arrayobj->offsetExists('example'));
var_dump($arrayobj->offsetExists('notfound'));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.offsetexists.php
