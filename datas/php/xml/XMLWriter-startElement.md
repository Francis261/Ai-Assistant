# XMLWriter::startElement

Source: https://devdocs.io/php/xmlwriter.startelement

# xmlwriter_start_element

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startElement -- xmlwriter_start_element — Create start element tag

### Description

Object-oriented style

```
public XMLWriter::startElement(string $name): bool
```

Procedural style

```
xmlwriter_start_element(XMLWriter $writer, string $name): bool
```

Starts an element.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The element name.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::endElement() - End current element
- XMLWriter::writeElement() - Write full element tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startelement.php
