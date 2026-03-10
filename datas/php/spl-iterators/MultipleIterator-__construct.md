# MultipleIterator::__construct

Source: https://devdocs.io/php/multipleiterator.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

MultipleIterator::__construct — Constructs a new MultipleIterator

### Description

Construct a new MultipleIterator.

### Parameters

The flags to set, according to the Flag Constants.

- MultipleIterator::MIT_NEED_ALL or MultipleIterator::MIT_NEED_ANY
- MultipleIterator::MIT_KEYS_NUMERIC or MultipleIterator::MIT_KEYS_ASSOC

Defaults to MultipleIterator::MIT_NEED_ALL|MultipleIterator::MIT_KEYS_NUMERIC.

### Examples

Example #1 Iterating a MultipleIterator

```
<?php
$people = new ArrayIterator(array('John', 'Jane', 'Jack', 'Judy'));
$roles  = new ArrayIterator(array('Developer', 'Scrum Master', 'Project Owner'));

$team = new MultipleIterator($flags);
$team->attachIterator($people, 'person');
$team->attachIterator($roles, 'role');

foreach ($team as $member) {
    print_r($member);
}
?>
```

Output with $flags = MIT_NEED_ALL|MIT_KEYS_NUMERIC

```
Array
(
    [0] => John
    [1] => Developer
)
Array
(
    [0] => Jane
    [1] => Scrum Master
)
Array
(
    [0] => Jack
    [1] => Project Owner
)
```

Output with $flags = MIT_NEED_ANY|MIT_KEYS_NUMERIC

```
Array
(
    [0] => John
    [1] => Developer
)
Array
(
    [0] => Jane
    [1] => Scrum Master
)
Array
(
    [0] => Jack
    [1] => Project Owner
)
Array
(
    [0] => Judy
    [1] =>
)
```

Output with $flags = MIT_NEED_ALL|MIT_KEYS_ASSOC

```
Array
(
    [person] => John
    [role] => Developer
)
Array
(
    [person] => Jane
    [role] => Scrum Master
)
Array
(
    [person] => Jack
    [role] => Project Owner
)
```

Output with $flags = MIT_NEED_ANY|MIT_KEYS_ASSOC

```
Array
(
    [person] => John
    [role] => Developer
)
Array
(
    [person] => Jane
    [role] => Scrum Master
)
Array
(
    [person] => Jack
    [role] => Project Owner
)
Array
(
    [person] => Judy
    [role] =>
)
```

### See Also

- Flag Constants
- MultipleIterator::valid() - Checks the validity of sub iterators

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/multipleiterator.construct.php
