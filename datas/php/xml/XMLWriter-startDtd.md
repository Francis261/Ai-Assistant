# XMLWriter::startDtd

Source: https://devdocs.io/php/xmlwriter.startdtd

# xmlwriter_start_dtd

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startDtd -- xmlwriter_start_dtd — Create start DTD tag

### Description

Object-oriented style

```
public XMLWriter::startDtd(string $qualifiedName, ?string $publicId = null, ?string $systemId = null): bool
```

Procedural style

```
xmlwriter_start_dtd(
 XMLWriter $writer,
 string $qualifiedName,
 ?string $publicId = null,
 ?string $systemId = null
): bool
```

Starts a DTD.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The qualified name of the document type to create.

The external subset public identifier.

The external subset system identifier.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::endDtd() - End current DTD
- XMLWriter::writeDtd() - Write full DTD tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startdtd.php
