# EventConfig::__construct

Source: https://devdocs.io/php/eventconfig.construct

(PECL event >= 1.2.6-beta)

EventConfig::__construct — Constructs EventConfig object

### Description

```
public EventConfig::__construct()
```

Constructs EventConfig object which could be passed to EventBase::__construct() constructor.

### Parameters

This function has no parameters.

### Examples

Example #1 EventConfig::__construct() example

```
<?php
// Avoiding "select" method
$cfg = new EventConfig();
if ($cfg->avoidMethod("select")) {
    echo "'select' method avoided\n";
}

// Create event_base associated with the config
$base = new EventBase($cfg);

/* Now $base is configured to avoid select backend(method) */
?>
```

### See Also

- EventBase::__construct() - Constructs EventBase object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventconfig.construct.php
