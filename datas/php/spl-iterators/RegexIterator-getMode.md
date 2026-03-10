# RegexIterator::getMode

Source: https://devdocs.io/php/regexiterator.getmode

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RegexIterator::getMode — Returns operation mode

### Description

```
public RegexIterator::getMode(): int
```

Returns the operation mode, see RegexIterator::setMode() for the list of operation modes.

### Parameters

This function has no parameters.

### Return Values

Returns the operation mode.

### Examples

Example #1 RegexIterator::getMode() example

```
<?php

$test = array ('str1' => 'test 1', 'teststr2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/^[a-z]+/', RegexIterator::GET_MATCH);

$mode = $regexIterator->getMode();
if ($mode & RegexIterator::GET_MATCH) {
    echo 'Getting the match for each item.';
} elseif ($mode & RegexIterator::ALL_MATCHES) {
    echo 'Getting all matches for each item.';
} elseif ($mode & RegexIterator::MATCH) {
    echo 'Getting each item if it matches.';
} elseif ($mode & RegexIterator::SPLIT) {
    echo 'Getting split pieces of each.';
}
?>
```

The above example will output:

```
Getting the match for each item.
```

### See Also

- RegexIterator::setMode() - Sets the operation mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexiterator.getmode.php
