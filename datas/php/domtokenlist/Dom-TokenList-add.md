# Dom\TokenList::add

Source: https://devdocs.io/php/dom-tokenlist.add

(PHP 8 >= 8.4.0)

Dom\TokenList::add — Adds the given tokens to the list

### Description

```
public Dom\TokenList::add(string ...$tokens): void
```

Adds the given tokens to the list, but not any that were already present.

### Parameters

### Return Values

No value is returned.

### Errors/Exceptions

- Throws a ValueError if a token contains any null bytes.
- Throws a Dom\DOMException with code Dom\SYNTAX_ERR if a token is the empty string.
- Throws a Dom\DOMException with code Dom\INVALID_CHARACTER_ERR if a token contains any ASCII whitespace.

### Examples

Example #1 Dom\TokenList::add() example

Adds two classes to a newly created paragraph element.

```
<?php
$dom = Dom\HTMLDocument::createEmpty();
$p = $dom->createElement('p');

$classList = $p->classList;
$classList->add('font-bold', 'important');

echo $dom->saveHtml($p);
?>
```

The above example will output:

```
<p class="font-bold important"></p>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-tokenlist.add.php
