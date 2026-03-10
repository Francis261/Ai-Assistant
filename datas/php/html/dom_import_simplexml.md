# dom_import_simplexml

Source: https://devdocs.io/php/function.dom-import-simplexml

(PHP 5, PHP 7, PHP 8)

dom_import_simplexml — Gets a DOMAttr or DOMElement object from a SimpleXMLElement object

### Description

```
dom_import_simplexml(object $node): DOMAttr|DOMElement
```

This function takes the given attribute or element node (a SimpleXMLElement instance) and creates a DOMAttr or DOMElement node, repectively. The new DOMNode refers to the same underlying XML node as the SimpleXMLElement.

### Parameters

The attribute or element node to import (a SimpleXMLElement instance).

### Return Values

The DOMAttr or DOMElement.

### Changelog

### Examples

Example #1 Import SimpleXML into DOM with dom_import_simplexml()

```
<?php

$sxe = simplexml_load_string('<books><book><title>blah</title></book></books>');

if ($sxe === false) {
    echo 'Error while parsing the document';
    exit;
}

$dom_sxe = dom_import_simplexml($sxe);
if (!$dom_sxe) {
    echo 'Error while converting XML';
    exit;
}

$dom = new DOMDocument('1.0');
$dom_sxe = $dom->importNode($dom_sxe, true);
$dom_sxe = $dom->appendChild($dom_sxe);

echo $dom->saveXML();

?>
```

The above example will output:

```
<?xml version="1.0"?>
<books><book><title>blah</title></book></books>
```

Example #2 Import SimpleXML into DOM and modify SimpleXML through DOM

Error handling omitted for brevity.

```
<?php

$sxe = simplexml_load_string('<books><book><title>blah</title></book></books>');
$elt = dom_import_simplexml($sxe);
$elt->setAttribute("foo", "bar");
echo $sxe->asXML();

?>
```

The above example will output:

```
<?xml version="1.0"?>
<books foo="bar"><book><title>blah</title></book></books>
```

### See Also

- simplexml_import_dom() - Get a SimpleXMLElement object from an XML or HTML node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dom-import-simplexml.php
