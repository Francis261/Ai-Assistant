# ZipArchive::addPattern

Source: https://devdocs.io/php/ziparchive.addpattern

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL zip >= 1.9.0)

ZipArchive::addPattern — Add files from a directory by PCRE pattern

### Description

```
public ZipArchive::addPattern(string $pattern, string $path = ".", array $options = []): array|false
```

Add files from a directory which match the regular expression pattern. The operation is not recursive. The pattern will be matched against the file name only.

### Parameters

A PCRE pattern against which files will be matched.

The directory that will be scanned. Defaults to the current working directory.

An associative array of options accepted by ZipArchive::addGlob().

### Return Values

An array of added files on success or false on failure

### Examples

Example #1 ZipArchive::addPattern() example

Add all php scripts and text files from current directory

```
<?php
$zip = new ZipArchive();
$ret = $zip->open('application.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);
if ($ret !== TRUE) {
    printf('Failed with code %d', $ret);
} else {
    $directory = realpath('.');
    $options = array('add_path' => 'sources/', 'remove_path' => $directory);
    $zip->addPattern('/\.(?:php|txt)$/', $directory, $options);
    $zip->close();
}
?>
```

### See Also

- ZipArchive::addFile() - Adds a file to a ZIP archive from the given path
- ZipArchive::addGlob() - Add files from a directory by glob pattern

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.addpattern.php
