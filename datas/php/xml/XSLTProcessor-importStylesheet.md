# XSLTProcessor::importStylesheet

Source: https://devdocs.io/php/xsltprocessor.importstylesheet

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::importStylesheet — Import stylesheet

### Description

```
public XSLTProcessor::importStylesheet(object $stylesheet): bool
```

This method imports the stylesheet into the XSLTProcessor for transformations.

### Parameters

The imported style sheet as a Dom\Document, DOMDocument or SimpleXMLElement object.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Throws a TypeError if stylesheet is not an XML object.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.importstylesheet.php
