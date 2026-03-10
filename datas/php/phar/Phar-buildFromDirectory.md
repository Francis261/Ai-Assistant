# Phar::buildFromDirectory

Source: https://devdocs.io/php/phar.buildfromdirectory

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::buildFromDirectory — Construct a phar archive from the files within a directory

### Description

```
public Phar::buildFromDirectory(string $directory, string $pattern = ""): array
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

Populate a phar archive from directory contents. The optional second parameter is a regular expression (pcre) that is used to exclude files. Any filename that matches the regular expression will be included, all others will be excluded. For more fine-grained control, use Phar::buildFromIterator().

### Parameters

The full or relative path to the directory that contains all files to add to the archive.

An optional pcre regular expression that is used to filter the list of files. Only file paths matching the regular expression will be included in the archive.

### Return Values

Phar::buildFromDirectory() returns an associative array mapping internal path of file to the full path of the file on the filesystem.

### Errors/Exceptions

This method throws BadMethodCallException when unable to instantiate the internal directory iterators, or a PharException if there were errors saving the phar archive.

### Changelog

### Examples

Example #1 A Phar::buildFromDirectory() example

```
<?php
// create with alias "project.phar"
$phar = new Phar('project.phar', 0, 'project.phar');
// add all files in the project
$phar->buildFromDirectory(dirname(__FILE__) . '/project');
$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));

$phar2 = new Phar('project2.phar', 0, 'project2.phar');
// add all files in the project, only include php files
$phar2->buildFromDirectory(dirname(__FILE__) . '/project', '/\.php$/');
$phar2->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));
?>
```

### See Also

- Phar::buildFromIterator() - Construct a phar archive from an iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.buildfromdirectory.php
