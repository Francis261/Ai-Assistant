# DOMDocument::__construct

Source: https://devdocs.io/php/domdocument.construct

(PHP 5, PHP 7, PHP 8)

DOMDocument::__construct — Creates a new DOMDocument object

### Description

Creates a new DOMDocument object.

### Parameters

The version number of the document as part of the XML declaration.

The encoding of the document as part of the XML declaration.

### Examples

Example #1 Creating a new DOMDocument

```
<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');

echo $dom->saveXML(); /* <?xml version="1.0" encoding="iso-8859-1"?> */

?>
```

### See Also

- DOMImplementation::createDocument() - Creates a DOMDocument object of the specified type with its document element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.construct.php
