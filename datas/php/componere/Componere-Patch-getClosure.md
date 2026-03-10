# Componere\Patch::getClosure

Source: https://devdocs.io/php/componere-patch.getclosure

(Componere 2 >= 2.1.0)

Componere\Patch::getClosure — Get Closure

### Description

```
public Componere\Patch::getClosure(string $name): Closure
```

Shall return a Closure for the method specified by name

### Parameters

The case insensitive name of the method

### Return Values

A Closure bound to the correct scope and object

### Exceptions

Shall throw RuntimeException if name could not be found

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/componere-patch.getclosure.php
