# XMLWriter::text

Source: https://devdocs.io/php/xmlwriter.text

# xmlwriter_text

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::text -- xmlwriter_text — Write text

### Description

Object-oriented style

```
public XMLWriter::text(string $content): bool
```

Procedural style

```
xmlwriter_text(XMLWriter $writer, string $content): bool
```

Writes a text.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The contents of the text. The characters <, >, & and " are written as entity references (i.e. &lt;, &gt;, &amp; and &quot;, respectively). All other characters including ' are written literally. To write the special XML characters literally, or to write literal entity references, xmlwriter_write_raw() has to be used.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.text.php
