# tidy::__construct

Source: https://devdocs.io/php/tidy.construct

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy::__construct — Constructs a new tidy object

### Description

Constructs a new tidy object.

### Parameters

If the filename parameter is given, this function will also read that file and initialize the object with the file, acting like tidy_parse_file().

The config config can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves.

For an explanation about each option, visit » http://api.html-tidy.org/#quick-reference.

The encoding parameter sets the encoding for input/output documents. The possible values for encoding are: ascii, latin0, latin1, raw, utf8, iso2022, mac, win1252, ibm858, utf16, utf16le, utf16be, big5, and shiftjis.

Search for the file in the include_path.

### Errors/Exceptions

Throws an exception when the constructor fails (e.g. failing to open a file).

### Changelog

### Examples

Example #1 tidy::__construct() example

```
<?php

$html = <<< HTML

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head><title>title</title></head>
<body>
<p>paragraph <bt />
text</p>
</body></html>

HTML;

$tidy = new tidy();
$tidy->ParseString($html);

$tidy->cleanRepair();

if ($tidy->errorBuffer) {
    echo "The following errors were detected:\n";
    echo $tidy->errorBuffer;
}

?>
```

The above example will output:

```
The following errors were detected:
line 8 column 14 - Error: <bt> is not recognized!
line 8 column 14 - Warning: discarding unexpected <bt>
```

### See Also

- tidy::parseFile() - Parse markup in file or URI
- tidy::parseString() - Parse a document stored in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.construct.php
