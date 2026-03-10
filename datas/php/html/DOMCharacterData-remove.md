# DOMCharacterData::remove

Source: https://devdocs.io/php/domcharacterdata.remove

(PHP 8)

DOMCharacterData::remove — Removes the character data node

### Description

```
public DOMCharacterData::remove(): void
```

Removes the character data node.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 DOMCharacterData::remove() example

Removes the character data.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<container><![CDATA[hello]]><world/></container>");
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

- DOMChildNode::remove() - Removes the node
- DOMCharacterData::after() - Adds nodes after the character data
- DOMCharacterData::before() - Adds nodes before the character data
- DOMCharacterData::replaceWith() - Replaces the character data with new nodes
- DOMNode::removeChild() - Removes child from list of children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domcharacterdata.remove.php
