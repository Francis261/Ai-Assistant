# xml_parser_free

Source: https://devdocs.io/php/function.xml-parser-free

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_parser_free — Free an XML parser

This function has been DEPRECATED as of PHP 8.5.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 xml_parser_free(XMLParser $parser): bool
```

Note:

This function has no effect. Prior to PHP 8.0.0, this function was used to close the resource.

Frees the given XML parser.

In addition to calling xml_parser_free() when the parsing is finished, prior to PHP 8.0.0, it was necessary to also explicitly unset the reference to parser to avoid memory leaks, if the parser resource is referenced from an object, and this object references that parser resource.

### Parameters

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-parser-free.php
