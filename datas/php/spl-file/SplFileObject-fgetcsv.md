# SplFileObject::fgetcsv

Source: https://devdocs.io/php/splfileobject.fgetcsv

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::fgetcsv — Gets line from file and parse as CSV fields

### Description

```
public SplFileObject::fgetcsv(string $separator = ",", string $enclosure = "\"", string $escape = "\\"): array|false
```

Gets a line from the file which is in CSV format and returns an array containing the fields read.

Note: The locale settings are taken into account by this function. For example, data encoded in certain one-byte encodings may be parsed incorrectly if LC_CTYPE is en_US.UTF-8.

### Parameters

The field delimiter (one single-byte character only). By default , or the value set by a prior call to SplFileObject::setCsvControl().

The field enclosure character (one single-byte character only). By default " or the value set by a prior call to SplFileObject::setCsvControl().

The escape character (at most one single-byte character). By default \ or the value set by a prior call to SplFileObject::setCsvControl(). An empty string ("") disables the proprietary escape mechanism.

Note: Usually an enclosure character is escaped inside a field by doubling it; however, the escape character can be used as an alternative. So for the default parameter values "" and \" have the same meaning. Other than allowing to escape the enclosure character the escape character has no special meaning; it isn't even meant to escape itself.

As of PHP 8.4.0, depending on the default value of escape is deprecated. It needs to be provided explicitly either positionally or by the use of Named Arguments, or by a call to SplFileObject::setCsvControl().

When escape is set to anything other than an empty string ("") it can result in CSV that is not compliant with » RFC 4180 or unable to survive a roundtrip through the PHP CSV functions. The default for escape is "\\" so it is recommended to set it to the empty string explicitly. The default value will change in a future version of PHP, no earlier than PHP 9.0.

### Return Values

Returns an indexed array containing the fields read, or false on error.

Note:

A blank line in a CSV file will be returned as an array comprising a single null field unless using SplFileObject::SKIP_EMPTY | SplFileObject::DROP_NEW_LINE, in which case empty lines are skipped.

### Errors/Exceptions

Throws a ValueError if separator or enclosure is not one byte long.

Throws a ValueError if escape is not one byte long or the empty string.

### Changelog

### Examples

Example #1 SplFileObject::fgetcsv() example

```
<?php
$file = new SplFileObject("data.csv");
while (!$file->eof()) {
    var_dump($file->fgetcsv());
}
?>
```

Example #2 SplFileObject::READ_CSV example

```
<?php
$file = new SplFileObject("animals.csv");
$file->setFlags(SplFileObject::READ_CSV);
foreach ($file as $row) {
    list($animal, $class, $legs) = $row;
    printf("A %s is a %s with %d legs\n", $animal, $class, $legs);
}
?>
```

Contents of animals.csv

```
crocodile,reptile,4
dolphin,mammal,0
duck,bird,2
koala,mammal,4
salmon,fish,0
```

The above example will output something similar to:

```
A crocodile is a reptile with 4 legs
A dolphin is a mammal with 0 legs
A duck is a bird with 2 legs
A koala is a mammal with 4 legs
A salmon is a fish with 0 legs
```

### See Also

- SplFileObject::fputcsv() - Write a field array as a CSV line
- SplFileObject::setCsvControl() - Set the delimiter, enclosure and escape character for CSV
- SplFileObject::getCsvControl() - Get the delimiter, enclosure and escape character for CSV
- SplFileObject::setFlags() - Sets flags for the SplFileObject
- SplFileObject::READ_CSV
- SplFileObject::current() - Retrieve current line of file
- fputcsv() - Format line as CSV and write to file pointer
- fgetcsv() - Gets line from file pointer and parse for CSV fields
- str_getcsv() - Parse a CSV string into an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fgetcsv.php
