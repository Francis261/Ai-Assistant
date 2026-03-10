# DOMElement::insertAdjacentText

Source: https://devdocs.io/php/domelement.insertadjacenttext

(PHP 8 >= 8.3.0)

DOMElement::insertAdjacentText — Insert adjacent text

### Description

```
public DOMElement::insertAdjacentText(string $where, string $data): void
```

Inserts text at a relative position given by where.

### Parameters

- beforebegin - Insert before the target element.
- afterbegin - Insert as the first child of the target element.
- beforeend - Insert as the last child of the target element.
- afterend - Insert after the target element.

The string to insert.

### Return Values

No value is returned.

### Examples

Example #1 DOMElement::insertAdjacentText() example

```
<?php

$dom = new DOMDocument();
$dom->loadXML('<?xml version="1.0"?><container><p>H</p></container>');

$container = $dom->documentElement;
$p = $container->firstElementChild;

$p->insertAdjacentText("afterbegin", "P");
$p->insertAdjacentText("beforeend", "P");

echo $dom->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container><p>PHP</p></container>
```

### See Also

- DOMElement::insertAdjacentElement() - Insert adjacent element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.insertadjacenttext.php
