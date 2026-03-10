# tidy::parseFile

Source: https://devdocs.io/php/tidy.parsefile

# tidy_parse_file

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy::parseFile -- tidy_parse_file — Parse markup in file or URI

### Description

Object-oriented style

```
public tidy::parseFile(
 string $filename,
 array|string|null $config = null,
 ?string $encoding = null,
 bool $useIncludePath = false
): bool
```

Procedural style

```
tidy_parse_file(
 string $filename,
 array|string|null $config = null,
 ?string $encoding = null,
 bool $useIncludePath = false
): tidy|false
```

Parses the given file.

### Parameters

If the filename parameter is given, this function will also read that file and initialize the object with the file, acting like tidy_parse_file().

The config config can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves.

For an explanation about each option, see » http://api.html-tidy.org/#quick-reference.

The encoding parameter sets the encoding for input/output documents. The possible values for encoding are: ascii, latin0, latin1, raw, utf8, iso2022, mac, win1252, ibm858, utf16, utf16le, utf16be, big5, and shiftjis.

Search for the file in the include_path.

### Return Values

tidy::parseFile() returns true on success. tidy_parse_file() returns a new tidy instance on success. Both, the method and the function return false on failure.

### Changelog

### Examples

Example #1 tidy::parseFile() example

```
<?php
$tidy = new tidy();
$tidy->parseFile('file.html');

$tidy->cleanRepair();

if(!empty($tidy->errorBuffer)) {
    echo "The following errors or warnings occurred:\n";
    echo $tidy->errorBuffer;
}
?>
```

### See Also

- tidy::parseString() - Parse a document stored in a string
- tidy::repairFile() - Repair a file and return it as a string
- tidy::repairString() - Repair a string using an optionally provided configuration file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.parsefile.php
