# chown

Source: https://devdocs.io/php/function.chown

(PHP 4, PHP 5, PHP 7, PHP 8)

chown — Changes file owner

### Description

```
chown(string $filename, string|int $user): bool
```

Attempts to change the owner of the file filename to user user. Only the superuser may change the owner of a file.

### Parameters

Path to the file.

A user name or number.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Simple chown() usage

```
<?php

// File name and username to use
$file_name= "foo.php";
$path = "/home/sites/php.net/public_html/sandbox/" . $file_name ;
$user_name = "root";

// Set the user
chown($path, $user_name);

// Check the result
$stat = stat($path);
print_r(posix_getpwuid($stat['uid']));

?>
```

The above example will output something similar to:

```
Array
(
    [name] => root
    [passwd] => x
    [uid] => 0
    [gid] => 0
    [gecos] => root
    [dir] => /root
    [shell] => /bin/bash
)
```

### Notes

Note: This function will not work on remote files as the file to be examined must be accessible via the server's filesystem.

Note: On Windows, this function fails silently when applied on a regular file.

### See Also

- chmod() - Changes file mode
- chgrp() - Changes file group

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.chown.php
