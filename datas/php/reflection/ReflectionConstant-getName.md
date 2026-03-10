# ReflectionConstant::getName

Source: https://devdocs.io/php/reflectionconstant.getname

(PHP 8 >= 8.4.0)

ReflectionConstant::getName — Gets name

### Description

```
public ReflectionConstant::getName(): string
```

Gets the name of the constant.

### Parameters

This function has no parameters.

### Return Values

The constants name, which is composed of its namespace and name.

### Examples

Example #1 ReflectionConstant::getName() example

```
<?php
namespace Foo;

const BAR = 'bar';

echo (new \ReflectionConstant('Foo\BAR'))->getName();
?>
```

The above example will output:

```
Foo\BAR
```

### See Also

- ReflectionConstant::getNamespaceName() - Gets namespace name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionconstant.getname.php
