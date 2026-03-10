# DOMCharacterData::replaceWith

Source: https://devdocs.io/php/domcharacterdata.replacewith

(PHP 8)

DOMCharacterData::replaceWith — Replaces the character data with new nodes

### Description

```
public DOMCharacterData::replaceWith(DOMNode|string ...$nodes): void
```

Replaces the character data with new nodes.

### Parameters

The replacement nodes. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### Examples

Example #1 DOMCharacterData::replaceWith() example

Replaces the character data with new nodes.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<container><![CDATA[hello]]></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->replaceWith("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container>beautiful<world/></container>
```

### See Also

- DOMChildNode::replaceWith() - Replaces the node with new nodes
- DOMCharacterData::after() - Adds nodes after the character data
- DOMCharacterData::before() - Adds nodes before the character data
- DOMCharacterData::remove() - Removes the character data node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domcharacterdata.replacewith.php
