# XMLWriter::startDtdEntity

Source: https://devdocs.io/php/xmlwriter.startdtdentity

# xmlwriter_start_dtd_entity

(PHP 5 >= 5.2.1, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startDtdEntity -- xmlwriter_start_dtd_entity — Create start DTD Entity

### Description

Object-oriented style

```
public XMLWriter::startDtdEntity(string $name, bool $isParam): bool
```

Procedural style

```
xmlwriter_start_dtd_entity(XMLWriter $writer, string $name, bool $isParam): bool
```

Starts a DTD entity.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The name of the entity.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::endDtdEntity() - End current DTD Entity
- XMLWriter::writeDtdEntity() - Write full DTD Entity tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startdtdentity.php
