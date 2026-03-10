# posix_getrlimit

Source: https://devdocs.io/php/function.posix-getrlimit

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getrlimit — Return info about system resource limits

### Description

```
posix_getrlimit(?int $resource = null): array|false
```

posix_getrlimit() returns an array of information about the current resource's soft and hard limits.

Each resource has an associated soft and hard limit. The soft limit is the value that the kernel enforces for the corresponding resource. The hard limit acts as a ceiling for the soft limit. An unprivileged process may only set its soft limit to a value from 0 to the hard limit, and irreversibly lower its hard limit.

### Parameters

If null, all current resource limits will be returned. Otherwise, specify the resource limit constant to retrieve a specific limit.

### Return Values

Returns an associative array of elements for each limit that is defined. Each limit has a soft and a hard limit.

### Changelog

### Examples

Example #1 Example use of posix_getrlimit()

```
<?php

$limits = posix_getrlimit();

print_r($limits);
?>
```

The above example will output something similar to:

```
Array
(
    [soft core] => 0
    [hard core] => unlimited
    [soft data] => unlimited
    [hard data] => unlimited
    [soft stack] => 8388608
    [hard stack] => unlimited
    [soft totalmem] => unlimited
    [hard totalmem] => unlimited
    [soft rss] => unlimited
    [hard rss] => unlimited
    [soft maxproc] => unlimited
    [hard maxproc] => unlimited
    [soft memlock] => unlimited
    [hard memlock] => unlimited
    [soft cpu] => unlimited
    [hard cpu] => unlimited
    [soft filesize] => unlimited
    [hard filesize] => unlimited
    [soft openfiles] => 1024
    [hard openfiles] => 1024
)
```

### See Also

- man page GETRLIMIT(2)
- posix_setrlimit() - Set system resource limits

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getrlimit.php
