# XMLWriter::endDtdEntity

Source: https://devdocs.io/php/xmlwriter.enddtdentity

# xmlwriter_end_dtd_entity

(PHP 5 >= 5.2.1, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::endDtdEntity -- xmlwriter_end_dtd_entity — End current DTD Entity

### Description

Object-oriented style

```
public XMLWriter::endDtdEntity(): bool
```

Procedural style

```
xmlwriter_end_dtd_entity(XMLWriter $writer): bool
```

Ends the current DTD entity.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startDtdEntity() - Create start DTD Entity
- XMLWriter::writeDtdEntity() - Write full DTD Entity tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.enddtdentity.php
