# ReflectionMethod::__construct

Source: https://devdocs.io/php/reflectionmethod.construct

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::__construct — Constructs a ReflectionMethod

### Description

Alternative signature (not supported with named arguments):

The alternative signature is deprecated as of PHP 8.4.0, use ReflectionMethod::createFromMethodName() instead.

Constructs a new ReflectionMethod.

### Parameters

Classname or object (instance of the class) that contains the method.

Name of the method.

Class name and method name delimited by ::.

### Errors/Exceptions

A ReflectionException is thrown if the given method does not exist.

### Examples

Example #1 ReflectionMethod::__construct() example

```
<?php
class Counter
{
    private static $c = 0;

    /**
     * Increment counter
     *
     * @final
     * @static
     * @access  public
     * @return  int
     */
    final public static function increment()
    {
        return ++self::$c;
    }
}

// Create an instance of the ReflectionMethod class
$method = new ReflectionMethod('Counter', 'increment');

// Print out basic information
printf(
    "===> The %s%s%s%s%s%s%s method '%s' (which is %s)\n" .
    "     declared in %s\n" .
    "     lines %d to %d\n" .
    "     having the modifiers %d[%s]\n",
        $method->isInternal() ? 'internal' : 'user-defined',
        $method->isAbstract() ? ' abstract' : '',
        $method->isFinal() ? ' final' : '',
        $method->isPublic() ? ' public' : '',
        $method->isPrivate() ? ' private' : '',
        $method->isProtected() ? ' protected' : '',
        $method->isStatic() ? ' static' : '',
        $method->getName(),
        $method->isConstructor() ? 'the constructor' : 'a regular method',
        $method->getFileName(),
        $method->getStartLine(),
        $method->getEndline(),
        $method->getModifiers(),
        implode(' ', Reflection::getModifierNames($method->getModifiers()))
);

// Print documentation comment
printf("---> Documentation:\n %s\n", var_export($method->getDocComment(), true));

// Print static variables if existant
if ($statics= $method->getStaticVariables()) {
    printf("---> Static variables: %s\n", var_export($statics, true));
}

// Invoke the method
printf("---> Invocation results in: ");
var_dump($method->invoke(NULL));
?>
```

The above example will output something similar to:

```
===> The user-defined final public static method 'increment' (which is a regular method)
     declared in /Users/philip/cvs/phpdoc/test.php
     lines 14 to 17
     having the modifiers 261[final public static]
---> Documentation:
 '/**
     * Increment counter
     *
     * @final
     * @static
     * @access  public
     * @return  int
     */'
---> Invocation results in: int(1)
```

### See Also

- ReflectionMethod::export() - Export a reflection method
- Constructors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.construct.php
