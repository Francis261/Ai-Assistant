# XMLWriter::toStream

Source: https://devdocs.io/php/xmlwriter.tostream

(PHP 8 >= 8.4.0)

XMLWriter::toStream — Create new XMLWriter using a stream for output

### Description

```
public static XMLWriter::toStream(resource $stream): static
```

Creates a new XMLWriter using a stream for output.

### Parameters

### Return Values

Returns an XMLWriter.

### Errors/Exceptions

- Passing a resource that is not a stream to stream will throw a TypeError.

### See Also

- XMLWriter::toMemory() - Create new XMLWriter using memory for string output
- XMLWriter::toUri() - Create new XMLWriter using a URI for output

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.tostream.php
