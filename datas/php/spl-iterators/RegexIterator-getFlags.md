# RegexIterator::getFlags

Source: https://devdocs.io/php/regexiterator.getflags

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RegexIterator::getFlags — Get flags

### Description

```
public RegexIterator::getFlags(): int
```

Returns the flags, see RegexIterator::setFlags() for a list of available flags.

### Parameters

This function has no parameters.

### Return Values

Returns the set flags.

### Examples

Example #1 RegexIterator::getFlags() example

```
<?php

$test = array ('str1' => 'test 1', 'teststr2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/^test/');
$regexIterator->setFlags(RegexIterator::USE_KEY);

if ($regexIterator->getFlags() & RegexIterator::USE_KEY) {
    echo 'Filtering based on the array keys.';
} else {
    echo 'Filtering based on the array values.';
}
?>
```

The above example will output:

```
Filtering based on the array keys.
```

### See Also

- RegexIterator::setFlags() - Sets the flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexiterator.getflags.php
