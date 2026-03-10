# ArrayObject::count

Source: https://devdocs.io/php/arrayobject.count

(PHP 5, PHP 7, PHP 8)

ArrayObject::count — Get the number of public properties in the ArrayObject

### Description

```
public ArrayObject::count(): int
```

Get the number of public properties in the ArrayObject.

### Parameters

This function has no parameters.

### Return Values

The number of public properties in the ArrayObject.

Note:

When the ArrayObject is constructed from an array all properties are public.

### Examples

Example #1 ArrayObject::count() example

```
<?php
class Example {
    public $public = 'prop:public';
    private $prv   = 'prop:private';
    protected $prt = 'prop:protected';
}

$arrayobj = new ArrayObject(new Example());
var_dump($arrayobj->count());

$arrayobj = new ArrayObject(array('first','second','third'));
var_dump($arrayobj->count());
?>
```

The above example will output:

```
int(1)
int(3)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.count.php
