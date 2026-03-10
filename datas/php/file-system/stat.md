# stat

Source: https://devdocs.io/php/function.stat

(PHP 4, PHP 5, PHP 7, PHP 8)

stat — Gives information about a file

### Description

```
stat(string $filename): array|false
```

Gathers the statistics of the file named by filename. If filename is a symbolic link, statistics are from the file itself, not the symlink. Prior to PHP 7.4.0, on Windows NTS builds the size, atime, mtime and ctime statistics have been from the symlink, in this case.

lstat() is identical to stat() except it would instead be based off the symlinks status.

### Parameters

Path to the file.

### Return Values

* On Windows this will always be 0.

** Only valid on systems supporting the st_blksize type - other systems (e.g. Windows) return -1.

*** On Windows, as of PHP 7.4.0, this is the serial number of the volume that contains the file, which is a 64-bit unsigned integer, so may overflow. Previously, it was the numeric representation of the drive letter (e.g. 2 for C:) for stat(), and 0 for lstat().

**** On Windows, as of PHP 7.4.0, this is the identifier associated with the file, which is a 64-bit unsigned integer, so may overflow. Previously, it was always 0.

***** On Windows, the writable permission bit is set according to the read-only file attribute, and the same value is reported for all users, group and owner. The ACL is not taken into account, contrary to is_writable().

The value of mode contains information read by several functions. When written in octal, starting from the right, the first three digits are returned by chmod(). The next digit is ignored by PHP. The next two digits indicate the file type:

In case of error, stat() returns false.

Note: Because PHP's integer type is signed and many platforms use 32bit integers, some filesystem functions may return unexpected results for files which are larger than 2GB.

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### Changelog

### Examples

Example #1 stat() example

```
<?php
/* Get file stat */
$stat = stat('C:\php\php.exe');

/*
 * Print file access time, this is the same 
 * as calling fileatime()
 */
echo 'Access time: ' . $stat['atime'];

/*
 * Print file modification time, this is the 
 * same as calling filemtime()
 */
echo 'Modification time: ' . $stat['mtime'];

/* Print the device number */
echo 'Device number: ' . $stat['dev'];
?>
```

Example #2 Using stat() information together with touch()

```
<?php
/* Get file stat */
$stat = stat('C:\php\php.exe');

/* Did we failed to get stat information? */
if (!$stat) {
    echo 'stat() call failed...';
} else {
    /*
     * We want the access time to be 1 week 
     * after the current access time.
     */
    $atime = $stat['atime'] + 604800;

    /* Touch the file */
    if (!touch('some_file.txt', time(), $atime)) {
        echo 'Failed to touch file...';
    } else {
        echo 'touch() returned success...';
    }
}
?>
```

### Notes

Note:

Note that time resolution may differ from one file system to another.

Note: The results of this function are cached. See clearstatcache() for more details.

As of PHP 5.0.0, this function can also be used with some URL wrappers. Refer to Supported Protocols and Wrappers to determine which wrappers support stat() family of functionality.

### See Also

- lstat() - Gives information about a file or symbolic link
- fstat() - Gets information about a file using an open file pointer
- filemtime() - Gets file modification time
- filegroup() - Gets file group
- SplFileInfo

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stat.php
