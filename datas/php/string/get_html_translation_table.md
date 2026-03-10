# get_html_translation_table

Source: https://devdocs.io/php/function.get-html-translation-table

(PHP 4, PHP 5, PHP 7, PHP 8)

get_html_translation_table — Returns the translation table used by htmlspecialchars() and htmlentities()

### Description

```
get_html_translation_table(int $table = HTML_SPECIALCHARS, int $flags = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401, string $encoding = "UTF-8"): array
```

get_html_translation_table() will return the translation table that is used internally for htmlspecialchars() and htmlentities().

Note:

Special characters can be encoded in several ways. E.g. " can be encoded as &quot;, &#34; or &#x22. get_html_translation_table() returns only the form used by htmlspecialchars() and htmlentities().

### Parameters

Which table to return. Either HTML_ENTITIES or HTML_SPECIALCHARS.

A bitmask of one or more of the following flags, which specify which quotes the table will contain as well as which document type the table is for. The default is ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401.

Encoding to use. If omitted, the default value for this argument is UTF-8.

The following character sets are supported:

Note: Any other character sets are not recognized. The default encoding will be used instead and a warning will be emitted.

### Return Values

Returns the translation table as an array, with the original characters as keys and entities as values.

### Changelog

### Examples

Example #1 Translation Table Example

```
<?php
var_dump(get_html_translation_table(HTML_ENTITIES, ENT_QUOTES | ENT_HTML5));
?>
```

The above example will output something similar to:

```
array(1510) {
  ["
"]=>
  string(9) "&NewLine;"
  ["!"]=>
  string(6) "&excl;"
  ["""]=>
  string(6) "&quot;"
  ["#"]=>
  string(5) "&num;"
  ["$"]=>
  string(8) "&dollar;"
  ["%"]=>
  string(8) "&percnt;"
  ["&"]=>
  string(5) "&amp;"
  ["'"]=>
  string(6) "&apos;"
  // ...
}
```

### See Also

- htmlspecialchars() - Convert special characters to HTML entities
- htmlentities() - Convert all applicable characters to HTML entities
- html_entity_decode() - Convert HTML entities to their corresponding characters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-html-translation-table.php
