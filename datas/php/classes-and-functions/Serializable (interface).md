# The Serializable interface

Source: https://devdocs.io/php/class.serializable

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Interface for customized serializing.

Classes that implement this interface no longer support __sleep() and __wakeup(). The method serialize is called whenever an instance needs to be serialized. This does not invoke __destruct() or have any other side effect unless programmed inside the method. When the data is unserialized the class is known and the appropriate unserialize() method is called as a constructor instead of calling __construct(). If you need to execute the standard constructor you may do so in the method.

As of PHP 8.1.0, a class which implements Serializable without also implementing __serialize() and __unserialize() will generate a deprecation warning.

## Interface synopsis

```
public serialize(): ?string
```

```
public unserialize(string $data): void
```

## Examples

Example #1 Basic usage

```
<?php
class obj implements Serializable {
    private $data;
    public function __construct() {
        $this->data = "My private data";
    }
    public function serialize() {
        return serialize($this->data);
    }
    public function unserialize($data) {
        $this->data = unserialize($data);
    }
    public function getData() {
        return $this->data;
    }
}

$obj = new obj;
$ser = serialize($obj);

var_dump($ser);

$newobj = unserialize($ser);

var_dump($newobj->getData());
?>
```

The above example will output something similar to:

```
string(38) "C:3:"obj":23:{s:15:"My private data";}"
string(15) "My private data"
```

## Table of Contents

- Serializable::serialize — String representation of object
- Serializable::unserialize — Constructs the object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.serializable.php
