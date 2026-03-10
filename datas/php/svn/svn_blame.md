# svn_blame

Source: https://devdocs.io/php/function.svn-blame

(PECL svn >= 0.3.0)

svn_blame — Get the SVN blame for a file

### Description

```
svn_blame(string $repository_url, int $revision_no = SVN_REVISION_HEAD): array
```

Get the SVN blame of a file from a repository URL.

### Parameters

The repository URL.

The revision number.

### Return Values

An array of SVN blame information separated by line which includes the revision number, line number, line of code, author, and date.

### Examples

Example #1 svn_blame() example

```
<?php
$svnurl = 'http://svn.example.org/svnroot/foo/trunk/index.php';

print_r( svn_blame($svnurl) );

?>
```

The above example will output something similar to:

```
Array
(
    [0] = Array
          (
           [rev] = 1
           [line_no] = 1
           [line] = Hello World
           [author] = joesmith
           [date] = 2007-07-02T05:51:26.628396Z
          )
    [1] = Array
          ...
```

### See Also

- svn_diff() - Recursively diffs two paths
- svn_logs()
- svn_status() - Returns the status of working copy files and directories

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-blame.php
