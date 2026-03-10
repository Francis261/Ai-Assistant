# EvStat::__construct

Source: https://devdocs.io/php/evstat.construct

(PECL ev >= 0.2.0)

EvStat::__construct — Constructs EvStat watcher object

### Description

Constructs EvStat watcher object and starts the watcher automatically.

### Parameters

The path to wait for status changes on.

Hint on how quickly a change is expected to be detected and should normally be specified as 0.0 to let libev choose a suitable value.

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Examples

Example #1 Monitor changes of /var/log/messages

```
<?php

// Use 10 second update interval.
$w = new EvStat("/var/log/messages", 10, function ($w) {
    echo "/var/log/messages changed\n";

    $attr = $w->attr();

    if ($attr['nlink']) {
        printf("Current size: %ld\n", $attr['size']);
        printf("Current atime: %ld\n", $attr['atime']);
        printf("Current mtime: %ld\n", $attr['mtime']);
    } else {
        fprintf(STDERR, "`messages` file is not there!");
        $w->stop();
    }
});

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evstat.construct.php
