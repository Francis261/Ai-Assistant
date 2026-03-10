# Phar::buildFromIterator

Source: https://devdocs.io/php/phar.buildfromiterator

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::buildFromIterator — Construct a phar archive from an iterator

### Description

```
public Phar::buildFromIterator(Traversable $iterator, ?string $baseDirectory = null): array
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

Populate a phar archive from an iterator. Two styles of iterators are supported, iterators that map the filename within the phar to the name of a file on disk, and iterators like DirectoryIterator that return SplFileInfo objects. For iterators that return SplFileInfo objects, the second parameter is required.

### Parameters

Any iterator that either associatively maps phar file to location or returns SplFileInfo objects

For iterators that return SplFileInfo objects, the portion of each file's full path to remove when adding to the phar archive

### Return Values

Phar::buildFromIterator() returns an associative array mapping internal path of file to the full path of the file on the filesystem.

### Errors/Exceptions

This method returns UnexpectedValueException when the iterator returns incorrect values, such as an integer key instead of a string, a BadMethodCallException when an SplFileInfo-based iterator is passed without a baseDirectory parameter, or a PharException if there were errors saving the phar archive.

### Changelog

### Examples

Example #1 A Phar::buildFromIterator() with SplFileInfo

For most phar archives, the archive will reflect an actual directory layout, and the second style is the most useful. For instance, to create a phar archive containing the files in this sample directory layout:

```
/path/to/project/
                 config/
                        dist.xml
                        debug.xml
                 lib/
                     file1.php
                     file2.php
                 src/
                     processthing.php
                 www/
                     index.php
                 cli/
                     index.php
```

This code could be used to add these files to the "project.phar" phar archive:

```
<?php
// create with alias "project.phar"
$phar = new Phar('project.phar', 0, 'project.phar');
$phar->buildFromIterator(
    new RecursiveIteratorIterator(
     new RecursiveDirectoryIterator('/path/to/project')),
    '/path/to/project');
$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));
?>
```

The file project.phar can then be used immediately. Phar::buildFromIterator() does not set values such as compression, metadata, and this can be done after creating the phar archive.

As an interesting note, Phar::buildFromIterator() can also be used to copy the contents of an existing phar archive, as the Phar object descends from DirectoryIterator:

```
<?php
// create with alias "project.phar"
$phar = new Phar('project.phar', 0, 'project.phar');
$phar->buildFromIterator(
    new RecursiveIteratorIterator(
     new Phar('/path/to/anotherphar.phar')),
    'phar:///path/to/anotherphar.phar/path/to/project');
$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));
?>
```

Example #2 A Phar::buildFromIterator() with other iterators

The second form of the iterator can be used with any iterator that returns a key => value mapping, such as an ArrayIterator:

```
<?php
// create with alias "project.phar"
$phar = new Phar('project.phar', 0, 'project.phar');
$phar->buildFromIterator(
    new ArrayIterator(
     array(
        'internal/file.php' => dirname(__FILE__) . '/somefile.php',
        'another/file.jpg' => fopen('/path/to/bigfile.jpg', 'rb'),
     )));
$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));
?>
```

### See Also

- Phar::buildFromDirectory() - Construct a phar archive from the files within a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.buildfromiterator.php
