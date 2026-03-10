# SplFileObject::getCsvControl

Source: https://devdocs.io/php/splfileobject.getcsvcontrol

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

SplFileObject::getCsvControl — Get the delimiter, enclosure and escape character for CSV

### Description

```
public SplFileObject::getCsvControl(): array
```

Gets the delimiter, enclosure and escape character used for parsing CSV fields.

### Parameters

This function has no parameters.

### Return Values

Returns an indexed array containing the delimiter, enclosure and escape character.

### Changelog

### Examples

Example #1 SplFileObject::getCsvControl() example

```
<?php
$file = new SplFileObject("data.txt");
print_r($file->getCsvControl());
?>
```

The above example will output something similar to:

```
Array
(
    [0] => ,
    [1] => "
    [2] => \
)
```

### See Also

- SplFileObject::setCsvControl() - Set the delimiter, enclosure and escape character for CSV
- SplFileObject::fgetcsv() - Gets line from file and parse as CSV fields
- SplFileObject::fputcsv() - Write a field array as a CSV line
- fputcsv() - Format line as CSV and write to file pointer
- fgetcsv() - Gets line from file pointer and parse for CSV fields
- str_getcsv() - Parse a CSV string into an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.getcsvcontrol.php
