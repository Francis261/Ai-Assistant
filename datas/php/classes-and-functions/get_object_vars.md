# get_object_vars

Source: https://devdocs.io/php/function.get-object-vars

(PHP 4, PHP 5, PHP 7, PHP 8)

get_object_vars — Gets the properties of the given object

### Description

```
get_object_vars(object $object): array
```

Gets the accessible non-static properties of the given object according to scope.

### Parameters

An object instance.

### Return Values

Returns an associative array of defined object accessible non-static properties for the specified object in scope.

### Examples

Example #1 Use of get_object_vars()

```
<?php

class foo {
    private $a;
    public $b = 1;
    public $c;
    private $d;
    static $e;
   
    public function test() {
        var_dump(get_object_vars($this));
    }
}

$test = new foo;
var_dump(get_object_vars($test));

$test->test();

?>
```

The above example will output:

```
array(2) {
  ["b"]=>
  int(1)
  ["c"]=>
  NULL
}
array(4) {
  ["a"]=>
  NULL
  ["b"]=>
  int(1)
  ["c"]=>
  NULL
  ["d"]=>
  NULL
}
```

Note:

Uninitialized properties are considered inaccessible, and thus will not be included in the array.

### See Also

- get_class_methods() - Gets the class methods' names
- get_class_vars() - Get the default properties of the class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-object-vars.php
