# XMLWriter::endDtdElement

Source: https://devdocs.io/php/xmlwriter.enddtdelement

# xmlwriter_end_dtd_element

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::endDtdElement -- xmlwriter_end_dtd_element — End current DTD element

### Description

Object-oriented style

```
public XMLWriter::endDtdElement(): bool
```

Procedural style

```
xmlwriter_end_dtd_element(XMLWriter $writer): bool
```

Ends the current DTD element.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startDtdElement() - Create start DTD element
- XMLWriter::writeDtdElement() - Write full DTD element tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.enddtdelement.php
