# XMLWriter::startCdata

Source: https://devdocs.io/php/xmlwriter.startcdata

# xmlwriter_start_cdata

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startCdata -- xmlwriter_start_cdata — Create start CDATA tag

### Description

Object-oriented style

```
public XMLWriter::startCdata(): bool
```

Procedural style

```
xmlwriter_start_cdata(XMLWriter $writer): bool
```

Starts a CDATA.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::endCdata() - End current CDATA
- XMLWriter::writeCdata() - Write full CDATA tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startcdata.php
