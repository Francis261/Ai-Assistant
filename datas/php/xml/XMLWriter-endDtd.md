# XMLWriter::endDtd

Source: https://devdocs.io/php/xmlwriter.enddtd

# xmlwriter_end_dtd

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::endDtd -- xmlwriter_end_dtd — End current DTD

### Description

Object-oriented style

```
public XMLWriter::endDtd(): bool
```

Procedural style

```
xmlwriter_end_dtd(XMLWriter $writer): bool
```

Ends the DTD of the document.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startDtd() - Create start DTD tag
- XMLWriter::writeDtd() - Write full DTD tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.enddtd.php
