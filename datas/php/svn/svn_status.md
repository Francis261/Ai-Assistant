# svn_status

Source: https://devdocs.io/php/function.svn-status

(PECL svn >= 0.1.0)

svn_status — Returns the status of working copy files and directories

### Description

```
svn_status(string $path, int $flags = 0): array
```

Returns the status of working copy files and directories, giving modifications, additions, deletions and other changes to items in the working copy.

### Parameters

Local path to file or directory to retrieve status of.

Note: Relative paths will be resolved as if the current working directory was the one that contains the PHP binary. To use the calling script's working directory, use realpath() or dirname(__FILE__).

Any combination of Svn::NON_RECURSIVE, Svn::ALL (regardless of modification status), Svn::SHOW_UPDATES (entries will be added for items that are out-of-date), Svn::NO_IGNORE (disregard svn:ignore properties when scanning for new files) and Svn::IGNORE_EXTERNALS.

### Return Values

Returns a numerically indexed array of associative arrays detailing the status of items in the repository:

```
Array (
    [0] => Array (
        // information on item
    )
    [1] => ...
)
```

The information on the item is an associative array that can contain the following keys:

These keys are only set if the item is versioned:

```
<?php
if (!defined('svn_wc_schedule_normal')) {
    define('svn_wc_schedule_normal',  0); // nothing special
    define('svn_wc_schedule_add',     1); // item will be added
    define('svn_wc_schedule_delete',  2); // item will be deleted
    define('svn_wc_schedule_replace', 3); // item will be added and deleted
}
?>
```

### Examples

Example #1 Basic example

This example demonstrates a basic, theoretical usage of this function.

```
<?php
print_r(svn_status(realpath('wc')));
?>
```

The above example will output something similar to:

```
Array (
    [0] => Array (
        [path] => /home/bob/wc/sandwich.txt
        [text_status] => 8 // item was modified
        [repos_text_status] => 1 // no information available, use update
        [prop_status] => 3 // no changes
        [repos_prop_status] => 1 // no information available, use update
        [name] => sandwich.txt
        [url] => http://www.example.com/svnroot/deli/trunk/sandwich.txt
        [repos] => http://www.example.com/svnroot/
        [revision] => 123
        [kind] => 1 // file
        [schedule] => 0 // no special actions scheduled
        [cmt_date] => 1165543135
        [cmt_rev] => 120
        [cmt_author] => Alice
        [prop_time] => 1180201728
        [text_time] => 1180201729
    )
)
```

### Notes

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### See Also

- svn_update() - Update working copy
- svn_log() - Returns the commit log messages of a repository URL
- » SVN documentation for svn status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-status.php
