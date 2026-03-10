# JsonSerializable::jsonSerialize

Source: https://devdocs.io/php/jsonserializable.jsonserialize

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

JsonSerializable::jsonSerialize — Specify data which should be serialized to JSON

### Description

```
public JsonSerializable::jsonSerialize(): mixed
```

Serializes the object to a value that can be serialized natively by json_encode().

### Parameters

This function has no parameters.

### Return Values

Returns data which can be serialized by json_encode(), which is a value of any type other than a resource.

### Examples

Example #1 JsonSerializable::jsonSerialize() example returning an array

```
<?php
class ArrayValue implements JsonSerializable {
    private $array;
    public function __construct(array $array) {
        $this->array = $array;
    }

    public function jsonSerialize(): mixed {
        return $this->array;
    }
}

$array = [1, 2, 3];
echo json_encode(new ArrayValue($array), JSON_PRETTY_PRINT);
?>
```

The above example will output:

```
[
    1,
    2,
    3
]
```

Example #2 JsonSerializable::jsonSerialize() example returning an associative array

```
<?php
class ArrayValue implements JsonSerializable {
    private $array;
    public function __construct(array $array) {
        $this->array = $array;
    }

    public function jsonSerialize() {
        return $this->array;
    }
}

$array = ['foo' => 'bar', 'quux' => 'baz'];
echo json_encode(new ArrayValue($array), JSON_PRETTY_PRINT);
?>
```

The above example will output:

```
{
    "foo": "bar",
    "quux": "baz"
}
```

Example #3 JsonSerializable::jsonSerialize() example returning an int

```
<?php
class IntegerValue implements JsonSerializable {
    private $number;
    public function __construct($number) {
        $this->number = (int) $number;
    }

    public function jsonSerialize() {
        return $this->number;
    }
}

echo json_encode(new IntegerValue(1), JSON_PRETTY_PRINT);
?>
```

The above example will output:

```
1
```

Example #4 JsonSerializable::jsonSerialize() example returning a string

```
<?php
class StringValue implements JsonSerializable {
    private $string;
    public function __construct($string) {
        $this->string = (string) $string;
    }

    public function jsonSerialize() {
        return $this->string;
    }
}

echo json_encode(new StringValue('Hello!'), JSON_PRETTY_PRINT);
?>
```

The above example will output:

```
"Hello!"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/jsonserializable.jsonserialize.php
