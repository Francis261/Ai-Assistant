# Dom\import_simplexml

Source: https://devdocs.io/php/function.dom-ns-import-simplexml

(PHP 8 >= 8.4.0)

Dom\import_simplexml — Gets a Dom\Attr or Dom\Element object from a SimpleXMLElement object

### Description

```
Dom\import_simplexml(object $node): Dom\Attr|Dom\Element
```

This function takes the given attribute or element node (a SimpleXMLElement instance) and creates a Dom\Attr or Dom\Element node, respectively. The new Dom\Node refers to the same underlying XML node as the SimpleXMLElement.

### Parameters

The attribute or element node to import (a SimpleXMLElement instance).

### Return Values

The Dom\Attr or Dom\Element.

### Examples

Example #1 Import SimpleXML into DOM and modify SimpleXML through DOM

Error handling omitted for brevity.

```
<?php

$sxe = simplexml_load_string('<books><book><title>blah</title></book></books>');
$elt = Dom\import_simplexml($sxe);
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
 https://www.php.net/manual/en/function.dom-ns-import-simplexml.php
