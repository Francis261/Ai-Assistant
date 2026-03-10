# htmlentities

Source: https://devdocs.io/php/function.htmlentities

(PHP 4, PHP 5, PHP 7, PHP 8)

htmlentities — Convert all applicable characters to HTML entities

### Description

```
htmlentities(
 string $string,
 int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401,
 ?string $encoding = null,
 bool $double_encode = true
): string
```

This function is identical to htmlspecialchars() in all ways, except with htmlentities(), all characters which have HTML character entity equivalents are translated into these entities. The get_html_translation_table() function can be used to return the translation table used dependent upon the provided flags constants.

If you want to decode instead (the reverse) you can use html_entity_decode().

### Parameters

The input string.

A bitmask of one or more of the following flags, which specify how to handle quotes, invalid code unit sequences and the used document type. The default is ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401.

An optional argument defining the encoding used when converting characters.

If omitted, encoding defaults to the value of the default_charset configuration option.

Although this argument is technically optional, you are highly encouraged to specify the correct value for your code if the default_charset configuration option may be set incorrectly for the given input.

The following character sets are supported:

Note: Any other character sets are not recognized. The default encoding will be used instead and a warning will be emitted.

When double_encode is turned off PHP will not encode existing html entities. The default is to convert everything.

### Return Values

Returns the encoded string.

If the input string contains an invalid code unit sequence within the given encoding an empty string will be returned, unless either the ENT_IGNORE or ENT_SUBSTITUTE flags are set.

### Changelog

### Examples

Example #1 A htmlentities() example

```
<?php
$str = "A 'quote' is <b>bold</b>";

echo htmlentities($str);
echo "\n\n";
echo htmlentities($str, ENT_COMPAT);
?>
```

The above example will output:

```
A &#039;quote&#039; is &lt;b&gt;bold&lt;/b&gt;

A 'quote' is &lt;b&gt;bold&lt;/b&gt
```

Example #2 Usage of ENT_IGNORE

```
<?php
$str = "\x8F!!!";

// Outputs an empty string
echo htmlentities($str, ENT_QUOTES, "UTF-8");

// Outputs "!!!"
echo htmlentities($str, ENT_QUOTES | ENT_IGNORE, "UTF-8");
?>
```

### See Also

- html_entity_decode() - Convert HTML entities to their corresponding characters
- get_html_translation_table() - Returns the translation table used by htmlspecialchars and htmlentities
- htmlspecialchars() - Convert special characters to HTML entities
- nl2br() - Inserts HTML line breaks before all newlines in a string
- urlencode() - URL-encodes string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.phpentities.html
