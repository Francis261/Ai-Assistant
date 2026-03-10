# xml_parser_get_option

Source: https://devdocs.io/php/function.xml-parser-get-option

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_parser_get_option — Get options from an XML parser

### Description

```
xml_parser_get_option(XMLParser $parser, int $option): string|int|bool
```

Gets an option value from an XML parser.

### Parameters

### Return Values

Returns the option's value.

### Errors/Exceptions

Throws a ValueError when an invalid value is passed to option.

Prior to PHP 8.0.0, passing an invalid value to option generated a E_WARNING as well as making the function return false.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-parser-get-option.php
