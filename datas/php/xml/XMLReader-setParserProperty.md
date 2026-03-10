# XMLReader::setParserProperty

Source: https://devdocs.io/php/xmlreader.setparserproperty

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::setParserProperty — Set parser options

### Description

```
public XMLReader::setParserProperty(int $property, bool $value): bool
```

Set parser options. The options must be set after XMLReader::open() or XMLReader::XML() are called and before the first XMLReader::read() call.

### Parameters

One of the parser option constants.

If set to true the option will be enabled otherwise will be disabled.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.setparserproperty.php
