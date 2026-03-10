# tidy::parseString

Source: https://devdocs.io/php/tidy.parsestring

# tidy_parse_string

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy::parseString -- tidy_parse_string — Parse a document stored in a string

### Description

Object-oriented style

```
public tidy::parseString(string $string, array|string|null $config = null, ?string $encoding = null): bool
```

Procedural style

```
tidy_parse_string(string $string, array|string|null $config = null, ?string $encoding = null): tidy|false
```

Parses a document stored in a string.

### Parameters

The data to be parsed.

The config config can be passed either as an array or as a string. If a string is passed, it is interpreted as the name of the configuration file, otherwise, it is interpreted as the options themselves.

For an explanation about each option, visit » http://api.html-tidy.org/#quick-reference.

The encoding parameter sets the encoding for input/output documents. The possible values for encoding are: ascii, latin0, latin1, raw, utf8, iso2022, mac, win1252, ibm858, utf16, utf16le, utf16be, big5, and shiftjis.

### Return Values

tidy::parseString() returns true on success. tidy_parse_string() returns a new tidy instance on success. Both, the method and the function return false on failure.

### Changelog

### Examples

Example #1 tidy::parseString() example

```
<?php
ob_start();
?>

<html>
  <head>
   <title>test</title>
  </head>
  <body>
   <p>error<br>another line</i>
  </body>
</html>

<?php

$buffer = ob_get_clean();
$config = array('indent' => TRUE,
                'output-xhtml' => TRUE,
                'wrap' => 200);

$tidy = tidy_parse_string($buffer, $config, 'UTF8');

$tidy->cleanRepair();
echo $tidy;
?>
```

The above example will output:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>
      test
    </title>
  </head>
  <body>
    <p>
      error<br />
      another line
    </p>
  </body>
</html>
```

### See Also

- tidy::parseFile() - Parse markup in file or URI
- tidy::repairFile() - Repair a file and return it as a string
- tidy::repairString() - Repair a string using an optionally provided configuration file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.parsestring.php
