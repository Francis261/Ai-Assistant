# Dom\CharacterData::remove

Source: https://devdocs.io/php/dom-characterdata.remove

(PHP 8 >= 8.4.0)

Dom\CharacterData::remove — Removes the character data node

### Description

```
public Dom\CharacterData::remove(): void
```

Removes the character data node.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Dom\CharacterData::remove() example

Removes the character data.

```
<?php
$doc = Dom\XMLDocument::createFromString("<container><![CDATA[hello]]><world/></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->remove();

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container><world/></container>
```

### See Also

- Dom\ChildNode::remove() - Removes the node
- Dom\CharacterData::after() - Adds nodes after the character data
- Dom\CharacterData::before() - Adds nodes before the character data
- Dom\CharacterData::replaceWith() - Replaces the character data with new nodes
- Dom\Node::removeChild()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-characterdata.remove.php
