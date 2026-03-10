# final

Source: https://devdocs.io/php/language.oop5.final

## Final Keyword

The final keyword prevents child classes from overriding a method, property, or constant by prefixing the definition with final. If the class itself is being defined final then it cannot be extended.

Example #1 Final methods example

```
<?php
class BaseClass {
   public function test() {
       echo "BaseClass::test() called\n";
   }
   
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called\n";
   }
}

class ChildClass extends BaseClass {
   public function moreTesting() {
       echo "ChildClass::moreTesting() called\n";
   }
}
// Results in Fatal error: Cannot override final method BaseClass::moreTesting()
?>
```

Example #2 Final class example

```
<?php
final class BaseClass {
   public function test() {
       echo "BaseClass::test() called\n";
   }

   // As the class is already final, the final keyword is redundant
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called\n";
   }
}

class ChildClass extends BaseClass {
}
// Results in Fatal error: Class ChildClass may not inherit from final class (BaseClass)
?>
```

Example #3 Final property example as of PHP 8.4.0

```
<?php
class BaseClass {
   final protected string $test;
}

class ChildClass extends BaseClass {
    public string $test;
}
// Results in Fatal error: Cannot override final property BaseClass::$test
?>
```

Example #4 Final constants example as of PHP 8.1.0

```
<?php
class Foo
{
    final public const X = "foo";
}

class Bar extends Foo
{
    public const X = "bar";
}

// Fatal error: Bar::X cannot override final constant Foo::X
?>
```

Note: As of PHP 8.0.0, private methods may not be declared final except for the constructor.

Note: A property that is declared private(set) is implicitly final.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.oop5.final.php
