# DOMDocumentFragment::replaceChildren

Source: https://devdocs.io/php/domdocumentfragment.replacechildren

(PHP 8 >= 8.3.0)

DOMDocumentFragment::replaceChildren — Replace children in fragment

### Description

```
public DOMDocumentFragment::replaceChildren(DOMNode|string ...$nodes): void
```

Replaces the children in the document fragment with new nodes.

### Parameters

The nodes replacing the children. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if this node is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### Examples

Example #1 DOMDocumentFragment::replaceChildren() example

Replaces the children with new nodes.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<container><hello/></container>");
$fragment = $doc->createDocumentFragment();
$fragment->append("hello");

$fragment->replaceChildren("beautiful", $doc->createElement("world"));

echo $doc->saveXML($fragment);
?>
```

The above example will output:

```
beautiful
<world/>
```

### See Also

- DOMParentNode::replaceChildren() - Replace children in node
- DOMDocumentFragment::append() - Appends nodes after the last child node
- DOMDocumentFragment::prepend() - Prepends nodes before the first child node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocumentfragment.replacechildren.php
