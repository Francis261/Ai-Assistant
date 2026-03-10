# ReflectionConstant::getShortName

Source: https://devdocs.io/php/reflectionconstant.getshortname

(PHP 8 >= 8.4.0)

ReflectionConstant::getShortName — Gets short name

### Description

```
public ReflectionConstant::getShortName(): string
```

Gets the short name of the constant, the part without the namespace.

### Parameters

This function has no parameters.

### Return Values

The short name of the constant.

### Examples

Example #1 ReflectionConstant::getShortName() example

```
<?php
namespace Foo;

const BAR = 'bar';

echo (new \ReflectionConstant('Foo\BAR'))->getName();
?>
```

The above example will output:

```
BAR
```

### See Also

- ReflectionConstant::getName() - Gets name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionconstant.getshortname.php
