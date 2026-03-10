# Dom\TokenList::replace

Source: https://devdocs.io/php/dom-tokenlist.replace

(PHP 8 >= 8.4.0)

Dom\TokenList::replace — Replaces a token in the list with another one

### Description

```
public Dom\TokenList::replace(string $token, string $newToken): bool
```

Replaces a token in the list with another one.

### Parameters

### Return Values

Returns true if token was in the list, false otherwise.

### Errors/Exceptions

- Throws a ValueError if a token contains any null bytes.
- Throws a Dom\DOMException with code Dom\SYNTAX_ERR if a token is the empty string.
- Throws a Dom\DOMException with code Dom\INVALID_CHARACTER_ERR if a token contains any ASCII whitespace.

### Examples

Example #1 Dom\TokenList::replace() example

Replaces a token in the paragraph with another one.

```
<?php
$dom = Dom\HTMLDocument::createFromString('<p class="font-bold important"></p>', LIBXML_NOERROR);
$p = $dom->body->firstChild;

$p->classList->replace('font-bold', 'font-small');

echo $dom->saveHtml($p);
?>
```

The above example will output:

```
<p class="font-small important"></p>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-tokenlist.replace.php
