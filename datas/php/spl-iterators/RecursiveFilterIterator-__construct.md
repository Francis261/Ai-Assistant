# RecursiveFilterIterator::__construct

Source: https://devdocs.io/php/recursivefilteriterator.construct

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

RecursiveFilterIterator::__construct — Create a RecursiveFilterIterator from a RecursiveIterator

### Description

Create a RecursiveFilterIterator from a RecursiveIterator.

### Parameters

The RecursiveIterator to be filtered.

### Examples

Example #1 Basic RecursiveFilterIterator() example

```
<?php
class TestsOnlyFilter extends RecursiveFilterIterator {
    public function accept() {
        // Accept the current item if we can recurse into it
        // or it is a value starting with "test"
        return $this->hasChildren() || (strpos($this->current(), "test") !== FALSE);
    }
}

$array    = array("test1", array("taste2", "test3", "test4"), "test5");
$iterator = new RecursiveArrayIterator($array);
$filter   = new TestsOnlyFilter($iterator);

foreach(new RecursiveIteratorIterator($filter) as $key => $value)
{
    echo $value . "\n";
}
?>
```

The above example will output something similar to:

```
test1
test3
test4
test5
```

Example #2 RecursiveFilterIterator() example

```
<?php
class StartsWithFilter extends RecursiveFilterIterator {

    protected $word;

    public function __construct(RecursiveIterator $rit, $word) {
        $this->word = $word;
        parent::__construct($rit);
    }

    public function accept() {
        return $this->hasChildren() OR strpos($this->current(), $this->word) === 0;
    }
    
    public function getChildren() {
        return new self($this->getInnerIterator()->getChildren(), $this->word);
    }
}

$array    = array("test1", array("taste2", "test3", "test4"), "test5");
$iterator = new RecursiveArrayIterator($array);
$filter   = new StartsWithFilter($iterator, "test");

foreach(new RecursiveIteratorIterator($filter) as $key => $value)
{
    echo $value . "\n";
}
?>
```

The above example will output something similar to:

```
test1
test3
test4
test5
```

### See Also

- RecursiveFilterIterator::getChildren() - Return the inner iterator's children contained in a RecursiveFilterIterator
- RecursiveFilterIterator::hasChildren() - Check whether the inner iterator's current element has children
- FilterIterator::accept() - Check whether the current element of the iterator is acceptable

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursivefilteriterator.construct.php
