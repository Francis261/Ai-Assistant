# ReflectionClass::getDocComment

Source: https://devdocs.io/php/reflectionclass.getdoccomment

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getDocComment — Gets doc comments

### Description

```
public ReflectionClass::getDocComment(): string|false
```

Gets doc comments from a class. Doc comments start with /**, followed by whitespace. If there are multiple doc comments above the class definition, the one closest to the class will be taken.

### Parameters

This function has no parameters.

### Return Values

The doc comment if it exists, otherwise false.

### Examples

Example #1 ReflectionClass::getDocComment() example

```
<?php
/**
 * A test class
 *
 * @param  foo bar
 * @return baz
 */
class TestClass { }

$rc = new ReflectionClass('TestClass');
var_dump($rc->getDocComment());
?>
```

The above example will output:

```
string(61) "/** 
 * A test class
 *
 * @param  foo bar
 * @return baz
 */"
```

### See Also

- ReflectionClass::getName() - Gets class name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getdoccomment.php
