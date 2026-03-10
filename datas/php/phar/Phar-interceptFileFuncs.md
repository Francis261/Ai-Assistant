# Phar::interceptFileFuncs

Source: https://devdocs.io/php/phar.interceptfilefuncs

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::interceptFileFuncs — Instructs phar to intercept fopen, file_get_contents, opendir, and all of the stat-related functions

### Description

```
final public static Phar::interceptFileFuncs(): void
```

instructs phar to intercept fopen(), readfile(), file_get_contents(), opendir(), and all of the stat-related functions. If any of these functions is called from within a phar archive with a relative path, the call is modified to access a file within the phar archive. Absolute paths are assumed to be attempts to load external files from the filesystem.

This function makes it possible to run PHP applications designed to run off of a hard disk as a phar application.

### Parameters

No parameters.

### Return Values

### Examples

Example #1 A Phar::interceptFileFuncs() example

```
<?php
Phar::interceptFileFuncs();
include 'phar://' . __FILE__ . '/file.php';
?>
```

Assuming that this phar is at /path/to/myphar.phar and it contains file.php and file2.txt, if file.php contains this code:

Example #2 A Phar::interceptFileFuncs() example

```
<?php
echo file_get_contents('file2.txt');
?>
```

Normally PHP would search the current directory for file2.txt, which would translate as the directory of file.php, or the current directory of a command-line user. Phar::interceptFileFuncs() instructs PHP to consider the current directory to be phar:///path/to/myphar.phar/ and so opens phar:///path/to/myphar.phar/file2.txt in the above example code.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.interceptfilefuncs.php
