# EventBase::getFeatures

Source: https://devdocs.io/php/eventbase.getfeatures

(PECL event >= 1.2.6-beta)

EventBase::getFeatures — Returns bitmask of features supported

### Description

```
public EventBase::getFeatures(): int
```

Returns bitmask of features supported.

### Parameters

This function has no parameters.

### Return Values

Returns integer representing a bitmask of supported features. See EventConfig::FEATURE_* constants.

### Examples

Example #1 EventBase::getFeatures() example

```
<?php
// Avoiding "select" method
$cfg = new EventConfig();
if ($cfg->avoidMethod("select")) {
    echo "'select' method avoided\n";
}

$base = new EventBase($cfg);

echo "Features:\n";
$features = $base->getFeatures();
($features & EventConfig::FEATURE_ET) and print "ET - edge-triggered IO\n";
($features & EventConfig::FEATURE_O1) and print "O1 - O(1) operation for adding/deleting events\n";
($features & EventConfig::FEATURE_FDS) and print "FDS - arbitrary file descriptor types, and not just sockets\n";
?>
```

### See Also

- EventBase::getMethod() - Returns event method in use
- EventConfig

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbase.getfeatures.php
