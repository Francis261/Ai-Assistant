# The IteratorAggregate interface

Source: https://devdocs.io/php/class.iteratoraggregate

## Introduction

(PHP 5, PHP 7, PHP 8)

Interface to create an external Iterator.

## Interface synopsis

```
public getIterator(): Traversable
```

## Examples

Example #1 Basic usage

```
<?php

class myData implements IteratorAggregate
{
    public $property1 = "Public property one";
    public $property2 = "Public property two";
    public $property3 = "Public property three";
    public $property4 = "";

    public function __construct()
    {
        $this->property4 = "last property";
    }

    public function getIterator(): Traversable
    {
        return new ArrayIterator($this);
    }
}

$obj = new myData();

foreach ($obj as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}

?>
```

The above example will output something similar to:

```
string(9) "property1"
string(19) "Public property one"

string(9) "property2"
string(19) "Public property two"

string(9) "property3"
string(21) "Public property three"

string(9) "property4"
string(13) "last property"
```

## Table of Contents

- IteratorAggregate::getIterator — Retrieve an external iterator or traversable

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.iteratoraggregate.php
