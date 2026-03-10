# instanceof

Source: https://devdocs.io/php/language.operators.type

## Type Operators

instanceof is used to determine whether a PHP variable is an instantiated object of a certain class:

Example #1 Using instanceof with classes

```
<?php
class MyClass
{
}

class NotMyClass
{
}
$a = new MyClass;

var_dump($a instanceof MyClass);
var_dump($a instanceof NotMyClass);
?>
```

The above example will output:

```
bool(true)
bool(false)
```

instanceof can also be used to determine whether a variable is an instantiated object of a class that inherits from a parent class:

Example #2 Using instanceof with inherited classes

```
<?php
class ParentClass
{
}

class MyClass extends ParentClass
{
}

$a = new MyClass;

var_dump($a instanceof MyClass);
var_dump($a instanceof ParentClass);
?>
```

The above example will output:

```
bool(true)
bool(true)
```

To check if an object is not an instanceof a class, the logical not operator can be used.

Example #3 Using instanceof to check if object is not an instanceof a class

```
<?php
class MyClass
{
}

$a = new MyClass;
var_dump(!($a instanceof stdClass));
?>
```

The above example will output:

```
bool(true)
```

Lastly, instanceof can also be used to determine whether a variable is an instantiated object of a class that implements an interface:

Example #4 Using instanceof with interfaces

```
<?php
interface MyInterface
{
}

class MyClass implements MyInterface
{
}

$a = new MyClass;

var_dump($a instanceof MyClass);
var_dump($a instanceof MyInterface);
?>
```

The above example will output:

```
bool(true)
bool(true)
```

Although instanceof is usually used with a literal classname, it can also be used with another object or a string variable:

Example #5 Using instanceof with other variables

```
<?php
interface MyInterface
{
}

class MyClass implements MyInterface
{
}

$a = new MyClass;
$b = new MyClass;
$c = 'MyClass';
$d = 'NotMyClass';

var_dump($a instanceof $b); // $b is an object of class MyClass
var_dump($a instanceof $c); // $c is a string 'MyClass'
var_dump($a instanceof $d); // $d is a string 'NotMyClass'
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
```

instanceof does not throw any error if the variable being tested is not an object, it simply returns false. Constants, however, were not allowed prior to PHP 7.3.0.

Example #6 Using instanceof to test other variables

```
<?php
$a = 1;
$b = NULL;
$c = fopen('/tmp/', 'r');
var_dump($a instanceof stdClass); // $a is an integer
var_dump($b instanceof stdClass); // $b is NULL
var_dump($c instanceof stdClass); // $c is a resource
var_dump(FALSE instanceof stdClass);
?>
```

The above example will output:

```
bool(false)
bool(false)
bool(false)
PHP Fatal error:  instanceof expects an object instance, constant given
```

As of PHP 7.3.0, constants are allowed on the left-hand-side of the instanceof operator.

Example #7 Using instanceof to test constants

```
<?php
var_dump(FALSE instanceof stdClass);
?>
```

Output of the above example in PHP 7.3:

```
bool(false)
```

As of PHP 8.0.0, instanceof can now be used with arbitrary expressions. The expression must be wrapped in parentheses and produce a string.

Example #8 Using instanceof with an arbitrary expression

```
<?php

class ClassA extends \stdClass {}
class ClassB extends \stdClass {}
class ClassC extends ClassB {}
class ClassD extends ClassA {}

function getSomeClass(): string
{
    return ClassA::class;
}

var_dump(new ClassA instanceof ('std' . 'Class'));
var_dump(new ClassB instanceof ('Class' . 'B'));
var_dump(new ClassC instanceof ('Class' . 'A'));
var_dump(new ClassD instanceof (getSomeClass()));
?>
```

Output of the above example in PHP 8:

```
bool(true)
bool(true)
bool(false)
bool(true)
```

The instanceof operator has a functional variant with the is_a() function.

### See Also

- get_class()
- is_a()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.operators.type.php
