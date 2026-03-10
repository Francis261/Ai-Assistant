# ReflectionMethod::invokeArgs

Source: https://devdocs.io/php/reflectionmethod.invokeargs

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

ReflectionMethod::invokeArgs — Invoke args

### Description

```
public ReflectionMethod::invokeArgs(?object $object, array $args): mixed
```

Invokes the reflected method and pass its arguments as array.

### Parameters

The object to invoke the method on. In case of static methods, you can pass null to this parameter.

The parameters to be passed to the function, as an array.

### Return Values

Returns the method result.

### Errors/Exceptions

A ReflectionException if the object parameter does not contain an instance of the class that this method was declared in.

A ReflectionException if the method invocation failed.

### Changelog

### Examples

Example #1 ReflectionMethod::invokeArgs() example

```
<?php
class HelloWorld {

    public function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod('HelloWorld', 'sayHelloTo');
echo $reflectionMethod->invokeArgs(new HelloWorld(), array('Mike'));
?>
```

The above example will output:

```
Hello Mike
```

### Notes

Note:

If the function has arguments that need to be references, then they must be references in the passed argument list.

### See Also

- ReflectionMethod::invoke() - Invoke
- __invoke()
- call_user_func_array() - Call a callback with an array of parameters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.invokeargs.php
