# XMLWriter::flush

Source: https://devdocs.io/php/xmlwriter.flush

# xmlwriter_flush

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 1.0.0)

XMLWriter::flush -- xmlwriter_flush — Flush current buffer

### Description

Object-oriented style

```
public XMLWriter::flush(bool $empty = true): string|int
```

Procedural style

```
xmlwriter_flush(XMLWriter $writer, bool $empty = true): string|int
```

Flushes the current buffer.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

Whether to empty the buffer or not. Default is true.

### Return Values

If you opened the writer in memory, this function returns the generated XML buffer, Else, if using URI, this function will write the buffer and return the number of written bytes.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.flush.php
