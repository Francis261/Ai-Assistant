# ReflectionConstant::getNamespaceName

Source: https://devdocs.io/php/reflectionconstant.getnamespacename

(PHP 8 >= 8.4.0)

ReflectionConstant::getNamespaceName — Gets namespace name

### Description

```
public ReflectionConstant::getNamespaceName(): string
```

Gets the namespace name of the constant.

### Parameters

This function has no parameters.

### Return Values

The namespace name, or an empty string for the global namespace.

### Examples

Example #1 ReflectionConstant::getNamespaceName() example

```
<?php
namespace Foo {
   const BAR = 'bar';
   var_dump((new \ReflectionConstant('Foo\BAR'))->getNamespaceName());
}

namespace {
   const BAR = 'bar';
   var_dump((new \ReflectionConstant('BAR'))->getNamespaceName());
}
?>
```

The above example will output:

```
string(3) "Foo"
string(0) ""
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionconstant.getnamespacename.php
