# RegexIterator::setFlags

Source: https://devdocs.io/php/regexiterator.setflags

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RegexIterator::setFlags — Sets the flags

### Description

```
public RegexIterator::setFlags(int $flags): void
```

Sets the flags.

### Parameters

The flags to set, a bitmask of class constants.

The available flags are listed below. The actual meanings of these flags are described in the predefined constants.

### Return Values

No value is returned.

### Examples

Example #1 RegexIterator::setFlags() example

Creates a new RegexIterator that filters all entries whose key starts with 'test'.

```
<?php
$test = array ('str1' => 'test 1', 'teststr2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/^test/');
$regexIterator->setFlags(RegexIterator::USE_KEY);

foreach ($regexIterator as $key => $value) {
    echo $key . ' => ' . $value . "\n";
}
?>
```

The above example will output:

```
teststr2 => another test
```

### See Also

- RegexIterator::getFlags() - Get flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexiterator.setflags.php
