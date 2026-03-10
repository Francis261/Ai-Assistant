# RegexIterator::accept

Source: https://devdocs.io/php/regexiterator.accept

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RegexIterator::accept — Get accept status

### Description

```
public RegexIterator::accept(): bool
```

Matches (string) RegexIterator::current() (or RegexIterator::key() if the RegexIterator::USE_KEY flag is set) against the regular expression.

### Parameters

This function has no parameters.

### Return Values

true if a match, false otherwise.

### Examples

Example #1 RegexIterator::accept() example

This example shows that only items matching the regular expression are accepted.

```
<?php
$names = new ArrayIterator(array('Ann', 'Bob', 'Charlie', 'David'));
$filter = new RegexIterator($names, '/^[B-D]/');
foreach ($filter as $name) {
    echo $name . PHP_EOL;
}
?>
```

The above example will output:

```
Bob
Charlie
David
```

### See Also

- RegexIterator constants
- RegexIterator::setFlags() - Sets the flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexiterator.accept.php
