# PharData::buildFromDirectory

Source: https://devdocs.io/php/phardata.buildfromdirectory

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::buildFromDirectory — Construct a tar/zip archive from the files within a directory

### Description

```
public PharData::buildFromDirectory(string $directory, string $pattern = ""): array
```

Populate a tar/zip archive from directory contents. The optional second parameter is a regular expression (pcre) that is used to exclude files. Any filename that matches the regular expression will be included, all others will be excluded. For more fine-grained control, use PharData::buildFromIterator().

### Parameters

The full or relative path to the directory that contains all files to add to the archive.

An optional pcre regular expression that is used to filter the list of files. Only file paths matching the regular expression will be included in the archive.

### Return Values

Phar::buildFromDirectory() returns an associative array mapping internal path of file to the full path of the file on the filesystem, or false on failure.

### Errors/Exceptions

This method throws BadMethodCallException when unable to instantiate the internal directory iterators, or a PharException if there were errors saving the phar archive.

### Changelog

### Examples

Example #1 A PharData::buildFromDirectory() example

```
<?php
$phar = new PharData('project.tar');
// add all files in the project
$phar->buildFromDirectory(dirname(__FILE__) . '/project');

$phar2 = new PharData('project2.zip');
// add all files in the project, only include php files
$phar2->buildFromDirectory(dirname(__FILE__) . '/project', '/\.php$/');
?>
```

### See Also

- Phar::buildFromDirectory() - Construct a phar archive from the files within a directory
- PharData::buildFromIterator() - Construct a tar or zip archive from an iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.buildfromdirectory.php
