# XMLWriter::writeDtdEntity

Source: https://devdocs.io/php/xmlwriter.writedtdentity

# xmlwriter_write_dtd_entity

(PHP 5 >= 5.2.1, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeDtdEntity -- xmlwriter_write_dtd_entity — Write full DTD Entity tag

### Description

Object-oriented style

```
public XMLWriter::writeDtdEntity(
 string $name,
 string $content,
 bool $isParam = false,
 ?string $publicId = null,
 ?string $systemId = null,
 ?string $notationData = null
): bool
```

Procedural style

```
xmlwriter_write_dtd_entity(
 XMLWriter $writer,
 string $name,
 string $content,
 bool $isParam = false,
 ?string $publicId = null,
 ?string $systemId = null,
 ?string $notationData = null
): bool
```

Writes a full DTD entity.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The name of the entity.

The content of the entity.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startDtdEntity() - Create start DTD Entity
- XMLWriter::endDtdEntity() - End current DTD Entity

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writedtdentity.php
