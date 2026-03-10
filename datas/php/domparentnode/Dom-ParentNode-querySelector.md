# Dom\ParentNode::querySelector

Source: https://devdocs.io/php/dom-parentnode.queryselector

(PHP 8 >= 8.4.0)

Dom\ParentNode::querySelector — Returns the first element that matches the CSS selectors

### Description

```
public Dom\ParentNode::querySelector(string $selectors): ?Dom\Element
```

Returns the first element that matches the CSS selectors specified in selectors.

### Parameters

### Return Values

Returns the first Dom\Element that matches selectors. Returns null if no element matches.

### Errors/Exceptions

Throws a DOMException with code Dom\SYNTAX_ERR when selectors is not a valid CSS selector string.

### See Also

- Dom\ParentNode::querySelectorAll() - Returns a collection of elements that match the CSS selectors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-parentnode.queryselector.php
