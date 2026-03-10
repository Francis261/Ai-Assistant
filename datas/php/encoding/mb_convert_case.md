# mb_convert_case

Source: https://devdocs.io/php/function.mb-convert-case

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

mb_convert_case — Perform case folding on a string

### Description

```
mb_convert_case(string $string, int $mode, ?string $encoding = null): string
```

Performs case folding on a string, converted in the way specified by mode.

### Parameters

The string being converted.

The mode of the conversion. It can be one of MB_CASE_UPPER, MB_CASE_LOWER, MB_CASE_TITLE, MB_CASE_FOLD, MB_CASE_UPPER_SIMPLE, MB_CASE_LOWER_SIMPLE, MB_CASE_TITLE_SIMPLE, MB_CASE_FOLD_SIMPLE.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

A case folded version of string converted in the way specified by mode.

### Changelog

### Examples

Example #1 mb_convert_case() example

```
<?php
$str = "mary had a Little lamb and she loved it so";
$str = mb_convert_case($str, MB_CASE_UPPER, "UTF-8");
echo $str, PHP_EOL;
$str = mb_convert_case($str, MB_CASE_TITLE, "UTF-8");
echo $str, PHP_EOL;
?>
```

Example #2 mb_convert_case() example with non-Latin UTF-8 text

```
<?php
$str = "Τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός";
$str = mb_convert_case($str, MB_CASE_UPPER, "UTF-8");
echo $str, PHP_EOL;
$str = mb_convert_case($str, MB_CASE_TITLE, "UTF-8");
echo $str, PHP_EOL;
?>
```

### Notes

By contrast to the standard case folding functions such as strtolower() and strtoupper(), case folding is performed on the basis of the Unicode character properties. Thus the behaviour of this function is not affected by locale settings and it can convert any characters that have 'alphabetic' property, such a-umlaut (ä).

For more information about the Unicode properties, please see » http://www.unicode.org/reports/tr21/.

### See Also

- mb_strtolower() - Make a string lowercase
- mb_strtoupper() - Make a string uppercase
- strtolower() - Make a string lowercase
- strtoupper() - Make a string uppercase
- ucfirst() - Make a string's first character uppercase
- ucwords() - Uppercase the first character of each word in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-convert-case.php
