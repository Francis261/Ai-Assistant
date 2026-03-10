# Ds\Map::put

Source: https://devdocs.io/php/ds-map.put

(PECL ds >= 1.0.0)

Ds\Map::put — Associates a key with a value

### Description

```
public Ds\Map::put(mixed $key, mixed $value): void
```

Associates a key with a value, overwriting a previous association if one exists.

Note:

Keys of type object are supported. If an object implements Ds\Hashable, equality will be determined by the object's equals function. If an object does not implement Ds\Hashable, objects must be references to the same instance to be considered equal.

Note:

You can also use array syntax to associate values by key, eg. $map["key"] = $value.

Be careful when using array syntax. Scalar keys will be coerced to integers by the engine. For example, $map["1"] will attempt to access int(1), while $map->get("1") will correctly look up the string key.

See Arrays.

### Parameters

The key to associate the value with.

The value to be associated with the key.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Map::put() example

```
<?php
$map = new \Ds\Map();

$map->put("a", 1);
$map->put("b", 2);
$map->put("c", 3);

print_r($map);
?>
```

The above example will output something similar to:

```
Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 1
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 3
        )

)
```

Example #2 Ds\Map::put() example using objects as keys

```
<?php
class HashableObject implements \Ds\Hashable
{
    /**
     * An arbitrary value to use as the hash value. Does not define equality.
     */
    private $value;

    public function __construct($value)
    {
        $this->value = $value;
    }

    public function hash()
    {
        return $this->value;
    }

    public function equals($obj): bool
    {
        return $this->value === $obj->value;
    }
}

$map = new \Ds\Map();

$obj = new \ArrayIterator([]);

// Using the same instance multiple times will overwrite the previous value.
$map->put($obj, 1);
$map->put($obj, 2);

// Using multiple instances of the same object will create new associations.
$map->put(new \stdClass(), 3);
$map->put(new \stdClass(), 4);

// Using multiple instances of equal hashable objects will overwrite previous values.
$map->put(new \HashableObject(1), 5);
$map->put(new \HashableObject(1), 6);
$map->put(new \HashableObject(2), 7);
$map->put(new \HashableObject(2), 8);

var_dump($map);
?>
```

The above example will output something similar to:

```
object(Ds\Map)#1 (5) {
  [0]=>
  object(Ds\Pair)#7 (2) {
    ["key"]=>
    object(ArrayIterator)#2 (1) {
      ["storage":"ArrayIterator":private]=>
      array(0) {
      }
    }
    ["value"]=>
    int(2)
  }
  [1]=>
  object(Ds\Pair)#8 (2) {
    ["key"]=>
    object(stdClass)#3 (0) {
    }
    ["value"]=>
    int(3)
  }
  [2]=>
  object(Ds\Pair)#9 (2) {
    ["key"]=>
    object(stdClass)#4 (0) {
    }
    ["value"]=>
    int(4)
  }
  [3]=>
  object(Ds\Pair)#10 (2) {
    ["key"]=>
    object(HashableObject)#5 (1) {
      ["value":"HashableObject":private]=>
      int(1)
    }
    ["value"]=>
    int(6)
  }
  [4]=>
  object(Ds\Pair)#11 (2) {
    ["key"]=>
    object(HashableObject)#6 (1) {
      ["value":"HashableObject":private]=>
      int(2)
    }
    ["value"]=>
    int(8)
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-map.put.php
