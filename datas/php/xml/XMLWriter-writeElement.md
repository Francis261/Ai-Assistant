# XMLWriter::writeElement

Source: https://devdocs.io/php/xmlwriter.writeelement

# xmlwriter_write_element

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeElement -- xmlwriter_write_element — Write full element tag

### Description

Object-oriented style

```
public XMLWriter::writeElement(string $name, ?string $content = null): bool
```

Procedural style

```
xmlwriter_write_element(XMLWriter $writer, string $name, ?string $content = null): bool
```

Writes a full element tag.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The element name.

The element contents.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startElement() - Create start element tag
- XMLWriter::endElement() - End current element
- XMLWriter::writeElementNs() - Write full namespaced element tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writeelement.php
