# Dom\ParentNode::querySelectorAll

Source: https://devdocs.io/php/dom-parentnode.queryselectorall

(PHP 8 >= 8.4.0)

Dom\ParentNode::querySelectorAll — Returns a collection of elements that match the CSS selectors

### Description

```
public Dom\ParentNode::querySelectorAll(string $selectors): Dom\NodeList
```

Returns a collection of elements that match the CSS selectors specified in selectors.

### Parameters

### Return Values

Returns a static collection of elements that match the CSS selectors specified in selectors.

### Errors/Exceptions

Throws a DOMException with code Dom\SYNTAX_ERR when selectors is not a valid CSS selector string.

### See Also

- Dom\ParentNode::querySelector() - Returns the first element that matches the CSS selectors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-parentnode.queryselectorall.php
