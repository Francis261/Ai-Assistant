# DOMEntityReference::__construct

Source: https://devdocs.io/php/domentityreference.construct

(PHP 5, PHP 7, PHP 8)

DOMEntityReference::__construct — Creates a new DOMEntityReference object

### Description

Creates a new DOMEntityReference object.

### Parameters

The name of the entity reference.

### Examples

Example #1 Creating a new DOMEntityReference

```
<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');
$element = $dom->appendChild(new DOMElement('root'));
$entity = $element->appendChild(new DOMEntityReference('nbsp'));
echo $dom->saveXML(); /* <?xml version="1.0" encoding="iso-8859-1"?><root>&nbsp;</root> */

?>
```

### See Also

- DOMDocument::createEntityReference() - Create new entity reference node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domentityreference.construct.php
