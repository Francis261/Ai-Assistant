# xml_parser_create_ns

Source: https://devdocs.io/php/function.xml-parser-create-ns

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

xml_parser_create_ns — Create an XML parser with namespace support

### Description

```
xml_parser_create_ns(?string $encoding = null, string $separator = ":"): XMLParser
```

xml_parser_create_ns() creates a new XML parser with XML namespace support and returns a XMLParser instance to be used by the other XML functions.

### Parameters

The input encoding is automatically detected, so that the encoding parameter specifies only the output encoding. The default output charset is UTF-8. The supported encodings are ISO-8859-1, UTF-8 and US-ASCII.

With a namespace aware parser tag parameters passed to the various handler functions will consist of namespace and tag name separated by the string specified in separator.

### Return Values

Returns a new XMLParser instance.

### Changelog

### See Also

- xml_parser_create() - Create an XML parser

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-parser-create-ns.php
