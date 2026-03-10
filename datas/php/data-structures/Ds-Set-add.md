# Ds\Set::add

Source: https://devdocs.io/php/ds-set.add

(PECL ds >= 1.0.0)

Ds\Set::add — Adds values to the set

### Description

```
public Ds\Set::add(mixed ...$values): void
```

Adds all given values to the set that haven't already been added.

Note:

Values of type object are supported. If an object implements Ds\Hashable, equality will be determined by the object's equals function. If an object does not implement Ds\Hashable, objects must be references to the same instance to be considered equal.

All comparisons are strict (type and value).

### Parameters

Values to add to the set.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Set::add() example using integers

```
<?php
$set = new \Ds\Set();

$set->add(1);
$set->add(1);
$set->add(2);
$set->add(3);

// Strict comparison would not treat these the same as int(1)
$set->add("1");
$set->add(true);

var_dump($set);
?>
```

The above example will output something similar to:

```
object(Ds\Set)#1 (5) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
  [3]=>
  string(1) "1"
  [4]=>
  bool(true)
}
```

Example #2 Ds\Set::add() example using objects

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

$set = new \Ds\Set();

$obj = new \ArrayIterator([]);

// Adding the same instance multiple times will only add the first.
$set->add($obj);
$set->add($obj);

// Adding multiple instances of the same object will add them all.
$set->add(new \stdClass());
$set->add(new \stdClass());

// Adding multiple instances of equal hashable objects will only add the first.
$set->add(new \HashableObject(1));
$set->add(new \HashableObject(1));
$set->add(new \HashableObject(2));
$set->add(new \HashableObject(2));

var_dump($set);
?>
```

The above example will output something similar to:

```
object(Ds\Set)#1 (5) {
  [0]=>
  object(ArrayIterator)#2 (1) {
    ["storage":"ArrayIterator":private]=>
    array(0) {
    }
  }
  [1]=>
  object(stdClass)#3 (0) {
  }
  [2]=>
  object(stdClass)#4 (0) {
  }
  [3]=>
  object(HashableObject)#5 (1) {
    ["value":"HashableObject":private]=>
    int(1)
  }
  [4]=>
  object(HashableObject)#6 (1) {
    ["value":"HashableObject":private]=>
    int(2)
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.add.php
