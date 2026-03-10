# ZipArchive::locateName

Source: https://devdocs.io/php/ziparchive.locatename

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.5.0)

ZipArchive::locateName — Returns the index of the entry in the archive

### Description

```
public ZipArchive::locateName(string $name, int $flags = 0): int|false
```

Locates an entry using its name.

### Parameters

The name of the entry to look up

The flags are specified by ORing the following values, or 0 for none of them.

- ZipArchive::FL_NOCASE
- ZipArchive::FL_NODIR

ZipArchive::FL_NOCASE

ZipArchive::FL_NODIR

### Return Values

Returns the index of the entry on success or false on failure.

### Examples

Example #1 Create an archive and then use it with ZipArchive::locateName()

```
<?php
$file = 'testlocate.zip';

$zip = new ZipArchive;
if ($zip->open($file, ZipArchive::CREATE) !== TRUE) {
    exit('failed');
}

$zip->addFromString('entry1.txt', 'entry #1');
$zip->addFromString('entry2.txt', 'entry #2');
$zip->addFromString('dir/entry2d.txt', 'entry #2');

if ($zip->status !== ZipArchive::ER_OK) {
    echo "failed to write zip\n";
}
$zip->close();

if ($zip->open($file) !== TRUE) {
    exit('failed');
}

echo $zip->locateName('entry1.txt') . "\n";
echo $zip->locateName('eNtry2.txt') . "\n";
echo $zip->locateName('eNtry2.txt', ZipArchive::FL_NOCASE) . "\n";
echo $zip->locateName('enTRy2d.txt', ZipArchive::FL_NOCASE|ZipArchive::FL_NODIR) . "\n";
$zip->close();

?>
```

The above example will output:

```
0

1
2
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.locatename.php
