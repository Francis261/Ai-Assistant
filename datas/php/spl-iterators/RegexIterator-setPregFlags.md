# RegexIterator::setPregFlags

Source: https://devdocs.io/php/regexiterator.setpregflags

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RegexIterator::setPregFlags — Sets the regular expression flags

### Description

```
public RegexIterator::setPregFlags(int $pregFlags): void
```

Sets the regular expression flags.

### Parameters

The regular expression flags. See RegexIterator::__construct() for an overview of available flags.

### Return Values

No value is returned.

### Examples

Example #1 RegexIterator::setPregFlags() example

Creates a new RegexIterator that filters all entries with where the array key starts with 'test'.

```
<?php
$test = array ('test 1', 'another test', 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/^test/', RegexIterator::GET_MATCH);

$regexIterator->setPregFlags(PREG_OFFSET_CAPTURE);

foreach ($regexIterator as $key => $value) {
    var_dump($value);
}
?>
```

The above example will output something similar to:

```
array(1) {
  [0]=>
  array(2) {
    [0]=>
    string(4) "test"
    [1]=>
    int(0)
  }
}
array(1) {
  [0]=>
  array(2) {
    [0]=>
    string(4) "test"
    [1]=>
    int(0)
  }
}
```

### See Also

- RegexIterator::getPregFlags() - Returns the regular expression flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexiterator.setpregflags.php
