# XMLWriter::outputMemory

Source: https://devdocs.io/php/xmlwriter.outputmemory

# xmlwriter_output_memory

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::outputMemory -- xmlwriter_output_memory — Returns current buffer

### Description

Object-oriented style

```
public XMLWriter::outputMemory(bool $flush = true): string
```

Procedural style

```
xmlwriter_output_memory(XMLWriter $writer, bool $flush = true): string
```

Returns the current buffer.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

Whether to flush the output buffer or not. Default is true.

### Return Values

Returns the current buffer as a string.

### Changelog

### See Also

- XMLWriter::flush() - Flush current buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.outputmemory.php
