# DOMDocument::createComment

Source: https://devdocs.io/php/domdocument.createcomment

(PHP 5, PHP 7, PHP 8)

DOMDocument::createComment — Create new comment node

### Description

```
public DOMDocument::createComment(string $data): DOMComment
```

This function creates a new instance of class DOMComment. This node will not show up in the document unless it is inserted with (e.g.) DOMNode::appendChild().

### Parameters

The content of the comment.

### Return Values

The new DOMComment.

### Changelog

### See Also

- DOMNode::appendChild() - Adds new child at the end of the children
- DOMDocument::createAttribute() - Create new attribute
- DOMDocument::createAttributeNS() - Create new attribute node with an associated namespace
- DOMDocument::createCDATASection() - Create new cdata node
- DOMDocument::createDocumentFragment() - Create new document fragment
- DOMDocument::createElement() - Create new element node
- DOMDocument::createElementNS() - Create new element node with an associated namespace
- DOMDocument::createEntityReference() - Create new entity reference node
- DOMDocument::createProcessingInstruction() - Creates new PI node
- DOMDocument::createTextNode() - Create new text node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.createcomment.php
