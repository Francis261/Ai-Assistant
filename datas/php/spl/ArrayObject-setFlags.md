# ArrayObject::setFlags

Source: https://devdocs.io/php/arrayobject.setflags

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

ArrayObject::setFlags — Sets the behavior flags

### Description

```
public ArrayObject::setFlags(int $flags): void
```

Set the flags that change the behavior of the ArrayObject.

### Parameters

The new ArrayObject behavior. It takes on either a bitmask, or named constants. Using named constants is strongly encouraged to ensure compatibility for future versions.

The available behavior flags are listed below. The actual meanings of these flags are described in the predefined constants.

### Return Values

No value is returned.

### Examples

Example #1 ArrayObject::setFlags() example

```
<?php
// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);

// Try to use array key as property
var_dump($fruitsArrayObject->lemons);
// Set the flag so that the array keys can be used as properties of the ArrayObject
$fruitsArrayObject->setFlags(ArrayObject::ARRAY_AS_PROPS);
// Try it again
var_dump($fruitsArrayObject->lemons);
?>
```

The above example will output something similar to:

```
Warning: Undefined property: ArrayObject::$lemons in ...
NULL
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.setflags.php
