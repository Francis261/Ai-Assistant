# ArrayObject::getFlags

Source: https://devdocs.io/php/arrayobject.getflags

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

ArrayObject::getFlags — Gets the behavior flags

### Description

```
public ArrayObject::getFlags(): int
```

Gets the behavior flags of the ArrayObject. See the ArrayObject::setFlags method for a list of the available flags.

### Parameters

This function has no parameters.

### Return Values

Returns the behavior flags of the ArrayObject.

### Examples

Example #1 ArrayObject::getFlags() example

```
<?php
// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);

// Get the current flags
$flags = $fruitsArrayObject->getFlags();
var_dump($flags);

// Set new flags
$fruitsArrayObject->setFlags(ArrayObject::ARRAY_AS_PROPS);

// Get the new flags
$flags = $fruitsArrayObject->getFlags();
var_dump($flags);
?>
```

The above example will output:

```
int(0)
int(2)
```

### See Also

- ArrayObject::setFlags() - Sets the behavior flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.getflags.php
