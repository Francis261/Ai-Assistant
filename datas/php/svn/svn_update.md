# svn_update

Source: https://devdocs.io/php/function.svn-update

(PECL svn >= 0.1.0)

svn_update — Update working copy

### Description

```
svn_update(string $path, int $revno = SVN_REVISION_HEAD, bool $recurse = true): int
```

Update working copy at path to revision revno. If recurse is true, directories will be recursively updated.

### Parameters

Path to local working copy.

Note: Relative paths will be resolved as if the current working directory was the one that contains the PHP binary. To use the calling script's working directory, use realpath() or dirname(__FILE__).

Revision number to update to, default is SVN_REVISION_HEAD.

Whether or not to recursively update directories.

### Return Values

Returns new revision number on success, returns false on failure.

### Examples

Example #1 Basic example

This example demonstrates basic usage of this function:

```
<?php
echo svn_update(realpath('working-copy'));
?>
```

The above example will output something similar to:

```
234
```

### Notes

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### See Also

- svn_checkout() - Checks out a working copy from the repository
- svn_commit() - Sends changes from the local working copy to the repository
- » SVN documentation for svn update

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-update.php
