# xml_get_current_column_number

Source: https://devdocs.io/php/function.xml-get-current-column-number

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_get_current_column_number — Get current column number for an XML parser

### Description

```
xml_get_current_column_number(XMLParser $parser): int
```

Gets the current column number of the given XML parser.

### Parameters

A reference to the XML parser to get column number from.

### Return Values

Returns which column on the current line (as given by xml_get_current_line_number()) the parser is currently at.

### Changelog

### See Also

- xml_get_current_byte_index() - Get current byte index for an XML parser
- xml_get_current_line_number() - Get current line number for an XML parser

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-get-current-column-number.php
