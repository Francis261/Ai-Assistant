# DOMDocument::createTextNode

Source: https://devdocs.io/php/domdocument.createtextnode

(PHP 5, PHP 7, PHP 8)

DOMDocument::createTextNode — Create new text node

### Description

```
public DOMDocument::createTextNode(string $data): DOMText
```

This function creates a new instance of class DOMText. This node will not show up in the document unless it is inserted with (e.g.) DOMNode::appendChild().

### Parameters

The content of the text.

### Return Values

The new DOMText.

### Changelog

### See Also

- DOMNode::appendChild() - Adds new child at the end of the children
- DOMDocument::createAttribute() - Create new attribute
- DOMDocument::createAttributeNS() - Create new attribute node with an associated namespace
- DOMDocument::createCDATASection() - Create new cdata node
- DOMDocument::createComment() - Create new comment node
- DOMDocument::createDocumentFragment() - Create new document fragment
- DOMDocument::createElement() - Create new element node
- DOMDocument::createElementNS() - Create new element node with an associated namespace
- DOMDocument::createEntityReference() - Create new entity reference node
- DOMDocument::createProcessingInstruction() - Creates new PI node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.createtextnode.php
