# DOMImplementation::hasFeature

Source: https://devdocs.io/php/domimplementation.hasfeature

(PHP 5, PHP 7, PHP 8)

DOMImplementation::hasFeature — Test if the DOM implementation implements a specific feature

### Description

```
public DOMImplementation::hasFeature(string $feature, string $version): bool
```

Test if the DOM implementation implements a specific feature.

You can find a list of all features in the » Conformance section of the DOM specification.

### Parameters

The feature to test.

The version number of the feature to test. In level 2, this can be either 2.0 or 1.0.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Testing your DOM Implementation

```
<?php

$features = array(
  'Core'           => 'Core module',
  'XML'            => 'XML module',
  'HTML'           => 'HTML module',
  'Views'          => 'Views module',
  'Stylesheets'    => 'Style Sheets module',
  'CSS'            => 'CSS module',
  'CSS2'           => 'CSS2 module',
  'Events'         => 'Events module',
  'UIEvents'       => 'User interface Events module',
  'MouseEvents'    => 'Mouse Events module',
  'MutationEvents' => 'Mutation Events module',
  'HTMLEvents'     => 'HTML Events module',
  'Range'          => 'Range module',
  'Traversal'      => 'Traversal module'
);

$implementation = new DOMImplementation;

foreach ($features as $key => $name) {
  if ($implementation->hasFeature($key, '2.0')) {
    echo "Has feature $name\n";
  } else {
    echo "Missing feature $name\n";
  }
}

?>
```

### See Also

- DOMNode::isSupported() - Checks if feature is supported for specified version

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domimplementation.hasfeature.php
