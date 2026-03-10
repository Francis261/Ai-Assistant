# The ArrayAccess interface

Source: https://devdocs.io/php/class.arrayaccess

## Introduction

(PHP 5, PHP 7, PHP 8)

Interface to provide accessing objects as arrays.

## Interface synopsis

```
public offsetExists(mixed $offset): bool
```

```
public offsetGet(mixed $offset): mixed
```

```
public offsetSet(mixed $offset, mixed $value): void
```

```
public offsetUnset(mixed $offset): void
```

## Examples

Example #1 Basic usage

```
<?php
class Obj implements ArrayAccess {
    public $container = [
        "one"   => 1,
        "two"   => 2,
        "three" => 3,
    ];

    public function offsetSet($offset, $value): void {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    public function offsetExists($offset): bool {
        return isset($this->container[$offset]);
    }

    public function offsetUnset($offset): void {
        unset($this->container[$offset]);
    }

    public function offsetGet($offset): mixed {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }
}

$obj = new Obj;

var_dump(isset($obj["two"]));
var_dump($obj["two"]);
unset($obj["two"]);
var_dump(isset($obj["two"]));
$obj["two"] = "A value";
var_dump($obj["two"]);
$obj[] = 'Append 1';
$obj[] = 'Append 2';
$obj[] = 'Append 3';
print_r($obj);
?>
```

The above example will output something similar to:

```
bool(true)
int(2)
bool(false)
string(7) "A value"
obj Object
(
    [container:obj:private] => Array
        (
            [one] => 1
            [three] => 3
            [two] => A value
            [0] => Append 1
            [1] => Append 2
            [2] => Append 3
        )

)
```

## Table of Contents

- ArrayAccess::offsetExists — Whether an offset exists
- ArrayAccess::offsetGet — Offset to retrieve
- ArrayAccess::offsetSet — Assign a value to the specified offset
- ArrayAccess::offsetUnset — Unset an offset

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.arrayaccess.php
