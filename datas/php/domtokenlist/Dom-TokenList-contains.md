# Dom\TokenList::contains

Source: https://devdocs.io/php/dom-tokenlist.contains

(PHP 8 >= 8.4.0)

Dom\TokenList::contains — Returns whether the list contains a given token

### Description

```
public Dom\TokenList::contains(string $token): bool
```

Returns whether the list contains token.

### Parameters

### Return Values

Returns true if the list contains token, false otherwise.

### Examples

Example #1 Dom\TokenList::contains() example

Checks whether two classes are present on the paragraph.

```
<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$classList = $p->classList;
var_dump(
    $classList->contains('important'),
    $classList->contains('font-small'),
);
?>
```

The above example will output:

```
bool(true)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-tokenlist.contains.php
