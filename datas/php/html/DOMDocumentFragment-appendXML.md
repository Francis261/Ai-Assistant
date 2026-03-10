# DOMDocumentFragment::appendXML

Source: https://devdocs.io/php/domdocumentfragment.appendxml

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

DOMDocumentFragment::appendXML — Append raw XML data

### Description

```
public DOMDocumentFragment::appendXML(string $data): bool
```

Appends raw XML data to a DOMDocumentFragment.

This method is not part of the DOM standard. It was created as a simpler approach for appending an XML DocumentFragment in a DOMDocument.

If you want to stick to the standards, you will have to create a temporary DOMDocument with a dummy root and then loop through the child nodes of the root of your XML data to append them.

### Parameters

XML to append.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Appending XML data to your document

```
<?php
$doc = new DOMDocument();
$doc->loadXML("<root/>");
$f = $doc->createDocumentFragment();
$f->appendXML("<foo>text</foo><bar>text2</bar>");
$doc->documentElement->appendChild($f);
echo $doc->saveXML(); 
?>
```

The above example will output:

```
<?xml version="1.0"?>
<root><foo>text</foo><bar>text2</bar></root>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocumentfragment.appendxml.php
