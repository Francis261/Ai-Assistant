# Dom\TokenList::remove

Source: https://devdocs.io/php/dom-tokenlist.remove

(PHP 8 >= 8.4.0)

Dom\TokenList::remove — Removes the given tokens from the list

### Description

```
public Dom\TokenList::remove(string ...$tokens): void
```

Removes the given tokens from the list, but ignores any that were not present.

### Parameters

### Return Values

No value is returned.

### Errors/Exceptions

- Throws a ValueError if a token contains any null bytes.
- Throws a Dom\DOMException with code Dom\SYNTAX_ERR if a token is the empty string.
- Throws a Dom\DOMException with code Dom\INVALID_CHARACTER_ERR if a token contains any ASCII whitespace.

### Examples

Example #1 Dom\TokenList::remove() example

Removes two classes from the paragraph.

```
<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$p->classList->remove('font-bold', 'important');

echo $dom->saveHtml($p);
?>
```

The above example will output:

```
<p class=""></p>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-tokenlist.remove.php
