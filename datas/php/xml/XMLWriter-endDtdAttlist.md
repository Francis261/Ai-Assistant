# XMLWriter::endDtdAttlist

Source: https://devdocs.io/php/xmlwriter.enddtdattlist

# xmlwriter_end_dtd_attlist

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::endDtdAttlist -- xmlwriter_end_dtd_attlist — End current DTD AttList

### Description

Object-oriented style

```
public XMLWriter::endDtdAttlist(): bool
```

Procedural style

```
xmlwriter_end_dtd_attlist(XMLWriter $writer): bool
```

Ends the current DTD attribute list.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startDtdAttlist() - Create start DTD AttList
- XMLWriter::writeDtdAttlist() - Write full DTD AttList tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.enddtdattlist.php
