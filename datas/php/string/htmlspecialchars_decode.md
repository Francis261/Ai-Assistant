# htmlspecialchars_decode

Source: https://devdocs.io/php/function.htmlspecialchars-decode

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

htmlspecialchars_decode — Convert special HTML entities back to characters

### Description

```
htmlspecialchars_decode(string $string, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401): string
```

This function is the opposite of htmlspecialchars(). It converts special HTML entities back to characters.

The converted entities are: &amp;, &quot; (when ENT_NOQUOTES is not set), &#039; (when ENT_QUOTES is set), &lt; and &gt;.

### Parameters

The string to decode.

A bitmask of one or more of the following flags, which specify how to handle quotes and which document type to use. The default is ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401.

### Return Values

Returns the decoded string.

### Changelog

### Examples

Example #1 A htmlspecialchars_decode() example

```
<?php
$str = "<p>this -&gt; &quot;</p>\n";

echo htmlspecialchars_decode($str);

// note that here the quotes aren't converted
echo htmlspecialchars_decode($str, ENT_NOQUOTES);
?>
```

The above example will output:

```
<p>this -> "</p>
<p>this -> &quot;</p>
```

### See Also

- htmlspecialchars() - Convert special characters to HTML entities
- html_entity_decode() - Convert HTML entities to their corresponding characters
- get_html_translation_table() - Returns the translation table used by htmlspecialchars and htmlentities

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.phpspecialchars-decode.html
