# tidy::repairFile

Source: https://devdocs.io/php/tidy.repairfile

# tidy_repair_file

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.7.0)

tidy::repairFile -- tidy_repair_file — Repair a file and return it as a string

### Description

Object-oriented style

```
public static tidy::repairFile(
 string $filename,
 array|string|null $config = null,
 ?string $encoding = null,
 bool $useIncludePath = false
): string|false
```

Procedural style

```
tidy_repair_file(
 string $filename,
 array|string|null $config = null,
 ?string $encoding = null,
 bool $useIncludePath = false
): string|false
```

Repairs the given file and returns it as a string.

### Parameters

The file to be repaired.

The config config can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves.

Check http://tidy.sourceforge.net/docs/quickref.html for an explanation about each option.

The encoding parameter sets the encoding for input/output documents. The possible values for encoding are: ascii, latin0, latin1, raw, utf8, iso2022, mac, win1252, ibm858, utf16, utf16le, utf16be, big5, and shiftjis.

Search for the file in the include_path.

### Return Values

Returns the repaired contents as a string, or false on failure.

### Changelog

### Examples

Example #1 tidy::repairFile() example

```
<?php
$file = 'file.html';

$tidy = new tidy();
$repaired = $tidy->repairfile($file);
rename($file, $file . '.bak');

file_put_contents($file, $repaired);
?>
```

### See Also

- tidy::parseFile() - Parse markup in file or URI
- tidy::parseString() - Parse a document stored in a string
- tidy::repairString() - Repair a string using an optionally provided configuration file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.repairfile.php
