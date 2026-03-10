# XMLWriter::endComment

Source: https://devdocs.io/php/xmlwriter.endcomment

# xmlwriter_end_comment

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 1.0.0)

XMLWriter::endComment -- xmlwriter_end_comment — Create end comment

### Description

Object-oriented style

```
public XMLWriter::endComment(): bool
```

Procedural style

```
xmlwriter_end_comment(XMLWriter $writer): bool
```

Ends the current comment.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startComment() - Create start comment
- XMLWriter::writeComment() - Write full comment tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.endcomment.php
