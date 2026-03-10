# XMLReader::fromUri

Source: https://devdocs.io/php/xmlreader.fromuri

(PHP 8 >= 8.4.0)

XMLReader::fromUri — Creates an XMLReader from a URI to read from

### Description

```
public static XMLReader::fromUri(string $uri, ?string $encoding = null, int $flags = 0): static
```

Creates an XMLReader from a URI to read from.

### Parameters

URI pointing to the document.

The document encoding or null.

A bitmask of the LIBXML_* constants.

### Return Values

Returns an XMLReader.

### Errors/Exceptions

- Passing an invalid encoding will throw a ValueError.

### See Also

- XMLReader::fromStream() - Creates an XMLReader from a stream to read from
- XMLReader::fromString() - Creates an XMLReader from an XML string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.fromuri.php
