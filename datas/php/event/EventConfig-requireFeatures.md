# EventConfig::requireFeatures

Source: https://devdocs.io/php/eventconfig.requirefeatures

(PECL event >= 1.2.6-beta)

EventConfig::requireFeatures — Enters a required event method feature that the application demands

### Description

```
public EventConfig::requireFeatures( int $feature ): bool
```

Enters a required event method feature that the application demands

### Parameters

Bitmask of required features. See EventConfig::FEATURE_* constants

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 EventConfig::requireFeatures() example

```
<?php
$cfg = new EventConfig();

// Create event_base associated with the config
$base = new EventBase($cfg);

// Require FDS feature
if ($cfg->requireFeatures(EventConfig::FEATURE_FDS)) {
    echo "FDS feature is now required\n";

    $base = new EventBase($cfg);
    ($base->getFeatures() & EventConfig::FEATURE_FDS)
        and print "FDS - arbitrary file descriptor types, and not just sockets\n";
}
?>
```

The above example will output something similar to:

```
FDS feature is now required
FDS - arbitrary file descriptor types, and not just sockets
```

### See Also

- EventBase::getFeatures() - Returns bitmask of features supported

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventconfig.requirefeatures.php
