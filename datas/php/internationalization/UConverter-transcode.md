# UConverter::transcode

Source: https://devdocs.io/php/uconverter.transcode

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

UConverter::transcode — Convert a string from one character encoding to another

### Description

```
public static UConverter::transcode(
 string $str,
 string $toEncoding,
 string $fromEncoding,
 ?array $options = null
): string|false
```

Converts str from fromEncoding to toEncoding.

### Parameters

The string to be converted.

The desired encoding of the result.

The current encoding used to interpret str.

An optional array, which may contain the following keys:

- 'to_subst' - the substitution character to use in place of any character of str which cannot be encoded in toEncoding. If specified, it must represent a single character in the target encoding.

### Return Values

Returns the converted string or false on failure.

### Examples

Example #1 Converting from UTF-8 to UTF-16 and back

```
<?php
$utf8_string = "\x5A\x6F\xC3\xAB"; // 'Zoë' in UTF-8
$utf16_string = UConverter::transcode($utf8_string, 'UTF-16BE', 'UTF-8');
echo bin2hex($utf16_string), "\n";

$new_utf8_string = UConverter::transcode($utf16_string, 'UTF-8', 'UTF-16BE');
echo bin2hex($new_utf8_string), "\n";
?>
```

The above example will output:

```
005a006f00eb
5a6fc3ab
```

Example #2 Invalid characters in input

If the input string contains a sequence of bytes which is not valid in the encoding specified by fromEncoding, they are replaced by Unicode code point U+FFFD (Replacement Character) before converting to toEncoding.

```
<?php
$invalid_utf8_string = "\xC3"; // incomplete multi-byte UTF-8 sequence
$utf16_string = UConverter::transcode($invalid_utf8_string, 'UTF-16BE', 'UTF-8');
echo bin2hex($utf16_string), "\n";
?>
```

The above example will output:

```
fffd
```

Example #3 Characters which cannot be encoded

If the input string contains characters which cannot be represented in toEncoding, they are replaced with a single character. The default character to use depends on the encoding, and can be controlled using the 'to_subst' option.

```
<?php
$utf8_string = "\xE2\x82\xAC"; // € (Euro Sign) does not exist in ISO 8859-1

// Default replacement in ISO 8859-1 is "\x1A" (Substitute)
$iso8859_1_string = UConverter::transcode($utf8_string, 'ISO-8859-1', 'UTF-8');
echo bin2hex($iso8859_1_string), "\n";

// Specify a replacement of '?' ("\x3F") instead
$iso8859_1_string = UConverter::transcode(
    $utf8_string, 'ISO-8859-1', 'UTF-8', ['to_subst' => '?']
);
echo bin2hex($iso8859_1_string), "\n";

// Since ISO 8859-1 cannot map U+FFFD, invalid input is also replaced by to_subst
$invalid_utf8_string = "\xC3"; // incomplete multi-byte UTF-8 sequence
$iso8859_1_string = UConverter::transcode(
    $invalid_utf8_string, 'ISO-8859-1', 'UTF-8', ['to_subst' => '?']
);
echo bin2hex($iso8859_1_string), "\n";
?>
```

The above example will output:

```
1a
3f
3f
```

### See Also

- mb_convert_encoding() - Convert a string from one character encoding to another
- iconv() - Convert a string from one character encoding to another

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/uconverter.transcode.php
