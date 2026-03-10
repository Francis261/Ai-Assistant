# XMLWriter::writeDtdElement

Source: https://devdocs.io/php/xmlwriter.writedtdelement

# xmlwriter_write_dtd_element

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeDtdElement -- xmlwriter_write_dtd_element — Write full DTD element tag

### Description

Object-oriented style

```
public XMLWriter::writeDtdElement(string $name, string $content): bool
```

Procedural style

```
xmlwriter_write_dtd_element(XMLWriter $writer, string $name, string $content): bool
```

Writes a full DTD element.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The name of the DTD element.

The content of the element.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startDtdElement() - Create start DTD element
- XMLWriter::endDtdElement() - End current DTD element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writedtdelement.php
