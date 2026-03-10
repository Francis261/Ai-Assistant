# EventBase::getMethod

Source: https://devdocs.io/php/eventbase.getmethod

(PECL event >= 1.2.6-beta)

EventBase::getMethod — Returns event method in use

### Description

```
public EventBase::getMethod(): string
```

### Parameters

This function has no parameters.

### Return Values

String representing used event method(backend).

### Examples

Example #1 EventBase::getMethod() example

```
<?php
$cfg = new EventConfig();
if ($cfg->avoidMethod("select")) {
    echo "'select' method avoided\n";
}

// Create event_base associated with the config
$base = new EventBase($cfg);
echo "Event method used: ", $base->getMethod(), PHP_EOL;

?>
```

The above example will output something similar to:

```
`select' method avoided
Event method used: epoll
```

### See Also

- EventBase::getFeatures() - Returns bitmask of features supported

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbase.getmethod.php
