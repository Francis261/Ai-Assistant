# EventConfig::setFlags

Source: https://devdocs.io/php/eventconfig.setflags

(PECL event >= 2.0.2-alpha)

EventConfig::setFlags — Sets one or more flags to configure the eventual EventBase will be initialized

### Description

```
public EventConfig::setFlags( int $flags ): bool
```

Sets one or more flags to configure what parts of the eventual EventBase will be initialized, and how they'll work.

### Parameters

One of EventBase::LOOP_* constants. See EventBase constants.

### Return Values

Returns true on success or false on failure.

### See Also

- EventBase::getFeatures() - Returns bitmask of features supported

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventconfig.setflags.php
