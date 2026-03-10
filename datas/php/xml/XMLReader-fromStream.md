# XMLReader::fromStream

Source: https://devdocs.io/php/xmlreader.fromstream

(PHP 8 >= 8.4.0)

XMLReader::fromStream — Creates an XMLReader from a stream to read from

### Description

```
public static XMLReader::fromStream(
 resource $stream,
 ?string $encoding = null,
 int $flags = 0,
 ?string $documentUri = null
): static
```

Creates an XMLReader from a stream to read from.

### Parameters

### Return Values

Returns an XMLReader.

### Errors/Exceptions

- Passing an invalid encoding will throw a ValueError.
- Passing a resource that is not a stream to stream will throw a TypeError.

### See Also

- XMLReader::fromString() - Creates an XMLReader from an XML string
- XMLReader::fromUri() - Creates an XMLReader from a URI to read from

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.fromstream.php
