# Dom\HTMLDocument::saveXmlFile

Source: https://devdocs.io/php/dom-htmldocument.savexmlfile

(PHP 8 >= 8.4.0)

Dom\HTMLDocument::saveXmlFile — Serializes the document as an XML file

### Description

```
public Dom\HTMLDocument::saveXmlFile(string $filename, int $options = 0): int|false
```

Serializes the document as an XML file.

### Parameters

### Return Values

The number of bytes written on success, or false on failure.

### Errors/Exceptions

- Throws a ValueError if filename is an empty string or contains any null bytes.

### See Also

- Dom\HTMLDocument::saveXml() - Serializes the document as an XML string
- Dom\HTMLDocument::saveHtmlFile() - Serializes the document as an HTML file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-htmldocument.savexmlfile.php
