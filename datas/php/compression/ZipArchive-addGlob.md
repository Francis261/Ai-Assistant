# ZipArchive::addGlob

Source: https://devdocs.io/php/ziparchive.addglob

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL zip >= 1.9.0)

ZipArchive::addGlob — Add files from a directory by glob pattern

### Description

```
public ZipArchive::addGlob(string $pattern, int $flags = 0, array $options = []): array|false
```

Add files from a directory which match the glob pattern.

Note: For maximum portability, it is recommended to always use forward slashes (/) as directory separator in ZIP filenames.

### Parameters

A glob() pattern against which files will be matched.

A bit mask of glob() flags.

An associative array of options. Available options are:

- "add_path" Prefix to prepend when translating to the local path of the file within the archive. This is applied after any remove operations defined by the "remove_path" or "remove_all_path" options.
- "remove_path" Prefix to remove from matching file paths before adding to the archive.
- "remove_all_path" true to use the file name only and add to the root of the archive.
- "flags" Bitmask consisting of ZipArchive::FL_OVERWRITE, ZipArchive::FL_ENC_GUESS, ZipArchive::FL_ENC_UTF_8, ZipArchive::FL_ENC_CP437, ZipArchive::FL_OPEN_FILE_NOW. The behaviour of these constants is described on the ZIP constants page.
- "comp_method" Compression method, one of the ZipArchive::CM_* constants.
- "comp_flags" Compression level.
- "enc_method" Encryption method, one of the ZipArchive::EM_* constants.
- "enc_password" Password used for encryption.

"add_path"

Prefix to prepend when translating to the local path of the file within the archive. This is applied after any remove operations defined by the "remove_path" or "remove_all_path" options.

"remove_path"

Prefix to remove from matching file paths before adding to the archive.

"remove_all_path"

true to use the file name only and add to the root of the archive.

"flags"

Bitmask consisting of ZipArchive::FL_OVERWRITE, ZipArchive::FL_ENC_GUESS, ZipArchive::FL_ENC_UTF_8, ZipArchive::FL_ENC_CP437, ZipArchive::FL_OPEN_FILE_NOW. The behaviour of these constants is described on the ZIP constants page.

"comp_method"

Compression method, one of the ZipArchive::CM_* constants.

"comp_flags"

Compression level.

"enc_method"

Encryption method, one of the ZipArchive::EM_* constants.

"enc_password"

Password used for encryption.

### Return Values

An array of added files on success or false on failure

### Changelog

### Examples

Example #1 ZipArchive::addGlob() example

Add all php scripts and text files from current working directory

```
<?php
$zip = new ZipArchive();
$ret = $zip->open('application.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);
if ($ret !== TRUE) {
    printf('Failed with code %d', $ret);
} else {
    $options = array('add_path' => 'sources/', 'remove_all_path' => TRUE);
    $zip->addGlob('*.{php,txt}', GLOB_BRACE, $options);
    $zip->close();
}
?>
```

### See Also

- ZipArchive::addFile() - Adds a file to a ZIP archive from the given path
- ZipArchive::addPattern() - Add files from a directory by PCRE pattern

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.addglob.php
