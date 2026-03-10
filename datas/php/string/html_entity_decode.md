# html_entity_decode

Source: https://devdocs.io/php/function.html-entity-decode

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

html_entity_decode — Convert HTML entities to their corresponding characters

### Description

```
html_entity_decode(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, ?string $encoding = null): string
```

html_entity_decode() is the opposite of htmlentities() in that it converts HTML entities in the string to their corresponding characters.

More precisely, this function decodes all the entities (including all numeric entities) that a) are necessarily valid for the chosen document type — i.e., for XML, this function does not decode named entities that might be defined in some DTD — and b) whose character or characters are in the coded character set associated with the chosen encoding and are permitted in the chosen document type. All other entities are left as is.

### Parameters

The input string.

A bitmask of one or more of the following flags, which specify how to handle quotes and which document type to use. The default is ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401.

An optional argument defining the encoding used when converting characters.

If omitted, encoding defaults to the value of the default_charset configuration option.

Although this argument is technically optional, you are highly encouraged to specify the correct value for your code if the default_charset configuration option may be set incorrectly for the given input.

The following character sets are supported:

Note: Any other character sets are not recognized. The default encoding will be used instead and a warning will be emitted.

### Return Values

Returns the decoded string.

### Changelog

### Examples

Example #1 Decoding HTML entities

```
<?php
$orig = "I'll \"walk\" the <b>dog</b> now";

$a = htmlentities($orig);

$b = html_entity_decode($a);

echo $a, PHP_EOL; // I'll &quot;walk&quot; the &lt;b&gt;dog&lt;/b&gt; now

echo $b, PHP_EOL; // I'll "walk" the <b>dog</b> now
?>
```

### Notes

Note:

You might wonder why trim(html_entity_decode('&nbsp;')); doesn't reduce the string to an empty string, that's because the '&nbsp;' entity is not ASCII code 32 (which is stripped by trim()) but ASCII code 160 (0xa0) in the default ISO 8859-1 encoding.

### See Also

- htmlentities() - Convert all applicable characters to HTML entities
- htmlspecialchars() - Convert special characters to HTML entities
- get_html_translation_table() - Returns the translation table used by htmlspecialchars and htmlentities
- urldecode() - Decodes URL-encoded string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.php-entity-decode.html
