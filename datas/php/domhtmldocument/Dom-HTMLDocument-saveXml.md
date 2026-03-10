# Dom\HTMLDocument::saveXml

Source: https://devdocs.io/php/dom-htmldocument.savexml

(PHP 8 >= 8.4.0)

Dom\HTMLDocument::saveXml — Serializes the document as an XML string

### Description

```
public Dom\HTMLDocument::saveXml(?Dom\Node $node = null, int $options = 0): string|false
```

Serializes the document as an XML string.

### Parameters

### Return Values

The serialized XML document string in the current document encoding, or false on failure.

### Errors/Exceptions

- Throws a Dom\DOMException with code Dom\WRONG_DOCUMENT_ERR if node is from another document.

### See Also

- Dom\HTMLDocument::saveXmlFile() - Serializes the document as an XML file
- Dom\XMLDocument::saveHtml()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-htmldocument.savexml.php
