# iconv

Source: https://devdocs.io/php/function.iconv

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

iconv — Convert a string from one character encoding to another

### Description

```
iconv(string $from_encoding, string $to_encoding, string $string): string|false
```

Converts string from from_encoding to to_encoding.

### Parameters

The current encoding used to interpret string.

The desired encoding of the result.

If the string //TRANSLIT is appended to to_encoding, then transliteration is activated. This means that when a character can't be represented in the target charset, it may be approximated through one or several similarly looking characters. If the string //IGNORE is appended, characters that cannot be represented in the target charset are silently discarded. Otherwise, E_NOTICE is generated and the function will return false.

If and how //TRANSLIT works exactly depends on the system's iconv() implementation (cf. ICONV_IMPL). Some implementations are known to ignore //TRANSLIT, so the conversion is likely to fail for characters which are illegal for the to_encoding.

The string to be converted.

### Return Values

Returns the converted string, or false on failure.

### Examples

Example #1 iconv() example

```
<?php
$text = "This is the Euro symbol '€'.";

echo 'Original : ', $text, PHP_EOL;
echo 'TRANSLIT : ', iconv("UTF-8", "ISO-8859-1//TRANSLIT", $text), PHP_EOL;
echo 'IGNORE   : ', iconv("UTF-8", "ISO-8859-1//IGNORE", $text), PHP_EOL;
echo 'Plain    : ', iconv("UTF-8", "ISO-8859-1", $text), PHP_EOL;

?>
```

The above example will output something similar to:

```
Original : This is the Euro symbol '€'.
TRANSLIT : This is the Euro symbol 'EUR'.
IGNORE   : This is the Euro symbol ''.
Plain    :
Notice: iconv(): Detected an illegal character in input string in .\iconv-example.php on line 7
```

### Notes

Note:

The character encodings and options available depend on the installed implementation of iconv. If the argument to from_encoding or to_encoding is not supported on the current system, false will be returned.

### See Also

- mb_convert_encoding() - Convert a string from one character encoding to another
- UConverter::transcode() - Convert a string from one character encoding to another

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iconv.php
