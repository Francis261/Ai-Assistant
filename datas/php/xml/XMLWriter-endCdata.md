# XMLWriter::endCdata

Source: https://devdocs.io/php/xmlwriter.endcdata

# xmlwriter_end_cdata

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::endCdata -- xmlwriter_end_cdata — End current CDATA

### Description

Object-oriented style

```
public XMLWriter::endCdata(): bool
```

Procedural style

```
xmlwriter_end_cdata(XMLWriter $writer): bool
```

Ends the current CDATA section.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startCdata() - Create start CDATA tag
- XMLWriter::writeCdata() - Write full CDATA tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.endcdata.php
