# SplFileObject::fputcsv

Source: https://devdocs.io/php/splfileobject.fputcsv

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SplFileObject::fputcsv — Write a field array as a CSV line

### Description

```
public SplFileObject::fputcsv(
 array $fields,
 string $separator = ",",
 string $enclosure = "\"",
 string $escape = "\\",
 string $eol = "\n"
): int|false
```

Writes the fields array to the file as a CSV line.

### Parameters

An array of values.

The field delimiter (one single-byte character only). By default , or the value set by a prior call to SplFileObject::setCsvControl().

The field enclosure character (one single-byte character only). By default " or the value set by a prior call to SplFileObject::setCsvControl().

The escape character (at most one single-byte character). By default \ or the value set by a prior call to SplFileObject::setCsvControl(). An empty string ("") disables the proprietary escape mechanism.

Note: Usually an enclosure character is escaped inside a field by doubling it; however, the escape character can be used as an alternative. So for the default parameter values "" and \" have the same meaning. Other than allowing to escape the enclosure character the escape character has no special meaning; it isn't even meant to escape itself.

As of PHP 8.4.0, depending on the default value of escape is deprecated. It needs to be provided explicitly either positionally or by the use of Named Arguments, or by a call to SplFileObject::setCsvControl().

The optional eol parameter sets a custom End of Line sequence.

When escape is set to anything other than an empty string ("") it can result in CSV that is not compliant with » RFC 4180 or unable to survive a roundtrip through the PHP CSV functions. The default for escape is "\\" so it is recommended to set it to the empty string explicitly. The default value will change in a future version of PHP, no earlier than PHP 9.0.

Note:

If an enclosure character is contained in a field, it will be escaped by doubling it, unless it is immediately preceded by an escape.

### Return Values

Returns the length of the written string or false on failure.

### Errors/Exceptions

Throws a ValueError if separator or enclosure is not one byte long.

Throws a ValueError if escape is not one byte long or the empty string.

### Changelog

### Examples

Example #1 SplFileObject::fputcsv() example

```
<?php

$list = array (
    array('aaa', 'bbb', 'ccc', 'dddd'),
    array('123', '456', '789'),
    array('"aaa"', '"bbb"')
);

$file = new SplFileObject('file.csv', 'w');

foreach ($list as $fields) {
    $file->fputcsv($fields);
}

?>
```

The above example will write the following to file.csv:

```
aaa,bbb,ccc,dddd
123,456,789
"""aaa""","""bbb"""
```

### See Also

- SplFileObject::fgetcsv() - Gets line from file and parse as CSV fields
- SplFileObject::setCsvControl() - Set the delimiter, enclosure and escape character for CSV
- SplFileObject::getCsvControl() - Get the delimiter, enclosure and escape character for CSV
- fputcsv() - Format line as CSV and write to file pointer
- fgetcsv() - Gets line from file pointer and parse for CSV fields
- str_getcsv() - Parse a CSV string into an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fputcsv.php
