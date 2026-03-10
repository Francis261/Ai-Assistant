# Dom\TokenList::toggle

Source: https://devdocs.io/php/dom-tokenlist.toggle

(PHP 8 >= 8.4.0)

Dom\TokenList::toggle — Toggles the presence of a token in the list

### Description

```
public Dom\TokenList::toggle(string $token, ?bool $force = null): bool
```

Toggles the presence of token in the list.

### Parameters

### Return Values

Returns true if the token is in the list after the call, false otherwise.

### Errors/Exceptions

- Throws a ValueError if a token contains any null bytes.
- Throws a Dom\DOMException with code Dom\SYNTAX_ERR if a token is the empty string.
- Throws a Dom\DOMException with code Dom\INVALID_CHARACTER_ERR if a token contains any ASCII whitespace.

### Examples

Example #1 Dom\TokenList::toggle() example

Toggles three classes, two without force, and one with.

```
<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$classList = $p->classList;
$classList->toggle('font-bold', 'font-small');
$classList->toggle('important', force: true);

echo $dom->saveHtml($p);
?>
```

The above example will output:

```
<p class="font-bold important"></p>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-tokenlist.toggle.php
