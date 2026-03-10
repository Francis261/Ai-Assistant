# posix_getgroups

Source: https://devdocs.io/php/function.posix-getgroups

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getgroups — Return the group set of the current process

### Description

```
posix_getgroups(): array|false
```

Gets the group set of the current process.

### Parameters

This function has no parameters.

### Return Values

Returns an array of integers containing the numeric group ids of the group set of the current process, or false on failure.

### Examples

Example #1 Example use of posix_getgroups()

```
<?php

$groups = posix_getgroups();

print_r($groups);
?>
```

The above example will output something similar to:

```
Array
(
    [0] => 4
    [1] => 20
    [2] => 24
    [3] => 25
    [4] => 29
    [5] => 30
    [6] => 33
    [7] => 44
    [8] => 46
    [9] => 104
    [10] => 109
    [11] => 110
    [12] => 1000
)
```

### See Also

- posix_getgrgid() - Return info about a group by group id

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getgroups.php
