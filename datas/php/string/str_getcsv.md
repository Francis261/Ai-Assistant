# str_getcsv

Source: https://devdocs.io/php/function.str-getcsv

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

str_getcsv — Parse a CSV string into an array

### Description

```
str_getcsv(
 string $string,
 string $separator = ",",
 string $enclosure = "\"",
 string $escape = "\\"
): array
```

Parses a string input for fields in CSV format and returns an array containing the fields read.

Note: The locale settings are taken into account by this function. For example, data encoded in certain one-byte encodings may be parsed incorrectly if LC_CTYPE is en_US.UTF-8.

### Parameters

The string to parse.

The separator parameter sets the field separator. It must be a single byte character.

The enclosure parameter sets the field enclosure character. It must be a single byte character.

The escape parameter sets the escape character. It must be a single byte character or the empty string. The empty string ("") disables the proprietary escape mechanism.

Note: Usually an enclosure character is escaped inside a field by doubling it; however, the escape character can be used as an alternative. So for the default parameter values "" and \" have the same meaning. Other than allowing to escape the enclosure character the escape character has no special meaning; it isn't even meant to escape itself.

As of PHP 8.4.0, depending on the default value of escape is deprecated. It needs to be provided explicitly either positionally or by the use of named arguments.

When escape is set to anything other than an empty string ("") it can result in CSV that is not compliant with » RFC 4180 or unable to survive a roundtrip through the PHP CSV functions. The default for escape is "\\" so it is recommended to set it to the empty string explicitly. The default value will change in a future version of PHP, no earlier than PHP 9.0.

### Return Values

Returns an indexed array containing the fields read.

### Errors/Exceptions

Throws a ValueError if separator or enclosure is not one byte long.

Throws a ValueError if escape is not one byte long or the empty string.

### Changelog

### Examples

Example #1 str_getcsv() example

```
<?php

$string = 'PHP,Java,Python,Kotlin,Swift';
$data = str_getcsv($string, escape: '\\');

var_dump($data);
?>
```

The above example will output:

```
array(5) {
  [0]=>
  string(3) "PHP"
  [1]=>
  string(4) "Java"
  [2]=>
  string(6) "Python"
  [3]=>
  string(6) "Kotlin"
  [4]=>
  string(5) "Swift"
}
```

Example #2 str_getcsv() example with an empty string

On an empty string this function returns the value [null] instead of an empty array.

```
<?php

$string = '';
$data = str_getcsv($string, escape: '\\');

var_dump($data);
?>
```

The above example will output:

```
array(1) {
  [0]=>
  NULL
}
```

### See Also

- fputcsv() - Format line as CSV and write to file pointer
- fgetcsv() - Gets line from file pointer and parse for CSV fields
- SplFileObject::fgetcsv() - Gets line from file and parse as CSV fields
- SplFileObject::fputcsv() - Write a field array as a CSV line
- SplFileObject::setCsvControl() - Set the delimiter, enclosure and escape character for CSV
- SplFileObject::getCsvControl() - Get the delimiter, enclosure and escape character for CSV

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.str-getcsv.php
