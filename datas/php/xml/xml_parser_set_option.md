# xml_parser_set_option

Source: https://devdocs.io/php/function.xml-parser-set-option

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_parser_set_option — Set options in an XML parser

### Description

```
xml_parser_set_option(XMLParser $parser, int $option, string|int|bool $value): bool
```

Sets an option in an XML parser.

### Parameters

A reference to the XML parser to set an option in.

Which option to set. See below.

The following options are available:

The option's new value.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Throws a ValueError when an invalid value is passed to option.

Prior to PHP 8.0.0, the function returned false when passing an invalid value to option generated a E_WARNING as well as making the function return false.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-parser-set-option.php
