# RegexIterator::getPregFlags

Source: https://devdocs.io/php/regexiterator.getpregflags

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RegexIterator::getPregFlags — Returns the regular expression flags

### Description

```
public RegexIterator::getPregFlags(): int
```

Returns the regular expression flags, see RegexIterator::__construct() for the list of flags.

### Parameters

This function has no parameters.

### Return Values

Returns a bitmask of the regular expression flags.

### Examples

Example #1 RegexIterator::getPregFlags() example

```
<?php

$test = array ('str1' => 'test 1', 'teststr2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/\s/', RegexIterator::SPLIT);
$regexIterator->setPregFlags(PREG_SPLIT_NO_EMPTY | PREG_SPLIT_OFFSET_CAPTURE);

if ($regexIterator->getPregFlags() & PREG_SPLIT_NO_EMPTY) {
    echo 'Ignoring empty pieces';
} else {
    echo 'Not ignoring empty pieces';
}

?>
```

The above example will output:

```
Ignoring empty pieces
```

### See Also

- RegexIterator::setPregFlags() - Sets the regular expression flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexiterator.getpregflags.php
