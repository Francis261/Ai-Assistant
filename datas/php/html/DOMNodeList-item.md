# DOMNodeList::item

Source: https://devdocs.io/php/domnodelist.item

(PHP 5, PHP 7, PHP 8)

DOMNodeList::item — Retrieves a node specified by index

### Description

```
public DOMNodeList::item(int $index): DOMElement|DOMNode|DOMNameSpaceNode|null
```

Retrieves a node specified by index within the DOMNodeList object.

If you need to know the number of nodes in the collection, use the length property of the DOMNodeList object.

### Parameters

Index of the node into the collection.

### Return Values

The node at the indexth position in the DOMNodeList, or null if that is not a valid index.

### Examples

Example #1 Traversing all the entries of the table

```
<?php
$doc = new DOMDocument;
$doc->load('examples/book-docbook.xml');

$items = $doc->getElementsByTagName('entry');

for ($i = 0; $i < $items->length; $i++) {
    echo $items->item($i)->nodeValue . "\n";
}
?>
```

Example #2 Accessing item with array syntax

```
<?php
$doc = new DOMDocument;
$doc->load('examples/book-docbook.xml');

$items = $doc->getElementsByTagName('entry');

for ($i = 0; $i < $items->length; $i++) {
    echo $items[$i]->nodeValue . "\n";
}

?>
```

Example #3 Traversing items with foreach

```
<?php
$doc = new DOMDocument;
$doc->load('examples/book-docbook.xml');

$items = $doc->getElementsByTagName('entry');

foreach ($items as $item) {
    echo $item->nodeValue . "\n";
}
?>
```

The above example will output:

```
Title
Author
Language
ISBN
The Grapes of Wrath
John Steinbeck
en
0140186409
The Pearl
John Steinbeck
en
014017737X
Samarcande
Amine Maalouf
fr
2253051209
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnodelist.item.php
