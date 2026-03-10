# tidy::isXml

Source: https://devdocs.io/php/tidy.isxml

# tidy_is_xml

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy::isXml -- tidy_is_xml — Indicates if the document is a generic (non HTML/XHTML) XML document

### Description

Object-oriented style

```
public tidy::isXml(): bool
```

Procedural style

```
tidy_is_xml(tidy $tidy): bool
```

Tells if the document is a generic (non HTML/XHTML) XML document.

### Parameters

The Tidy object.

### Return Values

This function returns true if the specified tidy tidy is a generic XML document (non HTML/XHTML), or false otherwise.

This function is not yet implemented in the Tidylib itself, so it always return false.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.isxml.php
