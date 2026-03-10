# RarArchive::getEntries

Source: https://devdocs.io/php/rararchive.getentries

# rar_list

(PECL rar >= 2.0.0)

RarArchive::getEntries -- rar_list — Get full list of entries from the RAR archive

### Description

Object-oriented style (method):

```
public RarArchive::getEntries(): array|false
```

Procedural style:

```
rar_list(RarArchive $rarfile): array|false
```

Get entries list (files and directories) from the RAR archive.

Note:

If the archive has entries with the same name, this method, together with RarArchive foreach iteration and array-like access with numeric indexes, are the only ones to access all the entries (i.e., RarArchive::getEntry() and the rar:// wrapper are insufficient).

### Parameters

A RarArchive object, opened with rar_open().

### Return Values

rar_list() returns array of RarEntry objects or false on failure.

### Changelog

### Examples

Example #1 Object-oriented style

```
<?php
$rar_arch = RarArchive::open('solid.rar');
if ($rar_arch === FALSE)
    die("Could not open RAR archive.");

$rar_entries = $rar_arch->getEntries();
if ($rar_entries === FALSE)
    die("Could not retrieve entries.");

echo "Found " . count($rar_entries) . " entries.\n";

foreach ($rar_entries as $e) {
    echo $e;
    echo "\n";
}
$rar_arch->close();
?>
```

The above example will output something similar to:

```
Found 2 entries.
RarEntry for file "tese.txt" (23b93a7a)
RarEntry for file "unrardll.txt" (2ed64b6e)
```

Example #2 Procedural style

```
<?php
$rar_arch = rar_open('solid.rar');
if ($rar_arch === FALSE)
    die("Could not open RAR archive.");

$rar_entries = rar_list($rar_arch);
if ($rar_entries === FALSE)
    die("Could retrieve entries.");

echo "Found " . count($rar_entries) . " entries.\n";

foreach ($rar_entries as $e) {
    echo $e;
    echo "\n";
}
rar_close($rar_arch);
?>
```

### See Also

- RarArchive::getEntry() - Get entry object from the RAR archive
- rar:// wrapper

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rararchive.getentries.php
