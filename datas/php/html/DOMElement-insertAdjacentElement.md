# DOMElement::insertAdjacentElement

Source: https://devdocs.io/php/domelement.insertadjacentelement

(PHP 8 >= 8.3.0)

DOMElement::insertAdjacentElement — Insert adjacent element

### Description

```
public DOMElement::insertAdjacentElement(string $where, DOMElement $element): ?DOMElement
```

Inserts an element at a relative position given by where.

### Parameters

- beforebegin - Insert before the target element.
- afterbegin - Insert as the first child of the target element.
- beforeend - Insert as the last child of the target element.
- afterend - Insert after the target element.

The element to insert.

### Return Values

Return DOMElement or null on failure.

### Examples

Example #1 DOMElement::insertAdjacentElement() example

```
<?php

$dom = new DOMDocument();
$dom->loadXML('<?xml version="1.0"?><container><p>foo</p></container>');
$container = $dom->documentElement;
$p = $container->firstElementChild;

$p->insertAdjacentElement('beforebegin', $dom->createElement('A'));
echo $dom->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container><A/><p>foo</p></container>
```

### See Also

- DOMElement::insertAdjacentText() - Insert adjacent text

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.insertadjacentelement.php
