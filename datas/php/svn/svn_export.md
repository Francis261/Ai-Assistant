# svn_export

Source: https://devdocs.io/php/function.svn-export

(PECL svn >= 0.3.0)

svn_export — Export the contents of a SVN directory

### Description

```
svn_export(
 string $frompath,
 string $topath,
 bool $working_copy = true,
 int $revision_no = -1
): bool
```

Export the contents of either a working copy or repository into a 'clean' directory.

### Parameters

The path to the current repository.

The path to the new repository.

If true, it will export uncommitted files from the working copy.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 svn_export() example

```
<?php
$working_dir     = '../';
$new_working_dir = '/home/user/devel/foo/trunk';

svn_export($working_dir, $new_working_dir);
?>
```

### See Also

- svn_import() - Imports an unversioned path into a repository

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-export.php
