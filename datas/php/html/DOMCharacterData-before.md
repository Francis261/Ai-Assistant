# DOMCharacterData::before

Source: https://devdocs.io/php/domcharacterdata.before

(PHP 8)

DOMCharacterData::before — Adds nodes before the character data

### Description

```
public DOMCharacterData::before(DOMNode|string ...$nodes): void
```

Adds the passed nodes before the character data.

### Parameters

Nodes to be added before the node. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### Examples

Example #1 DOMCharacterData::before() example

Adds nodes before the character data.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<container><![CDATA[world]]></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->before("hello", $doc->createElement("beautiful"));

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container>hello<beautiful/><![CDATA[world]]></container>
```

### See Also

- DOMChildNode::before() - Adds nodes before the node
- DOMCharacterData::after() - Adds nodes after the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domcharacterdata.before.php
