# XMLWriter::fullEndElement

Source: https://devdocs.io/php/xmlwriter.fullendelement

# xmlwriter_full_end_element

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL xmlwriter >= 2.0.4)

XMLWriter::fullEndElement -- xmlwriter_full_end_element — End current element

### Description

Object-oriented style

```
public XMLWriter::fullEndElement(): bool
```

Procedural style

```
xmlwriter_full_end_element(XMLWriter $writer): bool
```

End the current xml element. Writes an end tag even if the element is empty.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::endElement() - End current element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.fullendelement.php
