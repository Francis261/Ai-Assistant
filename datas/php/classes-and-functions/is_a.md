# is_a

Source: https://devdocs.io/php/function.is-a

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

is_a — Checks whether the object is of a given type or subtype

### Description

```
is_a(mixed $object_or_class, string $class, bool $allow_string = false): bool
```

Determines if the given object_or_class is the class object type, or has class as one of its supertypes.

### Parameters

A class name or an object instance.

The class or interface name

If this parameter set to false, string class name as object_or_class is not allowed. This also prevents from calling autoloader if the class doesn't exist.

### Return Values

Returns true if object_or_class is the class object type, or has class as one of its supertypes, false otherwise.

### Examples

Example #1 is_a() example

```
<?php
// define a class
class WidgetFactory
{
  var $oink = 'moo';
}

// create a new object
$WF = new WidgetFactory();

if (is_a($WF, 'WidgetFactory')) {
  echo "yes, \$WF is still a WidgetFactory\n";
}
?>
```

Example #2 Using the instanceof operator

```
<?php
// define a class
class WidgetFactory
{
  var $oink = 'moo';
}

// create a new object
$WF = new WidgetFactory();

if ($WF instanceof WidgetFactory) {
    echo 'Yes, $WF is a WidgetFactory';
}
?>
```

### See Also

- get_class() - Returns the name of the class of an object
- get_parent_class() - Retrieves the parent class name for object or class
- is_subclass_of() - Checks if the object has this class as one of its parents or implements it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-a.php
