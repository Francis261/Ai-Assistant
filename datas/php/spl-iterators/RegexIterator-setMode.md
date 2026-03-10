# RegexIterator::setMode

Source: https://devdocs.io/php/regexiterator.setmode

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RegexIterator::setMode — Sets the operation mode

### Description

```
public RegexIterator::setMode(int $mode): void
```

Sets the operation mode.

### Parameters

The operation mode.

The available modes are listed below. The actual meanings of these modes are described in the predefined constants.

### Return Values

No value is returned.

### Examples

Example #1 RegexIterator::setMode() example

```
<?php
$test = array ('str1' => 'test 1', 'test str2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
// Filter everything that starts with 'test ' followed by one or more numbers.
$regexIterator = new RegexIterator($arrayIterator, '/^test (\d+)/');
// Operation mode: Replace actual value with the matches
$regexIterator->setMode(RegexIterator::GET_MATCH);

foreach ($regexIterator as $key => $value) {
    // print out the matched number(s)
    echo $key . ' => ' . $value[1] . PHP_EOL;
}
?>
```

The above example will output something similar to:

```
str1 => 1
str3 => 123
```

### See Also

- RegexIterator::getMode() - Returns operation mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexiterator.setmode.php
