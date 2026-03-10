# ltrim

Source: https://devdocs.io/php/function.ltrim

(PHP 4, PHP 5, PHP 7, PHP 8)

ltrim — Strip whitespace (or other characters) from the beginning of a string

### Description

```
ltrim(string $string, string $characters = " \n\r\t\v\x00"): string
```

Strip whitespace (or other characters) from the beginning of a string.

Without the second parameter, mb_ltrim() will strip these characters:

- " ": ASCII SP character 0x20, an ordinary space.
- "\t": ASCII HT character 0x09, a tab.
- "\n": ASCII LF character 0x0A, a new line (line feed).
- "\r": ASCII CR character 0x0D, a carriage return.
- "\0": ASCII NUL character 0x00, the NUL-byte.
- "\v": ASCII VT character 0x0B, a vertical tab.

### Parameters

### Return Values

This function returns a string with whitespace stripped from the beginning of string.

### Examples

Example #1 Usage example of ltrim()

```
<?php

$text = "\t\tThese are a few words :) ...  ";
$binary = "\x09Example string\x0A";
$hello  = "Hello World";
var_dump($text, $binary, $hello);

print "\n";

$trimmed = ltrim($text);
var_dump($trimmed);

$trimmed = ltrim($text, " \t.");
var_dump($trimmed);

$trimmed = ltrim($hello, "Hdle");
var_dump($trimmed);

// trim the ASCII control characters at the beginning of $binary
// (from 0 to 31 inclusive)
$clean = ltrim($binary, "\x00..\x1F");
var_dump($clean);

?>
```

The above example will output:

```
string(32) "        These are a few words :) ...  "
string(16) "    Example string
"
string(11) "Hello World"

string(30) "These are a few words :) ...  "
string(30) "These are a few words :) ...  "
string(7) "o World"
string(15) "Example string
"
```

### See Also

- trim() - Strip whitespace (or other characters) from the beginning and end of a string
- rtrim() - Strip whitespace (or other characters) from the end of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ltrim.php
