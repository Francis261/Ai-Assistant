# XMLWriter::endAttribute

Source: https://devdocs.io/php/xmlwriter.endattribute

# xmlwriter_end_attribute

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::endAttribute -- xmlwriter_end_attribute — End attribute

### Description

Object-oriented style

```
public XMLWriter::endAttribute(): bool
```

Procedural style

```
xmlwriter_end_attribute(XMLWriter $writer): bool
```

Ends the current attribute.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startAttribute() - Create start attribute
- XMLWriter::startAttributeNs() - Create start namespaced attribute
- XMLWriter::writeAttribute() - Write full attribute
- XMLWriter::writeAttributeNs() - Write full namespaced attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.endattribute.php
