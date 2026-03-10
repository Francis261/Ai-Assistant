# Generator::throw

Source: https://devdocs.io/php/generator.throw

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

Generator::throw — Throw an exception into the generator

### Description

```
public Generator::throw(Throwable $exception): mixed
```

Throws an exception into the generator and resumes execution of the generator. The behavior will be the same as if the current yield expression was replaced with a throw $exception statement.

If the generator is already closed when this method is invoked, the exception will be thrown in the caller's context instead.

### Parameters

Exception to throw into the generator.

### Return Values

Returns the yielded value.

### Examples

Example #1 Throwing an exception into a generator

```
<?php
function gen() {
    echo "Foo\n";
    try {
        yield;
    } catch (Exception $e) {
        echo "Exception: {$e->getMessage()}\n";
    }
    echo "Bar\n";
}
 
$gen = gen();
$gen->rewind();
$gen->throw(new Exception('Test'));
?>
```

The above example will output:

```
Foo
Exception: Test
Bar
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/generator.throw.php
