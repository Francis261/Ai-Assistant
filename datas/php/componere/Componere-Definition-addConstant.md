# Componere\Definition::addConstant

Source: https://devdocs.io/php/componere-definition.addconstant

(Componere 2 >= 2.1.0)

Componere\Definition::addConstant — Add Constant

### Description

```
public Componere\Definition::addConstant(string $name, Componere\Value $value): Definition
```

Shall declare a class constant on the current Definition

### Parameters

The case sensitive name for the constant

The Value for the constant, must not be undefined or static

### Return Values

The current Definition

### Exceptions

Shall throw RuntimeException if Definition was registered

Shall throw RuntimeException if name is already declared as a constant

Shall throw RuntimeException if value is static

Shall throw RuntimeException if value is undefined

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/componere-definition.addconstant.php
