# htmlspecialchars

Source: https://devdocs.io/php/function.htmlspecialchars

(PHP 4, PHP 5, PHP 7, PHP 8)

htmlspecialchars — Convert special characters to HTML entities

### Description

```
htmlspecialchars(
 string $string,
 int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401,
 ?string $encoding = null,
 bool $double_encode = true
): string
```

Certain characters have special significance in HTML, and should be represented by HTML entities if they are to preserve their meanings. This function returns a string with these conversions made. If you require all input substrings that have associated named entities to be translated, use htmlentities() instead.

If the input string passed to this function and the final document share the same character set, this function is sufficient to prepare input for inclusion in most contexts of an HTML document. If, however, the input can represent characters that are not coded in the final document character set and you wish to retain those characters (as numeric or named entities), both this function and htmlentities() (which only encodes substrings that have named entity equivalents) may be insufficient. You may have to use mb_encode_numericentity() instead.

### Parameters

The string being converted.

A bitmask of one or more of the following flags, which specify how to handle quotes, invalid code unit sequences and the used document type. The default is ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401.

An optional argument defining the encoding used when converting characters.

If omitted, encoding defaults to the value of the default_charset configuration option.

Although this argument is technically optional, you are highly encouraged to specify the correct value for your code if the default_charset configuration option may be set incorrectly for the given input.

For the purposes of this function, the encodings ISO-8859-1, ISO-8859-15, UTF-8, cp866, cp1251, cp1252, and KOI8-R are effectively equivalent, provided the string itself is valid for the encoding, as the characters affected by htmlspecialchars() occupy the same positions in all of these encodings.

The following character sets are supported:

Note: Any other character sets are not recognized. The default encoding will be used instead and a warning will be emitted.

When double_encode is turned off PHP will not encode existing html entities, the default is to convert everything.

### Return Values

The converted string.

If the input string contains an invalid code unit sequence within the given encoding an empty string will be returned, unless either the ENT_IGNORE or ENT_SUBSTITUTE flags are set.

### Changelog

### Examples

Example #1 htmlspecialchars() example

```
<?php
$new = htmlspecialchars("<a href='test'>Test</a>", ENT_QUOTES);
echo $new; // &lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;
?>
```

### Notes

Note:

Note that this function does not translate anything beyond what is listed above. For full entity translation, see htmlentities().

Note:

In case of an ambiguous flags value, the following rules apply:

- When neither of ENT_COMPAT, ENT_QUOTES, ENT_NOQUOTES is present, the default is ENT_NOQUOTES.
- When more than one of ENT_COMPAT, ENT_QUOTES, ENT_NOQUOTES is present, ENT_QUOTES takes the highest precedence, followed by ENT_COMPAT.
- When neither of ENT_HTML401, ENT_HTML5, ENT_XHTML, ENT_XML1 is present, the default is ENT_HTML401.
- When more than one of ENT_HTML401, ENT_HTML5, ENT_XHTML, ENT_XML1 is present, ENT_HTML5 takes the highest precedence, followed by ENT_XHTML, ENT_XML1 and ENT_HTML401.
- When more than one of ENT_DISALLOWED, ENT_IGNORE, ENT_SUBSTITUTE are present, ENT_IGNORE takes the highest precedence, followed by ENT_SUBSTITUTE.

### See Also

- get_html_translation_table() - Returns the translation table used by htmlspecialchars and htmlentities
- htmlspecialchars_decode() - Convert special HTML entities back to characters
- strip_tags() - Strip HTML and PHP tags from a string
- htmlentities() - Convert all applicable characters to HTML entities
- nl2br() - Inserts HTML line breaks before all newlines in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.phpspecialchars.html
