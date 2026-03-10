# DOMDocument::createProcessingInstruction

Source: https://devdocs.io/php/domdocument.createprocessinginstruction

(PHP 5, PHP 7, PHP 8)

DOMDocument::createProcessingInstruction — Creates new PI node

### Description

```
public DOMDocument::createProcessingInstruction(string $target, string $data = ""): DOMProcessingInstruction|false
```

This function creates a new instance of class DOMProcessingInstruction. This node will not show up in the document unless it is inserted with (e.g.) DOMNode::appendChild().

### Parameters

The target of the processing instruction.

The content of the processing instruction.

### Return Values

The new DOMProcessingInstruction or false if an error occurred.

### Errors/Exceptions

Raised if target contains an invalid character.

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
- DOMDocument::createTextNode() - Create new text node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.createprocessinginstruction.php
