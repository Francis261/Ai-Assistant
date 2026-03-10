# tidy::repairString

Source: https://devdocs.io/php/tidy.repairstring

# tidy_repair_string

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.7.0)

tidy::repairString -- tidy_repair_string — Repair a string using an optionally provided configuration file

### Description

Object-oriented style

```
public static tidy::repairString(string $string, array|string|null $config = null, ?string $encoding = null): string|false
```

Procedural style

```
tidy_repair_string(string $string, array|string|null $config = null, ?string $encoding = null): string|false
```

Repairs the given string.

### Parameters

The data to be repaired.

The config config can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves.

Check » http://api.html-tidy.org/#quick-reference for an explanation about each option.

The encoding parameter sets the encoding for input/output documents. The possible values for encoding are: ascii, latin0, latin1, raw, utf8, iso2022, mac, win1252, ibm858, utf16, utf16le, utf16be, big5, and shiftjis.

### Return Values

Returns the repaired string, or false on failure.

### Changelog

### Examples

Example #1 tidy::repairString() example

```
<?php
ob_start();
?>

<html>
  <head>
    <title>test</title>
  </head>
  <body>
    <p>error</i>
  </body>
</html>

<?php

$buffer = ob_get_clean();
$tidy = new tidy();
$clean = $tidy->repairString($buffer);

echo $clean;
?>
```

The above example will output:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html>
<head>
<title>test</title>
</head>
<body>
<p>error</p>
</body>
</html>
```

### See Also

- tidy::parseFile() - Parse markup in file or URI
- tidy::parseString() - Parse a document stored in a string
- tidy::repairFile() - Repair a file and return it as a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.repairstring.php
