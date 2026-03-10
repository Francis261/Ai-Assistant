# svn_add

Source: https://devdocs.io/php/function.svn-add

(PECL svn >= 0.1.0)

svn_add — Schedules the addition of an item in a working directory

### Description

```
svn_add(string $path, bool $recursive = true, bool $force = false): bool
```

Adds the file, directory or symbolic link at path to the working directory. The item will be added to the repository the next time you call svn_commit() on the working copy.

### Parameters

Path of item to add.

Note: Relative paths will be resolved as if the current working directory was the one that contains the PHP binary. To use the calling script's working directory, use realpath() or dirname(__FILE__).

If item is directory, whether or not to recursively add all of its contents. Default is true

If true, Subversion will recurse into already versioned directories in order to add unversioned files that may be hiding in those directories. Default is false

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 svn_add() example

In a working directory where svn status returns:

```
$ svn status
?      foobar.txt
```

...this code:

```
<?php
svn_add('foobar.txt');
?>
```

...will schedule foobar.txt for addition into the repository.

### Notes

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### See Also

- » SVN documentation on svn add

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-add.php
