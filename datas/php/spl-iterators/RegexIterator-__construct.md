# RegexIterator::__construct

Source: https://devdocs.io/php/regexiterator.construct

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RegexIterator::__construct — Create a new RegexIterator

### Description

Create a new RegexIterator which filters an Iterator using a regular expression.

### Parameters

The iterator to apply this regex filter to.

The regular expression to match.

Operation mode, see RegexIterator::setMode() for a list of modes.

Special flags, see RegexIterator::setFlags() for a list of available flags.

The regular expression flags. These flags depend on the operation mode parameter:

### Errors/Exceptions

Throws an InvalidArgumentException if the pattern argument is invalid.

### Examples

Example #1 RegexIterator::__construct() example

Creates a new RegexIterator that filters all strings that start with 'test'.

```
<?php
$arrayIterator = new ArrayIterator(array('test 1', 'another test', 'test 123'));
$regexIterator = new RegexIterator($arrayIterator, '/^test/');

foreach ($regexIterator as $value) {
    echo $value . "\n";
}
?>
```

The above example will output something similar to:

```
test 1
test 123
```

### See Also

- preg_match() - Perform a regular expression match
- preg_match_all() - Perform a global regular expression match
- preg_replace() - Perform a regular expression search and replace
- preg_split() - Split string by a regular expression

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexiterator.construct.php
