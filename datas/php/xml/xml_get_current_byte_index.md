# xml_get_current_byte_index

Source: https://devdocs.io/php/function.xml-get-current-byte-index

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_get_current_byte_index — Get current byte index for an XML parser

### Description

```
xml_get_current_byte_index(XMLParser $parser): int
```

Gets the current byte index of the given XML parser.

### Parameters

A reference to the XML parser to get byte index from.

### Return Values

Returns which byte index the parser is currently at in its data buffer (starting at 0).

### Changelog

### Notes

This function returns byte index according to UTF-8 encoded text disregarding if input is in another encoding.

### See Also

- xml_get_current_column_number() - Get current column number for an XML parser
- xml_get_current_line_number() - Get current line number for an XML parser

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-get-current-byte-index.php
