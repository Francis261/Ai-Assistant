# XMLWriter::writeComment

Source: https://devdocs.io/php/xmlwriter.writecomment

# xmlwriter_write_comment

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeComment -- xmlwriter_write_comment — Write full comment tag

### Description

Object-oriented style

```
public XMLWriter::writeComment(string $content): bool
```

Procedural style

```
xmlwriter_write_comment(XMLWriter $writer, string $content): bool
```

Writes a full comment.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The contents of the comment.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startComment() - Create start comment
- XMLWriter::endComment() - Create end comment

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writecomment.php
