# Properties

Source: https://devdocs.io/php/language.oop5.properties

## Properties

Class member variables are called properties. They may be referred to using other terms such as fields, but for the purposes of this reference properties will be used. They are defined by using at least one modifier (such as Visibility, Static Keyword, or, as of PHP 8.1.0, readonly), optionally (except for readonly properties), as of PHP 7.4, followed by a type declaration, followed by a normal variable declaration. This declaration may include an initialization, but this initialization must be a constant value.

Note:

An obsolete way of declaring class properties, is by using the var keyword instead of a modifier.

Note: A property declared without a Visibility modifier will be declared as public.

Within class methods non-static properties may be accessed by using -> (Object Operator): $this->property (where property is the name of the property). Static properties are accessed by using the :: (Double Colon): self::$property. See Static Keyword for more information on the difference between static and non-static properties.

The pseudo-variable $this is available inside any class method when that method is called from within an object context. $this is the value of the calling object.

Example #1 Property declarations

```
<?php
class SimpleClass
{
   public $var1 = 'hello ' . 'world';
   public $var2 = <<<EOD
hello world
EOD;
   public $var3 = 1+2;
   // invalid property declarations:
   public $var4 = self::myStaticMethod();
   public $var5 = $myVar;

   // valid property declarations:
   public $var6 = myConstant;
   public $var7 = [true, false];

   public $var8 = <<<'EOD'
hello world
EOD;

   // Without visibility modifier:
   static $var9;
   readonly int $var10;
}
?>
```

Note:

There are various functions to handle classes and objects. See the Class/Object Functions reference.

### Type declarations

As of PHP 7.4.0, property definitions can include Type declarations, with the exception of callable.

Example #2 Example of typed properties

```
<?php

class User
{
    public int $id;
    public ?string $name;

    public function __construct(int $id, ?string $name)
    {
        $this->id = $id;
        $this->name = $name;
    }
}

$user = new User(1234, null);

var_dump($user->id);
var_dump($user->name);

?>
```

The above example will output:

```
int(1234)
NULL
```

Typed properties must be initialized before accessing, otherwise an Error is thrown.

Example #3 Accessing properties

```
<?php

class Shape
{
    public int $numberOfSides;
    public string $name;

    public function setNumberOfSides(int $numberOfSides): void
    {
        $this->numberOfSides = $numberOfSides;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getNumberOfSides(): int
    {
        return $this->numberOfSides;
    }

    public function getName(): string
    {
        return $this->name;
    }
}

$triangle = new Shape();
$triangle->setName("triangle");
$triangle->setNumberofSides(3);
var_dump($triangle->getName());
var_dump($triangle->getNumberOfSides());

$circle = new Shape();
$circle->setName("circle");
var_dump($circle->getName());
var_dump($circle->getNumberOfSides());
?>
```

The above example will output:

```
string(8) "triangle"
int(3)
string(6) "circle"

Fatal error: Uncaught Error: Typed property Shape::$numberOfSides must not be accessed before initialization
```

### Readonly properties

As of PHP 8.1.0, a property can be declared with the readonly modifier, which prevents modification of the property after initialization. Prior to PHP 8.4.0 a readonly property is implicitly private-set, and may only be written to from the same class. As of PHP 8.4.0, readonly properties are implicitly protected(set), so may be set from child classes. That may be overridden explicitly if desired.

Example #4 Example of readonly properties

```
<?php

class Test {
   public readonly string $prop;

   public function __construct(string $prop) {
       // Legal initialization.
       $this->prop = $prop;
   }
}

$test = new Test("foobar");
// Legal read.
var_dump($test->prop); // string(6) "foobar"

// Illegal reassignment. It does not matter that the assigned value is the same.
$test->prop = "foobar";
// Error: Cannot modify readonly property Test::$prop
?>
```

Note:

The readonly modifier can only be applied to typed properties. A readonly property without type constraints can be created using the Mixed type.

Note:

Readonly static properties are not supported.

A readonly property can only be initialized once, and only from the scope where it has been declared. Any other assignment or modification of the property will result in an Error exception.

Example #5 Illegal initialization of readonly properties

```
<?php
class Test1 {
    public readonly string $prop;
}

$test1 = new Test1;
// Illegal initialization outside of private scope.
$test1->prop = "foobar";
// Error: Cannot initialize readonly property Test1::$prop from global scope
?>
```

Note:

Specifying an explicit default value on readonly properties is not allowed, because a readonly property with a default value is essentially the same as a constant, and thus not particularly useful.

```
<?php

class Test {
    // Fatal error: Readonly property Test::$prop cannot have default value
    public readonly int $prop = 42;
}
?>
```

Note:

Readonly properties cannot be unset() once they are initialized. However, it is possible to unset a readonly property prior to initialization, from the scope where the property has been declared.

Modifications are not necessarily plain assignments, all of the following will also result in an Error exception:

```
<?php

class Test {
    public function __construct(
        public readonly int $i = 0,
        public readonly array $ary = [],
    ) {}
}

$test = new Test;
$test->i += 1;
$test->i++;
++$test->i;
$test->ary[] = 1;
$test->ary[0][] = 1;
unset($test->ary[0]);
$ref =& $test->i;
$test->i =& $ref;
byRef($test->i);
foreach ($test as &$prop);
?>
```

However, readonly properties do not preclude interior mutability. Objects (or resources) stored in readonly properties may still be modified internally:

```
<?php

class Test {
    public function __construct(public readonly object $obj) {}
}

$test = new Test(new stdClass);
// Legal interior mutation.
$test->obj->foo = 1;
// Illegal reassignment.
$test->obj = new stdClass;
?>
```

As of PHP 8.3.0, readonly properties can be reinitialized when cloning an object using the __clone() method.

Example #6 Readonly properties and cloning

```
<?php
class Test1 {
    public readonly ?string $prop;

    public function __clone() {
        $this->prop = null;
    }

    public function setProp(string $prop): void {
        $this->prop = $prop;
    }
}

$test1 = new Test1;
$test1->setProp('foobar');

$test2 = clone $test1;
var_dump($test2->prop); // NULL
?>
```

### Dynamic properties

If trying to assign to a non-existent property on an object, PHP will automatically create a corresponding property. This dynamically created property will only be available on this class instance.

Dynamic properties are deprecated as of PHP 8.2.0. It is recommended to declare the property instead. To handle arbitrary property names, the class should implement the magic methods __get() and __set(). At last resort the class can be marked with the #[\AllowDynamicProperties] attribute.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.oop5.properties.php
