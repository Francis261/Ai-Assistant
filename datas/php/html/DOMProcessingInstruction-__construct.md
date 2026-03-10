# DOMProcessingInstruction::__construct

Source: https://devdocs.io/php/domprocessinginstruction.construct

(PHP 5, PHP 7, PHP 8)

DOMProcessingInstruction::__construct — Creates a new DOMProcessingInstruction object

### Description

Creates a new DOMProcessingInstruction object. This object is read only. It may be appended to a document, but additional nodes may not be appended to this node until the node is associated with a document. To create a writeable node, use DOMDocument::createProcessingInstruction.

### Parameters

The tag name of the processing instruction.

The value of the processing instruction.

### Examples

Example #1 Creating a new DOMProcessingInstruction object

```
<?php

$dom = new DOMDocument('1.0', 'UTF-8');
$html = $dom->appendChild(new DOMElement('html'));
$body = $html->appendChild(new DOMElement('body'));
$pinode = new DOMProcessingInstruction('php', 'echo "Hello World"; ');
$body->appendChild($pinode);
echo $dom->saveXML(); 

?>
```

The above example will output:

```
<?xml version="1.0" encoding="UTF-8"?>
<html><body><?php echo "Hello World"; ?></body></html>
```

### See Also

- DOMDocument::createProcessingInstruction() - Creates new PI node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domprocessinginstruction.construct.php
