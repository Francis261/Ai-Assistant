# getlastmod

Source: https://devdocs.io/php/function.getlastmod

(PHP 4, PHP 5, PHP 7, PHP 8)

getlastmod — Gets time of last page modification

### Description

```
getlastmod(): int|false
```

Gets the time of the last modification of the main script of execution.

If you're interested in getting the last modification time of a different file, consider using filemtime().

### Parameters

This function has no parameters.

### Return Values

Returns the time of the last modification of the current page. The value returned is a Unix timestamp, suitable for feeding to date(). Returns false on error.

### Examples

Example #1 getlastmod() example

```
<?php
// outputs e.g. 'Last modified: March 04 1998 20:43:59.'
echo "Last modified: " . date ("F d Y H:i:s.", getlastmod());
?>
```

### See Also

- date() - Format a Unix timestamp
- getmyuid() - Gets PHP script owner's UID
- getmygid() - Get PHP script owner's GID
- get_current_user() - Gets the name of the owner of the current PHP script
- getmyinode() - Gets the inode of the current script
- getmypid() - Gets PHP's process ID
- filemtime() - Gets file modification time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.getlastmod.php
