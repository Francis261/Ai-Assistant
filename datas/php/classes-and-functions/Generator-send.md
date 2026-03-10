# Generator::send

Source: https://devdocs.io/php/generator.send

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

Generator::send — Send a value to the generator

### Description

```
public Generator::send(mixed $value): mixed
```

Sends the given value to the generator as the result of the current yield expression and resumes execution of the generator.

If the generator is not at a yield expression when this method is called, it will first be let to advance to the first yield expression before sending the value. As such it is not necessary to "prime" PHP generators with a Generator::next() call (like it is done in Python).

### Parameters

Value to send into the generator. This value will be the return value of the yield expression the generator is currently at.

### Return Values

Returns the yielded value.

### Examples

Example #1 Using Generator::send() to inject values

```
<?php
function printer() {
    echo "I'm printer!".PHP_EOL;
    while (true) {
        $string = yield;
        echo $string.PHP_EOL;
    }
}

$printer = printer();
$printer->send('Hello world!');
$printer->send('Bye world!');
?>
```

The above example will output:

```
I'm printer!
Hello world!
Bye world!
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/generator.send.php
