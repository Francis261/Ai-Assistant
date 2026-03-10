# svn_cleanup

Source: https://devdocs.io/php/function.svn-cleanup

(PECL svn >= 0.1.0)

svn_cleanup — Recursively cleanup a working copy directory, finishing incomplete operations and removing locks

### Description

```
svn_cleanup(string $workingdir): bool
```

Recursively cleanup working copy directory workingdir, finishing any incomplete operations and removing working copy locks. Use when a working copy is in limbo and needs to be usable again.

### Parameters

String path to local working directory to cleanup

Note: Relative paths will be resolved as if the current working directory was the one that contains the PHP binary. To use the calling script's working directory, use realpath() or dirname(__FILE__).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Basic example

This example demonstrates clean up of a working copy in a directory named help-me:

```
<?php
svn_cleanup(realpath('help-me'));
?>
```

The realpath() call is necessary due to SVN's quirky handling of relative paths.

### Notes

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### See Also

- update()
- » SVN documentation on svn cleanup

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-cleanup.php
