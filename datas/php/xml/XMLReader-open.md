# XMLReader::open

Source: https://devdocs.io/php/xmlreader.open

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::open — Set the URI containing the XML to parse

### Description

```
public static XMLReader::open(string $uri, ?string $encoding = null, int $flags = 0): XMLReader
```

```
public XMLReader::open(string $uri, ?string $encoding = null, int $flags = 0): bool
```

Set the URI containing the XML document to be parsed.

### Parameters

URI pointing to the document.

The document encoding or null.

A bitmask of the LIBXML_* constants.

### Return Values

Returns true on success or false on failure. If called statically, returns an XMLReader or false on failure.

### Errors/Exceptions

- Passing an invalid encoding will throw a ValueError.
- This method may be called statically, but prior to PHP 8.0.0, will issue an E_DEPRECATED error in this case.

### Changelog

### See Also

- XMLReader::XML() - Set the data containing the XML to parse
- XMLReader::close() - Close the XMLReader input

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.open.php
