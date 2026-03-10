# Closure::call

Source: https://devdocs.io/php/closure.call

(PHP 7, PHP 8)

Closure::call — Binds and calls the closure

### Description

```
public Closure::call(object $newThis, mixed ...$args): mixed
```

Temporarily binds the closure to newThis, and calls it with any given parameters.

### Parameters

The object to bind the closure to for the duration of the call.

Zero or more parameters, which will be given as parameters to the closure.

### Return Values

Returns the return value of the closure.

### Examples

Example #1 Closure::call() example

```
<?php
class Value {
    protected $value;

    public function __construct($value) {
        $this->value = $value;
    }

    public function getValue() {
        return $this->value;
    }
}

$three = new Value(3);
$four = new Value(4);

$closure = function ($delta) { var_dump($this->getValue() + $delta); };
$closure->call($three, 4);
$closure->call($four, 4);
?>
```

The above example will output:

```
int(7)
int(8)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/closure.call.php
