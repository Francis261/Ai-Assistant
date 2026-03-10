# ReflectionMethod::__toString

Source: https://devdocs.io/php/reflectionmethod.tostring

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::__toString — Returns the string representation of the Reflection method object

### Description

```
public ReflectionMethod::__toString(): string
```

Returns the string representation of the Reflection method object.

### Parameters

This function has no parameters.

### Return Values

A string representation of this ReflectionMethod instance.

### Examples

Example #1 ReflectionMethod::__toString() example

```
<?php
class HelloWorld {

    public function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod(new HelloWorld(), 'sayHelloTo');
echo $reflectionMethod;
?>
```

The above example will output:

```
Method [ <user> public method sayHelloTo ] {
  @@ /var/www/examples/reflection.php 16 - 18

  - Parameters [1] {
    Parameter #0 [ <required> $name ]
  }
}
```

### See Also

- ReflectionMethod::export() - Export a reflection method
- __toString()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.tostring.php
