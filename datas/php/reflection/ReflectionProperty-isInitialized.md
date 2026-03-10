# ReflectionProperty::isInitialized

Source: https://devdocs.io/php/reflectionproperty.isinitialized

(PHP 7 >= 7.4.0, PHP 8)

ReflectionProperty::isInitialized — Checks whether a property is initialized

### Description

```
public ReflectionProperty::isInitialized(?object $object = null): bool
```

Checks whether a property is initialized.

### Parameters

If the property is non-static an object must be provided to fetch the property from.

### Return Values

Returns false for typed properties prior to initialization, and for properties that have been explicitly unset(). For all other properties true will be returned.

### Errors/Exceptions

Throws a ReflectionException if the property is inaccessible. You can make a protected or private property accessible using ReflectionProperty::setAccessible().

### Changelog

### Examples

Example #1 ReflectionProperty::isInitialized() example

```
<?php
class User
{
    public string $name;
}

$rp = new ReflectionProperty('User', 'name');
$user = new User;
var_dump($rp->isInitialized($user));
$user->name = 'Nikita';
var_dump($rp->isInitialized($user));
?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- ReflectionProperty::hasType() - Checks if property has a type

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.isinitialized.php
