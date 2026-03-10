# EvEmbed::sweep

Source: https://devdocs.io/php/evembed.sweep

(PECL ev >= 0.2.0)

EvEmbed::sweep — Make a single, non-blocking sweep over the embedded loop

### Description

```
public EvEmbed::sweep(): void
```

Make a single, non-blocking sweep over the embedded loop. Works similarly to the following, but in the most appropriate way for embedded loops:

```
<?php
$other->start(Ev::RUN_NOWAIT);
?>
```

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- EvWatcher::start() - Starts the watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evembed.sweep.php
