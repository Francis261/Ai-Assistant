# DOMNode::isSupported

Source: https://devdocs.io/php/domnode.issupported

(PHP 5, PHP 7, PHP 8)

DOMNode::isSupported — Checks if feature is supported for specified version

### Description

```
public DOMNode::isSupported(string $feature, string $version): bool
```

Checks if the asked feature is supported for the specified version.

### Parameters

The feature to test. See the example of DOMImplementation::hasFeature() for a list of features.

The version number of the feature to test.

### Return Values

Returns true on success or false on failure.

### See Also

- DOMImplementation::hasFeature() - Test if the DOM implementation implements a specific feature

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.issupported.php
