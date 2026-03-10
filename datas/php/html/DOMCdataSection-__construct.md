# DOMCdataSection::__construct

Source: https://devdocs.io/php/domcdatasection.construct

(PHP 5, PHP 7, PHP 8)

DOMCdataSection::__construct — Constructs a new DOMCdataSection object

### Description

Constructs a new CDATA node. This works like the DOMText class.

### Parameters

The value of the CDATA node. If not supplied, an empty CDATA node is created.

### Examples

Example #1 Creating a new DOMCdataSection object

```
<?php

$dom = new DOMDocument('1.0', 'utf-8');
$element = $dom->appendChild(new DOMElement('root'));
$text = $element->appendChild(new DOMCdataSection('root value'));
echo $dom->saveXML();

?>
```

The above example will output:

```
<?xml version="1.0" encoding="utf-8"?>
<root><![CDATA[root value]]></root>
```

### See Also

- DOMText::__construct() - Creates a new DOMText object
- DOMDocument::createTextNode() - Create new text node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domcdatasection.construct.php
