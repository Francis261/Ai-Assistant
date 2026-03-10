# Componere\Abstract\Definition::addMethod

Source: https://devdocs.io/php/componere-abstract-definition.addmethod

(Componere 2 >= 2.1.0)

Componere\Abstract\Definition::addMethod — Add Method

### Description

```
public Componere\Abstract\Definition::addMethod(string $name, Componere\Method $method): Definition
```

Shall create or override a method on the current definition.

### Parameters

The case insensitive name for method

Componere\Method not previously added to another Definition

### Return Values

The current Definition

### Exceptions

Shall throw RuntimeException if Definition was registered

Shall throw RuntimeException if Method was added to another Definition

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/componere-abstract-definition.addmethod.php
