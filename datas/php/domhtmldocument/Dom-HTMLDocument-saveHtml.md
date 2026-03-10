# Dom\HTMLDocument::saveHtml

Source: https://devdocs.io/php/dom-htmldocument.savehtml

(PHP 8 >= 8.4.0)

Dom\HTMLDocument::saveHtml — Serializes the document as an HTML string

### Description

```
public Dom\HTMLDocument::saveHtml(?Dom\Node $node = null): string
```

Serializes the document as an HTML string.

### Parameters

### Return Values

The serialized HTML document string in the current document encoding.

### Errors/Exceptions

- Throws a Dom\DOMException with code Dom\WRONG_DOCUMENT_ERR if node is from another document.

### See Also

- Dom\HTMLDocument::saveHtmlFile() - Serializes the document as an HTML file
- Dom\HTMLDocument::saveXml() - Serializes the document as an XML string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-htmldocument.savehtml.php
