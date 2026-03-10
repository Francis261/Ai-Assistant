# DOMComment::__construct

Source: https://devdocs.io/php/domcomment.construct

(PHP 5, PHP 7, PHP 8)

DOMComment::__construct — Creates a new DOMComment object

### Description

Creates a new DOMComment object. This object is read only. It may be appended to a document, but additional nodes may not be appended to this node until the node is associated with a document. To create a writeable node, use DOMDocument::createComment.

### Parameters

The value of the comment.

### Examples

Example #1 Creating a new DOMComment

```
<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');
$element = $dom->appendChild(new DOMElement('root'));
$comment = $element->appendChild(new DOMComment('root comment'));
echo $dom->saveXML(); /* <?xml version="1.0" encoding="iso-8859-1"?><root><!--root comment--></root> */

?>
```

### See Also

- DOMDocument::createComment() - Create new comment node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domcomment.construct.php
