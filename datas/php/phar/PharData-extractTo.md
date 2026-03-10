# PharData::extractTo

Source: https://devdocs.io/php/phardata.extractto

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::extractTo — Extract the contents of a tar/zip archive to a directory

### Description

```
public PharData::extractTo(string $directory, array|string|null $files = null, bool $overwrite = false): bool
```

Extract all files within a tar/zip archive to disk. Extracted files and directories preserve permissions as stored in the archive. The optional parameters allow optional control over which files are extracted, and whether existing files on disk can be overwritten. The second parameter files can be either the name of a file or directory to extract, or an array of names of files and directories to extract. By default, this method will not overwrite existing files, the third parameter can be set to true to enable overwriting of files. This method is similar to ZipArchive::extractTo().

### Parameters

Path to extract the given files to

The name of a file or directory to extract, or an array of files/directories to extract

Set to true to enable overwriting existing files

### Return Values

returns true on success, but it is better to check for thrown exception, and assume success if none is thrown.

### Errors/Exceptions

Throws PharException if errors occur while flushing changes to disk.

### Examples

Example #1 A PharData::extractTo() example

```
<?php
try {
    $phar = new PharData('myphar.tar');
    $phar->extractTo('/full/path'); // extract all files
    $phar->extractTo('/another/path', 'file.txt'); // extract only file.txt
    $phar->extractTo('/this/path',
        array('file1.txt', 'file2.txt')); // extract 2 files only
    $phar->extractTo('/third/path', null, true); // extract all files, and overwrite
} catch (Exception $e) {
    // handle errors
}
?>
```

### Notes

Note:

Windows NTFS file systems do not support some characters in filenames, namely <|>*?":. Filenames with a trailing dot are not supported either. Contrary to some extraction tools, this method does not replace these characters with an underscore, but instead fails to extract such files.

### See Also

- Phar::extractTo() - Extract the contents of a phar archive to a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.extractto.php
