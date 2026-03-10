# chgrp

Source: https://devdocs.io/php/function.chgrp

(PHP 4, PHP 5, PHP 7, PHP 8)

chgrp — Changes file group

### Description

```
chgrp(string $filename, string|int $group): bool
```

Attempts to change the group of the file filename to group.

Only the superuser may change the group of a file arbitrarily; other users may change the group of a file to any group of which that user is a member.

### Parameters

Path to the file.

A group name or number.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Changing a file's group

```
<?php
$filename = 'shared_file.txt';
$format = "%s's Group ID @ %s: %d\n";
printf($format, $filename, date('r'), filegroup($filename));
chgrp($filename, 8);
clearstatcache(); // do not cache filegroup() results
printf($format, $filename, date('r'), filegroup($filename));
?>
```

### Notes

Note: This function will not work on remote files as the file to be examined must be accessible via the server's filesystem.

Note: On Windows, this function fails silently when applied on a regular file.

### See Also

- chown() - Changes file owner
- chmod() - Changes file mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.chgrp.php
