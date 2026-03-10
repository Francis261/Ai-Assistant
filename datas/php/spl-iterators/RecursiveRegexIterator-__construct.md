# RecursiveRegexIterator::__construct

Source: https://devdocs.io/php/recursiveregexiterator.construct

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RecursiveRegexIterator::__construct — Creates a new RecursiveRegexIterator

### Description

Creates a new regular expression iterator.

### Parameters

The recursive iterator to apply this regex filter to.

The regular expression to match.

Operation mode, see RegexIterator::setMode() for a list of modes.

Special flags, see RegexIterator::setFlags() for a list of available flags.

The regular expression flags. These flags depend on the operation mode parameter:

### Examples

Example #1 RecursiveRegexIterator::__construct() example

Creates a new RegexIterator that filters all strings that start with 'test'.

```
<?php
$rArrayIterator = new RecursiveArrayIterator(array('test1', array('tet3', 'test4', 'test5')));
$rRegexIterator = new RecursiveRegexIterator($rArrayIterator, '/^test/',
    RecursiveRegexIterator::ALL_MATCHES);

foreach ($rRegexIterator as $key1 => $value1) {

    if ($rRegexIterator->hasChildren()) {

        // print all children
        echo "Children: ";
        foreach ($rRegexIterator->getChildren() as $key => $value) {
            echo $value . " ";
        }
        echo "\n";
    } else {
        echo "No children\n";
    }

}
?>
```

The above example will output something similar to:

```
No children
Children: test4 test5
```

### See Also

- preg_match() - Perform a regular expression match
- preg_match_all() - Perform a global regular expression match
- preg_replace() - Perform a regular expression search and replace
- preg_split() - Split string by a regular expression

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursiveregexiterator.construct.php
