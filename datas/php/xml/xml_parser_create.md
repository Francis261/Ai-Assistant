# xml_parser_create

Source: https://devdocs.io/php/function.xml-parser-create

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_parser_create — Create an XML parser

### Description

```
xml_parser_create(?string $encoding = null): XMLParser
```

xml_parser_create() creates a new XML parser and returns a XMLParser instance to be used by the other XML functions.

### Parameters

The input encoding is automatically detected, so that the encoding parameter specifies only the output encoding. If empty string is passed, the parser attempts to identify which encoding the document is encoded in by looking at the heading 3 or 4 bytes. The default output charset is UTF-8. The supported encodings are ISO-8859-1, UTF-8 and US-ASCII.

### Return Values

Returns a new XMLParser instance.

### Changelog

### See Also

- xml_parser_create_ns() - Create an XML parser with namespace support

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-parser-create.php
