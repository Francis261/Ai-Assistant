# svn_revert

Source: https://devdocs.io/php/function.svn-revert

(PECL svn >= 0.3.0)

svn_revert — Revert changes to the working copy

### Description

```
svn_revert(string $path, bool $recursive = false): bool
```

Revert any local changes to the path in a working copy.

### Parameters

The path to the working repository.

Optionally make recursive changes.

### Return Values

Returns true on success or false on failure.

### See Also

- svn_delete() - Delete items from a working copy or repository
- svn_export() - Export the contents of a SVN directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-revert.php
