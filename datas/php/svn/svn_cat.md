# svn_cat

Source: https://devdocs.io/php/function.svn-cat

(PECL svn >= 0.1.0)

svn_cat — Returns the contents of a file in a repository

### Description

```
svn_cat(string $repos_url, int $revision_no = ?): string
```

Returns the contents of the URL repos_url to a file in the repository, optionally at revision number revision_no.

### Parameters

String URL path to item in a repository.

Integer revision number of item to retrieve, default is the HEAD revision.

### Return Values

Returns the string contents of the item from the repository on success, and false on failure.

### Examples

Example #1 Basic example

This example retrieves the contents of a file at revision 28:

```
<?php
$contents = svn_cat('http://www.example.com/svnroot/calc/gui.c', 28)
?>
```

### Notes

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### See Also

- svn_list()
- » SVN documentation on svn cat

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-cat.php
