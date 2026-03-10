# Dom\TokenList::item

Source: https://devdocs.io/php/dom-tokenlist.item

(PHP 8 >= 8.4.0)

Dom\TokenList::item — Returns a token from the list

### Description

```
public Dom\TokenList::item(int $index): ?string
```

Returns a token from the list at index.

### Parameters

### Return Values

Returns the token at index or null when the index is out of bounds.

### Examples

Example #1 Dom\TokenList::item() example

Accesses a valid index and an invalid index.

```
<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$classList = $p->classList;
var_dump(
    $classList->item(0),
    $classList->item(100),
);
?>
```

The above example will output:

```
string(9) "font-bold"
NULL
```

### Notes

Note: This method is equivalent to using array access syntax.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-tokenlist.item.php
