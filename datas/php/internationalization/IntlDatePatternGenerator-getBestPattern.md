# IntlDatePatternGenerator::getBestPattern

Source: https://devdocs.io/php/intldatepatterngenerator.getbestpattern

(PHP 8 >= 8.1.0)

IntlDatePatternGenerator::getBestPattern — Determines the most suitable date/time format

### Description

```
public IntlDatePatternGenerator::getBestPattern(string $skeleton): string|false
```

Determines which date/time format is most suitable for a particular locale.

### Parameters

The skeleton.

### Return Values

Returns a format, accepted by DateTimeInterface::format() on success, or false on failure.

### Examples

Example #1 IntlDatePatternGenerator::getBestPattern() example

```
<?php

$skeleton = 'YYYYMMdd';
$today = \DateTimeImmutable::createFromFormat('Y-m-d', '2021-04-24');
 
$patternGenerator = new \IntlDatePatternGenerator('de_DE');
$pattern = $patternGenerator->getBestPattern($skeleton);
echo 'de: ', \IntlDateFormatter::formatObject($today, $pattern, 'de_DE'), "\n";
 
$patternGenerator = new \IntlDatePatternGenerator('en_US');
$pattern = $patternGenerator->getBestPattern($skeleton);
echo 'en: ', \IntlDateFormatter::formatObject($today, $pattern, 'en_US');
?>
```

The above example will output:

```
de: 24.04.2021
en: 04/24/2021
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldatepatterngenerator.getbestpattern.php
