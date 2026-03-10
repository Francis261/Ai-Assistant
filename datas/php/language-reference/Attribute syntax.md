# Attribute syntax

Source: https://devdocs.io/php/language.attributes.syntax

## Attribute syntax

Attribute syntax consists of several key components. An attribute declaration starts with #[ and ends with ]. Inside, one or more attributes can be listed, separated by commas. The attribute name can be unqualified, qualified, or fully-qualified, as described in Using Namespaces Basics. Arguments to the attribute are optional and enclosed in parentheses (). Arguments can only be literal values or constant expressions. Both positional and named argument syntax are supported.

Attribute names and their arguments are resolved to a class, and the arguments are passed to its constructor when an instance of the attribute is requested through the Reflection API. Therefore, it is recommended to introduce a class for each attribute.

Example #1 Attribute Syntax

```
<?php
// a.php
namespace MyExample;

use Attribute;

#[Attribute]
class MyAttribute
{
    const VALUE = 'value';

    private $value;

    public function __construct($value = null)
    {
        $this->value = $value;
    }
}

// b.php

namespace Another;

use MyExample\MyAttribute;

#[MyAttribute]
#[\MyExample\MyAttribute]
#[MyAttribute(1234)]
#[MyAttribute(value: 1234)]
#[MyAttribute(MyAttribute::VALUE)]
#[MyAttribute(array("key" => "value"))]
#[MyAttribute(100 + 200)]
class Thing
{
}

#[MyAttribute(1234), MyAttribute(5678)]
class AnotherThing
{
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.attributes.syntax.php
