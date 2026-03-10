# The Stringable interface

Source: https://devdocs.io/php/class.stringable

## Introduction

(PHP 8)

The Stringable interface denotes a class as having a __toString() method. Unlike most interfaces, Stringable is implicitly present on any class that has the magic __toString() method defined, although it can and should be declared explicitly.

Its primary value is to allow functions to type check against the union type string|Stringable to accept either a string primitive or an object that can be cast to a string.

## Interface synopsis

```
public __toString(): string
```

## Stringable Examples

Example #1 Basic Stringable Usage

This uses constructor property promotion.

```
<?php
class IPv4Address implements Stringable {
    public function __construct(
        private string $oct1,
        private string $oct2,
        private string $oct3,
        private string $oct4,
    ) {}

    public function __toString(): string {
        return "$this->oct1.$this->oct2.$this->oct3.$this->oct4";
    }
}

function showStuff(string|Stringable $value) {
    // For a Stringable, this will implicitliy call __toString().
    print $value;
}

$ip = new IPv4Address('123', '234', '42', '9');

showStuff($ip);
?>
```

The above example will output something similar to:

```
123.234.42.9
```

## Table of Contents

- Stringable::__toString — Gets a string representation of the object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.stringable.php
