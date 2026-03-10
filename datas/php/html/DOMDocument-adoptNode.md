# DOMDocument::adoptNode

Source: https://devdocs.io/php/domdocument.adoptnode

(PHP >= 8.3)

DOMDocument::adoptNode — Transfer a node from another document

### Description

```
public DOMDocument::adoptNode(DOMNode $node): DOMNode|false
```

Transfer a node from another document into the current document.

### Parameters

The node to transfer.

### Return Values

The node that was transfered, or false on error.

### Errors/Exceptions

Raised if the node type is not supported for document transfers.

### Examples

Example #1 DOMDocument::adoptNode() example

Transfers the hello element from the first document to the second one.

```
<?php
$doc1 = new DOMDocument;
$doc1->loadXML("<container><hello><world/></hello></container>");
$hello = $doc1->documentElement->firstChild;

$doc2 = new DOMDocument;
$doc2->loadXML("<root/>");
$doc2->documentElement->appendChild($doc2->adoptNode($hello));

echo $doc1->saveXML() . PHP_EOL . PHP_EOL;
echo $doc2->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container/>

<?xml version="1.0"?>
<root><hello><world/></hello></root>
```

### See Also

- DOMDocument::importNode() - Import node into current document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.adoptnode.php
