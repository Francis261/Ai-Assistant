# Dom\CharacterData::replaceWith

Source: https://devdocs.io/php/dom-characterdata.replacewith

(PHP 8 >= 8.4.0)

Dom\CharacterData::replaceWith — Replaces the character data with new nodes

### Description

```
public Dom\CharacterData::replaceWith(Dom\Node|string ...$nodes): void
```

Replaces the character data with new nodes.

### Parameters

The replacement nodes. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Examples

Example #1 Dom\CharacterData::replaceWith() example

Replaces the character data with new nodes.

```
<?php
$doc = Dom\XMLDocument::createFromString("<container><![CDATA[hello]]></container>");
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

- Dom\ChildNode::replaceWith() - Replaces the node with new nodes
- Dom\CharacterData::after() - Adds nodes after the character data
- Dom\CharacterData::before() - Adds nodes before the character data
- Dom\CharacterData::remove() - Removes the character data node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-characterdata.replacewith.php
