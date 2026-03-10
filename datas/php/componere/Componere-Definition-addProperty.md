# Componere\Definition::addProperty

Source: https://devdocs.io/php/componere-definition.addproperty

(Componere 2 >= 2.1.0)

Componere\Definition::addProperty — Add Property

### Description

```
public Componere\Definition::addProperty(string $name, Componere\Value $value): Definition
```

Shall declare a class property on the current Definition

### Parameters

The case sensitive name for the property

The default Value for the property

### Return Values

The current Definition

### Exceptions

Shall throw RuntimeException if Definition was registered

Shall throw RuntimeException if name is already declared as a property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/componere-definition.addproperty.php
