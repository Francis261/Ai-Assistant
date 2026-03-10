# Class Constants

Source: https://devdocs.io/php/language.oop5.constants

## Class Constants

It is possible to define constants on a per-class basis remaining the same and unchangeable. The default visibility of class constants is public.

Note:

Class constants can be redefined by a child class. As of PHP 8.1.0, class constants cannot be redefined by a child class if it is defined as final.

It's also possible for interfaces to have constants. Look at the interface documentation for examples.

It's possible to reference the class using a variable. The variable's value can not be a keyword (e.g. self, parent and static).

Note that class constants are allocated once per class, and not for each class instance.

As of PHP 8.3.0, class constants can have a scalar type such as bool, int, float, string, or even array. When using array, the contents can only be other scalar types.

Example #1 Defining and using a constant

```
<?php
class MyClass
{
    const CONSTANT = 'constant value';

    function showConstant() {
        echo  self::CONSTANT . "\n";
    }
}

echo MyClass::CONSTANT . "\n";

$classname = "MyClass";
echo $classname::CONSTANT . "\n";

$class = new MyClass();
$class->showConstant();

echo $class::CONSTANT."\n";
?>
```

The special ::class constant allows for fully qualified class name resolution at compile time, this is useful for namespaced classes:

Example #2 Namespaced ::class example

```
<?php
namespace foo {
    class bar {
    }

    echo bar::class; // foo\bar
}
?>
```

Example #3 Class constant expression example

```
<?php
const ONE = 1;
class foo {
    const TWO = ONE * 2;
    const THREE = ONE + self::TWO;
    const SENTENCE = 'The value of THREE is '.self::THREE;
}
?>
```

Example #4 Class constant visibility modifiers, as of PHP 7.1.0

```
<?php
class Foo {
    public const BAR = 'bar';
    private const BAZ = 'baz';
}
echo Foo::BAR, PHP_EOL;
echo Foo::BAZ, PHP_EOL;
?>
```

Output of the above example in PHP 7.1:

```
bar

Fatal error: Uncaught Error: Cannot access private const Foo::BAZ in …
```

Note:

As of PHP 7.1.0 visibility modifiers are allowed for class constants.

Example #5 Class constant visibility variance check, as of PHP 8.3.0

```
<?php

interface MyInterface
{
    public const VALUE = 42;
}

class MyClass implements MyInterface
{
    protected const VALUE = 42;
}
?>
```

Output of the above example in PHP 8.3:

```
Fatal error: Access level to MyClass::VALUE must be public (as in interface MyInterface) …
```

Note: As of PHP 8.3.0 visibility variance is checked more strictly. Prior to this version, the visibility of a class constant could be different from the visibility of the constant in the implemented interface.

Example #6 Fetch class constant syntax, as of PHP 8.3.0

```
<?php
class Foo {
    public const BAR = 'bar';
    private const BAZ = 'baz';
}

$name = 'BAR';
echo Foo::{$name}, PHP_EOL; // bar
?>
```

Note:

As of PHP 8.3.0, class constants can be fetched dynamically using a variable.

Example #7 Assigning types to class constants, as of PHP 8.3.0

```
<?php

class MyClass {
    public const bool MY_BOOL = true;
    public const int MY_INT = 1;
    public const float MY_FLOAT = 1.01;
    public const string MY_STRING = 'one';
    public const array MY_ARRAY = [self::MY_BOOL, self::MY_INT, self::MY_FLOAT, self::MY_STRING];
}

var_dump(MyClass::MY_BOOL);
var_dump(MyClass::MY_INT);
var_dump(MyClass::MY_FLOAT);
var_dump(MyClass::MY_STRING);
var_dump(MyClass::MY_ARRAY);
?>
```

Output of the above example in PHP 8.3:

```
bool(true)
int(1)
float(1.01)
string(3) "one"
array(4) {
  [0]=>
  bool(true)
  [1]=>
  int(1)
  [2]=>
  float(1.01)
  [3]=>
  string(3) "one"
}
   
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.oop5.constants.php
