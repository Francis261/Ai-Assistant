# RecursiveIteratorIterator::__construct

Source: https://devdocs.io/php/recursiveiteratoriterator.construct

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

RecursiveIteratorIterator::__construct — Construct a RecursiveIteratorIterator

### Description

Creates a RecursiveIteratorIterator from a RecursiveIterator.

### Parameters

The iterator being constructed from. Either a RecursiveIterator or IteratorAggregate.

Optional mode. Possible values are

- RecursiveIteratorIterator::LEAVES_ONLY - The default. Lists only leaves in iteration.
- RecursiveIteratorIterator::SELF_FIRST - Lists leaves and parents in iteration with parents coming first.
- RecursiveIteratorIterator::CHILD_FIRST - Lists leaves and parents in iteration with leaves coming first.

Optional flag. Possible values are RecursiveIteratorIterator::CATCH_GET_CHILD which will then ignore exceptions thrown in calls to RecursiveIteratorIterator::getChildren().

### Examples

Example #1 Iterating a RecursiveIteratorIterator

```
<?php
$array = array(
    array(
        array(
            array(
                'leaf-0-0-0-0',
                'leaf-0-0-0-1'
            ),
            'leaf-0-0-0'
        ),
        array(
            array(
                'leaf-0-1-0-0',
                'leaf-0-1-0-1'
            ),
            'leaf-0-1-0'
        ),
        'leaf-0-0'
    )
);

$iterator = new RecursiveIteratorIterator(
    new RecursiveArrayIterator($array),
    $mode
);
foreach ($iterator as $key => $leaf) {
    echo "$key => $leaf", PHP_EOL;
}
?>
```

Output with $mode = RecursiveIteratorIterator::LEAVES_ONLY

```
0 => leaf-0-0-0-0
1 => leaf-0-0-0-1
0 => leaf-0-0-0
0 => leaf-0-1-0-0
1 => leaf-0-1-0-1
0 => leaf-0-1-0
0 => leaf-0-0
```

Output with $mode = RecursiveIteratorIterator::SELF_FIRST

```
0 => Array
0 => Array
0 => Array
0 => leaf-0-0-0-0
1 => leaf-0-0-0-1
1 => leaf-0-0-0
1 => Array
0 => Array
0 => leaf-0-1-0-0
1 => leaf-0-1-0-1
1 => leaf-0-1-0
2 => leaf-0-0
```

Output with $mode = RecursiveIteratorIterator::CHILD_FIRST

```
0 => leaf-0-0-0-0
1 => leaf-0-0-0-1
0 => Array
1 => leaf-0-0-0
0 => Array
0 => leaf-0-1-0-0
1 => leaf-0-1-0-1
0 => Array
1 => leaf-0-1-0
1 => Array
2 => leaf-0-0
0 => Array
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursiveiteratoriterator.construct.php
