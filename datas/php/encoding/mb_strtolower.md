# mb_strtolower

Source: https://devdocs.io/php/function.mb-strtolower

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

mb_strtolower — Make a string lowercase

### Description

```
mb_strtolower(string $string, ?string $encoding = null): string
```

Returns string with all alphabetic characters converted to lowercase.

### Parameters

The string being lowercased.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

string with all alphabetic characters converted to lowercase.

### Changelog

### Examples

Example #1 mb_strtolower() example

```
<?php
$str = "Mary Had A Little Lamb and She LOVED It So";
$str = mb_strtolower($str);
echo $str; // Prints mary had a little lamb and she loved it so
?>
```

Example #2 mb_strtolower() example with non-Latin UTF-8 text

```
<?php
$str = "Τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός";
$str = mb_strtolower($str, 'UTF-8');
echo $str; // Prints τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός
?>
```

### Notes

By contrast to strtolower(), 'alphabetic' is determined by the Unicode character properties. Thus the behaviour of this function is not affected by locale settings and it can convert any characters that have 'alphabetic' property, such as a-umlaut (ä).

For more information about the Unicode properties, please see » http://www.unicode.org/reports/tr21/.

### See Also

- mb_strtoupper() - Make a string uppercase
- mb_convert_case() - Perform case folding on a string
- strtolower() - Make a string lowercase

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-strtolower.php
