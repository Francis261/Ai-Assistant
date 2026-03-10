# fgetcsv

Source: https://devdocs.io/php/function.fgetcsv

(PHP 4, PHP 5, PHP 7, PHP 8)

fgetcsv — Gets line from file pointer and parse for CSV fields

### Description

```
fgetcsv(
 resource $stream,
 ?int $length = null,
 string $separator = ",",
 string $enclosure = "\"",
 string $escape = "\\"
): array|false
```

Similar to fgets() except that fgetcsv() parses the line it reads for fields in CSV format and returns an array containing the fields read.

Note: The locale settings are taken into account by this function. For example, data encoded in certain one-byte encodings may be parsed incorrectly if LC_CTYPE is en_US.UTF-8.

### Parameters

A valid file pointer to a file successfully opened by fopen(), popen(), or fsockopen().

Must be greater than the longest line (in characters) to be found in the CSV file (allowing for trailing line-end characters). Otherwise the line is split in chunks of length characters, unless the split would occur inside an enclosure.

Omitting this parameter (or setting it to 0, or null in PHP 8.0.0 or later) the maximum line length is not limited, which is slightly slower.

The separator parameter sets the field separator. It must be a single byte character.

The enclosure parameter sets the field enclosure character. It must be a single byte character.

The escape parameter sets the escape character. It must be a single byte character or the empty string. The empty string ("") disables the proprietary escape mechanism.

Note: Usually an enclosure character is escaped inside a field by doubling it; however, the escape character can be used as an alternative. So for the default parameter values "" and \" have the same meaning. Other than allowing to escape the enclosure character the escape character has no special meaning; it isn't even meant to escape itself.

As of PHP 8.4.0, depending on the default value of escape is deprecated. It needs to be provided explicitly either positionally or by the use of named arguments.

When escape is set to anything other than an empty string ("") it can result in CSV that is not compliant with » RFC 4180 or unable to survive a roundtrip through the PHP CSV functions. The default for escape is "\\" so it is recommended to set it to the empty string explicitly. The default value will change in a future version of PHP, no earlier than PHP 9.0.

### Return Values

Returns an indexed array containing the fields read on success, or false on failure.

Note:

A blank line in a CSV file will be returned as an array comprising a single null field, and will not be treated as an error.

Note: If PHP is not properly recognizing the line endings when reading files either on or created by a Macintosh computer, enabling the auto_detect_line_endings run-time configuration option may help resolve the problem.

### Errors/Exceptions

Throws a ValueError if separator or enclosure is not one byte long.

Throws a ValueError if escape is not one byte long or the empty string.

### Changelog

### Examples

Example #1 Read and print the entire contents of a CSV file

```
<?php
$row = 1;
if (($handle = fopen("test.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        echo "<p> $num fields in line $row: <br /></p>\n";
        $row++;
        for ($c=0; $c < $num; $c++) {
            echo $data[$c] . "<br />\n";
        }
    }
    fclose($handle);
}
?>
```

### See Also

- fputcsv() - Format line as CSV and write to file pointer
- str_getcsv() - Parse a CSV string into an array
- SplFileObject::fgetcsv() - Gets line from file and parse as CSV fields
- SplFileObject::fputcsv() - Write a field array as a CSV line
- SplFileObject::setCsvControl() - Set the delimiter, enclosure and escape character for CSV
- SplFileObject::getCsvControl() - Get the delimiter, enclosure and escape character for CSV
- explode() - Split a string by a string
- file() - Reads entire file into an array
- pack() - Pack data into binary string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fgetcsv.php
