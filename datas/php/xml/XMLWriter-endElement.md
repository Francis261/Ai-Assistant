# XMLWriter::endElement

Source: https://devdocs.io/php/xmlwriter.endelement

# xmlwriter_end_element

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::endElement -- xmlwriter_end_element — End current element

### Description

Object-oriented style

```
public XMLWriter::endElement(): bool
```

Procedural style

```
xmlwriter_end_element(XMLWriter $writer): bool
```

Ends the current element.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startElement() - Create start element tag
- XMLWriter::writeElement() - Write full element tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.endelement.php
