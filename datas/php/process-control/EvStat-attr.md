# EvStat::attr

Source: https://devdocs.io/php/evstat.attr

(PECL ev >= 0.2.0)

EvStat::attr — Returns the values most recently detected by Ev

### Description

```
public EvStat::attr(): array
```

Returns array of the values most recently detected by Ev

### Parameters

This function has no parameters.

### Return Values

Returns array with the values most recently detect by Ev(without actual stat 'ing):

See stat(2) man page for details.

### Examples

Example #1 Monitor changes of /var/log/messages

```
<?php
// Use 10 second update interval.
$w = new EvStat("/var/log/messages", 8, function ($w) {
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

Ev::run();
?>
```

### See Also

- EvStat::prev() - Returns the previous set of values returned by EvStat::attr
- EvStat::stat() - Initiates the stat call

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evstat.attr.php
