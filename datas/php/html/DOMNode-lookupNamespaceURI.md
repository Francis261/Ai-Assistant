# DOMNode::lookupNamespaceURI

Source: https://devdocs.io/php/domnode.lookupnamespaceuri

(PHP 5, PHP 7, PHP 8)

DOMNode::lookupNamespaceURI — Gets the namespace URI of the node based on the prefix

### Description

```
public DOMNode::lookupNamespaceURI(?string $prefix): ?string
```

Gets the namespace URI of the node based on the prefix.

### Parameters

The prefix to look for. If this parameter is null, the method will return the default namespace URI, if any.

### Return Values

Returns the associated namespace URI or null if none is found.

### See Also

- DOMNode::lookupPrefix() - Gets the namespace prefix of the node based on the namespace URI

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.lookupnamespaceuri.php
