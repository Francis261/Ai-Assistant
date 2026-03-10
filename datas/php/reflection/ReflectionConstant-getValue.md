# ReflectionConstant::getValue

Source: https://devdocs.io/php/reflectionconstant.getvalue

(PHP 8 >= 8.4.0)

ReflectionConstant::getValue — Gets value

### Description

```
public ReflectionConstant::getValue(): mixed
```

Gets the value of the constant.

### Parameters

This function has no parameters.

### Return Values

The value of the constant.

### Examples

Example #1 ReflectionProperty::getValue() example

```
<?php
const FOO = 'foo';

var_dump((new \ReflectionConstant('FOO'))->getValue());
?>
```

The above example will output:

```
string(3) "foo"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionconstant.getvalue.php
