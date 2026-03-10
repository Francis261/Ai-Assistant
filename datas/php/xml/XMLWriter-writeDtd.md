# XMLWriter::writeDtd

Source: https://devdocs.io/php/xmlwriter.writedtd

# xmlwriter_write_dtd

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeDtd -- xmlwriter_write_dtd — Write full DTD tag

### Description

Object-oriented style

```
public XMLWriter::writeDtd(
 string $name,
 ?string $publicId = null,
 ?string $systemId = null,
 ?string $content = null
): bool
```

Procedural style

```
xmlwriter_write_dtd(
 XMLWriter $writer,
 string $name,
 ?string $publicId = null,
 ?string $systemId = null,
 ?string $content = null
): bool
```

Writes a full DTD.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The DTD name.

The external subset public identifier.

The external subset system identifier.

The content of the DTD.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startDtd() - Create start DTD tag
- XMLWriter::endDtd() - End current DTD

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writedtd.php
