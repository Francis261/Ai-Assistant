# DOMText::__construct

Source: https://devdocs.io/php/domtext.construct

(PHP 5, PHP 7, PHP 8)

DOMText::__construct — Creates a new DOMText object

### Description

Creates a new DOMText object.

### Parameters

The value of the text node. If not supplied an empty text node is created.

### Examples

Example #1 Creating a new DOMText

```
<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');
$element = $dom->appendChild(new DOMElement('root'));
$text = $element->appendChild(new DOMText('root value'));
echo $dom->saveXML(); /* <?xml version="1.0" encoding="iso-8859-1"?><root>root value</root> */

?>
```

### See Also

- DOMDocument::createTextNode() - Create new text node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domtext.construct.php
