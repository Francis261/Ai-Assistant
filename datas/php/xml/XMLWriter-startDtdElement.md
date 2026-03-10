# XMLWriter::startDtdElement

Source: https://devdocs.io/php/xmlwriter.startdtdelement

# xmlwriter_start_dtd_element

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startDtdElement -- xmlwriter_start_dtd_element — Create start DTD element

### Description

Object-oriented style

```
public XMLWriter::startDtdElement(string $qualifiedName): bool
```

Procedural style

```
xmlwriter_start_dtd_element(XMLWriter $writer, string $qualifiedName): bool
```

Starts a DTD element.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The qualified name of the document type to create.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::endDtdElement() - End current DTD element
- XMLWriter::writeDtdElement() - Write full DTD element tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startdtdelement.php
