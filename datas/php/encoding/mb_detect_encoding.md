# mb_detect_encoding

Source: https://devdocs.io/php/function.mb-detect-encoding

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_detect_encoding — Detect character encoding

### Description

```
mb_detect_encoding(string $string, array|string|null $encodings = null, bool $strict = false): string|false
```

Detects the most likely character encoding for string string from a list of candidates.

As of PHP 8.1 this function uses heuristics to detect which of the valid text encodings in the specified list is most likely to be correct and may not be in order of encodings provided.

Automatic detection of the intended character encoding can never be entirely reliable; without some additional information, it is similar to decoding an encrypted string without the key. It is always preferable to use an indication of character encoding stored or transmitted with the data, such as a "Content-Type" HTTP header.

This function is most useful with multibyte encodings, where not all sequences of bytes form a valid string. If the input string contains such a sequence, that encoding will be rejected.

# The result is not accurate

The name of this function is misleading, it performs "guessing" rather than "detection".

The guesses are far from accurate, and therefore you cannot use this function to accurately detect the correct character encoding.

### Parameters

The string being inspected.

A list of character encodings to try. The list may be specified as an array of strings, or a single string separated by commas.

If encodings is omitted or null, the current detect_order (set with the mbstring.detect_order configuration option, or mb_detect_order() function) will be used.

Controls the behaviour when string is not valid in any of the listed encodings. If strict is set to false, the closest matching encoding will be returned; if strict is set to true, false will be returned.

The default value for strict can be set with the mbstring.strict_detection configuration option.

### Return Values

The detected character encoding, or false if the string is not valid in any of the listed encodings.

### Changelog

### Examples

Example #1 mb_detect_encoding() example

```
<?php

$str = "\x95\xB6\x8E\x9A\x83\x52\x81\x5B\x83\x68";

// Detect character encoding with current detect_order
var_dump(mb_detect_encoding($str));

// "auto" is expanded according to mbstring.language
var_dump(mb_detect_encoding($str, "auto"));

// Specify "encodings" parameter by list separated by comma
var_dump(mb_detect_encoding($str, "JIS, eucjp-win, sjis-win"));

// Use array to specify "encodings" parameter
$encodings = [
  "ASCII",
  "JIS",
  "EUC-JP"
];
var_dump(mb_detect_encoding($str, $encodings));
?>
```

The above example will output:

```
string(5) "ASCII"
string(5) "ASCII"
string(8) "SJIS-win"
string(5) "ASCII"
```

Example #2 Effect of strict parameter

```
<?php
// 'áéóú' encoded in ISO-8859-1
$str = "\xE1\xE9\xF3\xFA";

// The string is not valid ASCII or UTF-8, but UTF-8 is considered a closer match
var_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8'], false));
var_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8'], true));

// If a valid encoding is found, the strict parameter does not change the result
var_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8', 'ISO-8859-1'], false));
var_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8', 'ISO-8859-1'], true));
?>
```

The above example will output:

```
string(5) "UTF-8"
bool(false)
string(10) "ISO-8859-1"
string(10) "ISO-8859-1"
```

In some cases, the same sequence of bytes may form a valid string in multiple character encodings, and it is impossible to know which interpretation was intended. For instance, among many others, the byte sequence "\xC4\xA2" could be:

- "Ä¢" (U+00C4 LATIN CAPITAL LETTER A WITH DIAERESIS followed by U+00A2 CENT SIGN) encoded in any of ISO-8859-1, ISO-8859-15, or Windows-1252
- "ФЂ" (U+0424 CYRILLIC CAPITAL LETTER EF followed by U+0402 CYRILLIC CAPITAL LETTER DJE) encoded in ISO-8859-5
- "Ģ" (U+0122 LATIN CAPITAL LETTER G WITH CEDILLA) encoded in UTF-8

Example #3 Effect of order when multiple encodings match

```
<?php
$str = "\xC4\xA2";

// The string is valid in all three encodings, but the first one listed may not always be the one returned
var_dump(mb_detect_encoding($str, ['UTF-8']));
var_dump(mb_detect_encoding($str, ['UTF-8', 'ISO-8859-1', 'ISO-8859-5'])); // as of php8.1 this returns ISO-8859-1 instead of UTF-8
var_dump(mb_detect_encoding($str, ['ISO-8859-1', 'ISO-8859-5', 'UTF-8']));
var_dump(mb_detect_encoding($str, ['ISO-8859-5', 'UTF-8', 'ISO-8859-1']));
?>
```

The above example will output:

```
string(5) "UTF-8"
string(10) "ISO-8859-1"
string(10) "ISO-8859-1"
string(10) "ISO-8859-5"
```

### See Also

- mb_detect_order() - Set/Get character encoding detection order

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-detect-encoding.php
