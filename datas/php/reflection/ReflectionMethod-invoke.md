# ReflectionMethod::invoke

Source: https://devdocs.io/php/reflectionmethod.invoke

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::invoke — Invoke

### Description

```
public ReflectionMethod::invoke(?object $object, mixed ...$args): mixed
```

Invokes a reflected method.

### Parameters

The object to invoke the method on. For static methods, pass null to this parameter.

Zero or more parameters to be passed to the method. It accepts a variable number of parameters which are passed to the method.

### Return Values

Returns the method result.

### Errors/Exceptions

A ReflectionException if the object parameter does not contain an instance of the class that this method was declared in.

A ReflectionException if the method invocation failed.

### Examples

Example #1 ReflectionMethod::invoke() example

```
<?php
class HelloWorld {

    public function sayHelloTo($name) {
        return 'Hello ' . $name;
    }

}

$reflectionMethod = new ReflectionMethod('HelloWorld', 'sayHelloTo');
echo $reflectionMethod->invoke(new HelloWorld(), 'Mike');
?>
```

The above example will output:

```
Hello Mike
```

### Notes

Note:

ReflectionMethod::invoke() cannot be used when reference parameters are expected. ReflectionMethod::invokeArgs() has to be used instead (passing references in the argument list).

### See Also

- ReflectionMethod::invokeArgs() - Invoke args
- __invoke()
- call_user_func() - Call the callback given by the first parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.invoke.php
