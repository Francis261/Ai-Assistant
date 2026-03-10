# XMLWriter::startDocument

Source: https://devdocs.io/php/xmlwriter.startdocument

# xmlwriter_start_document

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startDocument -- xmlwriter_start_document — Create document tag

### Description

Object-oriented style

```
public XMLWriter::startDocument(?string $version = "1.0", ?string $encoding = null, ?string $standalone = null): bool
```

Procedural style

```
xmlwriter_start_document(
 XMLWriter $writer,
 ?string $version = "1.0",
 ?string $encoding = null,
 ?string $standalone = null
): bool
```

Starts a document.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The version number of the document as part of the XML declaration.

The encoding of the document as part of the XML declaration.

yes or no.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Passing an encoding containing null bytes will throw a ValueError.

### Changelog

### See Also

- XMLWriter::endDocument() - End current document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startdocument.php
