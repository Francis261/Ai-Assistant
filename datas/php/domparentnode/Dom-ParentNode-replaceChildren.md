# Dom\ParentNode::replaceChildren

Source: https://devdocs.io/php/dom-parentnode.replacechildren

(PHP 8 >= 8.4.0)

Dom\ParentNode::replaceChildren — Replace children in node

### Description

```
public Dom\ParentNode::replaceChildren(Dom\Node|string ...$nodes): void
```

Replace children in node.

### Parameters

The nodes replacing the children. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if this node is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Examples

Example #1 Dom\ParentNode::replaceChildren() example

```
<?php
$dom = Dom\HTMLDocument::createFromString('<!DOCTYPE HTML><html><p>hi</p> test <p>hi2</p></html>');

$dom->documentElement->replaceChildren('foo', $dom->createElement('p'), 'bar');
echo $dom->saveHtml();
?>
```

The above example will output:

```
<!DOCTYPE html><html>foo<p></p>bar</html>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-parentnode.replacechildren.php
