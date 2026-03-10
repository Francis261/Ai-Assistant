# EventConfig::avoidMethod

Source: https://devdocs.io/php/eventconfig.avoidmethod

(PECL event >= 1.2.6-beta)

EventConfig::avoidMethod — Tells libevent to avoid specific event method

### Description

```
public EventConfig::avoidMethod( string $method ): bool
```

Tells libevent to avoid specific event method(backend). See » Creating an event base.

### Parameters

The backend method to avoid. See EventConfig constants.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 EventConfig::avoidMethod() example

```
<?php
$cfg = new EventConfig();
if ($cfg->avoidMethod("select")) {
    echo "'select' method avoided\n";
}
?>
```

### See Also

- EventBase::__construct() - Constructs EventBase object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventconfig.avoidmethod.php
