# Reading Attributes with the Reflection API

Source: https://devdocs.io/php/language.attributes.reflection

## Reading Attributes with the Reflection API

To access attributes from classes, methods, functions, parameters, properties, and class constants, use the getAttributes() method provided by the Reflection API. This method returns an array of ReflectionAttribute instances. These instances can be queried for the attribute name, arguments, and can be used to instantiate an instance of the represented attribute.

Separating the reflected attribute representation from its actual instance provides more control over error handling, such as missing attribute classes, mistyped arguments, or missing values. Objects of the attribute class are instantiated only after calling ReflectionAttribute::newInstance(), ensuring that argument validation occurs at that point.

Example #1 Reading Attributes using Reflection API

```
<?php

#[Attribute]
class MyAttribute
{
    public $value;

    public function __construct($value)
    {
        $this->value = $value;
    }
}

#[MyAttribute(value: 1234)]
class Thing
{
}

function dumpAttributeData($reflection) {
    $attributes = $reflection->getAttributes();

    foreach ($attributes as $attribute) {
       var_dump($attribute->getName());
       var_dump($attribute->getArguments());
       var_dump($attribute->newInstance());
    }
}

dumpAttributeData(new ReflectionClass(Thing::class));
/*
string(11) "MyAttribute"
array(1) {
  ["value"]=>
  int(1234)
}
object(MyAttribute)#3 (1) {
  ["value"]=>
  int(1234)
}
*/
```

Instead of iterating over all attributes on the reflection instance, you can retrieve only those of a specific attribute class by passing the attribute class name as an argument.

Example #2 Reading Specific Attributes using Reflection API

```
<?php

function dumpMyAttributeData($reflection) {
    $attributes = $reflection->getAttributes(MyAttribute::class);

    foreach ($attributes as $attribute) {
       var_dump($attribute->getName());
       var_dump($attribute->getArguments());
       var_dump($attribute->newInstance());
    }
}

dumpMyAttributeData(new ReflectionClass(Thing::class));
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.attributes.reflection.php
