# ReflectionClass::setStaticPropertyValue

Source: https://devdocs.io/php/reflectionclass.setstaticpropertyvalue

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

ReflectionClass::setStaticPropertyValue — Sets public static property value

### Description

```
public ReflectionClass::setStaticPropertyValue(string $name, mixed $value): void
```

Sets the value of a public static property. If the property is private or protected, the method will fail.

ReflectionProperty::setValue() allows setting the value of public, private, and protected properties.

### Parameters

Property name.

New property value.

### Return Values

No value is returned.

### Changelog

### See Also

- ReflectionClass::getStaticPropertyValue() - Gets static property value
- ReflectionProperty::setValue() - Set property value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.setstaticpropertyvalue.php
