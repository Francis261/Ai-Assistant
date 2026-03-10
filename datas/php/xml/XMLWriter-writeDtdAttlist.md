# XMLWriter::writeDtdAttlist

Source: https://devdocs.io/php/xmlwriter.writedtdattlist

# xmlwriter_write_dtd_attlist

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeDtdAttlist -- xmlwriter_write_dtd_attlist — Write full DTD AttList tag

### Description

Object-oriented style

```
public XMLWriter::writeDtdAttlist(string $name, string $content): bool
```

Procedural style

```
xmlwriter_write_dtd_attlist(XMLWriter $writer, string $name, string $content): bool
```

Writes a DTD attribute list.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The name of the DTD attribute list.

The content of the DTD attribute list.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startDtdAttlist() - Create start DTD AttList
- XMLWriter::endDtdAttlist() - End current DTD AttList

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writedtdattlist.php
