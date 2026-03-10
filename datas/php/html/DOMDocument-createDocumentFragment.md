# DOMDocument::createDocumentFragment

Source: https://devdocs.io/php/domdocument.createdocumentfragment

(PHP 5, PHP 7, PHP 8)

DOMDocument::createDocumentFragment — Create new document fragment

### Description

```
public DOMDocument::createDocumentFragment(): DOMDocumentFragment
```

This function creates a new instance of class DOMDocumentFragment. This node will not show up in the document unless it is inserted with (e.g.) DOMNode::appendChild().

### Parameters

This function has no parameters.

### Return Values

The new DOMDocumentFragment.

### Changelog

### See Also

- DOMNode::appendChild() - Adds new child at the end of the children
- DOMDocument::createAttribute() - Create new attribute
- DOMDocument::createAttributeNS() - Create new attribute node with an associated namespace
- DOMDocument::createCDATASection() - Create new cdata node
- DOMDocument::createComment() - Create new comment node
- DOMDocument::createElement() - Create new element node
- DOMDocument::createElementNS() - Create new element node with an associated namespace
- DOMDocument::createEntityReference() - Create new entity reference node
- DOMDocument::createProcessingInstruction() - Creates new PI node
- DOMDocument::createTextNode() - Create new text node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.createdocumentfragment.php
