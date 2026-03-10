# Dom\HTMLDocument::saveHtmlFile

Source: https://devdocs.io/php/dom-htmldocument.savehtmlfile

(PHP 8 >= 8.4.0)

Dom\HTMLDocument::saveHtmlFile — Serializes the document as an HTML file

### Description

```
public Dom\HTMLDocument::saveHtmlFile(string $filename): int|false
```

Serializes the document as an HTML file.

### Parameters

### Return Values

The number of bytes written on success, or false on failure.

### Errors/Exceptions

- Throws a ValueError if filename is an empty string or contains any null bytes.

### See Also

- Dom\HTMLDocument::saveHtml() - Serializes the document as an HTML string
- Dom\HTMLDocument::saveXmlFile() - Serializes the document as an XML file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-htmldocument.savehtmlfile.php
