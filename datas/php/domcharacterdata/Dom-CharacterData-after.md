# Dom\CharacterData::after

Source: https://devdocs.io/php/dom-characterdata.after

(PHP 8 >= 8.4.0)

Dom\CharacterData::after — Adds nodes after the character data

### Description

```
public Dom\CharacterData::after(Dom\Node|string ...$nodes): void
```

Adds the passed nodes after the character data.

### Parameters

Nodes to be added after the node. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Examples

Example #1 Dom\CharacterData::after() example

Adds nodes after the character data.

```
<?php
$doc = Dom\XMLDocument::createFromString("<container><![CDATA[hello]]></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->after("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0" encoding="UTF-8"?>
<container><![CDATA[hello]]>beautiful<world/></container>
```

### See Also

- Dom\ChildNode::after() - Adds nodes after the node
- Dom\CharacterData::before() - Adds nodes before the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-characterdata.after.php
