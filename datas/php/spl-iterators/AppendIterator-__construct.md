# AppendIterator::__construct

Source: https://devdocs.io/php/appenditerator.construct

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

AppendIterator::__construct — Constructs an AppendIterator

### Description

Constructs an AppendIterator.

### Parameters

This function has no parameters.

### Examples

Example #1 Iterating AppendIterator with foreach

```
<?php
$pizzas   = new ArrayIterator(array('Margarita', 'Siciliana', 'Hawaii'));
$toppings = new ArrayIterator(array('Cheese', 'Anchovies', 'Olives', 'Pineapple', 'Ham'));

$appendIterator = new AppendIterator;
$appendIterator->append($pizzas);
$appendIterator->append($toppings);

foreach ($appendIterator as $key => $item) {
    echo $key . ' => ' . $item . PHP_EOL;
}
?>
```

The above example will output:

```
0 => Margarita
1 => Siciliana
2 => Hawaii
0 => Cheese
1 => Anchovies
2 => Olives
3 => Pineapple
4 => Ham
```

Example #2 Iterating AppendIterator with the AppendIterator API

```
<?php
$pizzas   = new ArrayIterator(array('Margarita', 'Siciliana', 'Hawaii'));
$toppings = new ArrayIterator(array('Cheese', 'Anchovies', 'Olives', 'Pineapple', 'Ham'));

$appendIterator = new AppendIterator;
$appendIterator->append($pizzas);
$appendIterator->append($toppings);

while ($appendIterator->valid()) {
    printf(
        '%s => %s => %s%s',
        $appendIterator->getIteratorIndex(),
        $appendIterator->key(),
        $appendIterator->current(),
        PHP_EOL
    );
    $appendIterator->next();
}
?>
```

The above example will output:

```
0 => 0 => Margarita
0 => 1 => Siciliana
0 => 2 => Hawaii
1 => 0 => Cheese
1 => 1 => Anchovies
1 => 2 => Olives
1 => 3 => Pineapple
1 => 4 => Ham
```

### Notes

When using iterator_to_array() to copy the values of the AppendIterator into an array, you have to set the optional use_key argument to false. When use_key is not false any keys reoccurring in inner iterators will get overwritten in the returned array. There is no way to preserve the original keys.

### See Also

- AppendIterator::append() - Appends an iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/appenditerator.construct.php
