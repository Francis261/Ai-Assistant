# RarArchive::getEntry

Source: https://devdocs.io/php/rararchive.getentry

# rar_entry_get

(PECL rar >= 2.0.0)

RarArchive::getEntry -- rar_entry_get — Get entry object from the RAR archive

### Description

Object-oriented style (method):

```
public RarArchive::getEntry(string $entryname): RarEntry|false
```

Procedural style:

```
rar_entry_get(RarArchive $rarfile, string $entryname): RarEntry|false
```

Get entry object (file or directory) from the RAR archive.

Note:

You can also get entry objects using RarArchive::getEntries().

Note that a RAR archive can have multiple entries with the same name; this method will retrieve only the first.

### Parameters

A RarArchive object, opened with rar_open().

Path to the entry within the RAR archive.

Note:

The path must be the same returned by RarEntry::getName().

### Return Values

Returns the matching RarEntry object or false on failure.

### Examples

Example #1 Object-oriented style

```
<?php
$rar_arch = RarArchive::open('solid.rar');
if ($rar_arch === FALSE)
    die("Could not open RAR archive.");
$rar_entry = $rar_arch->getEntry('tese.txt');
if ($rar_entry === FALSE)
    die("Could not get such entry");
echo get_class($rar_entry)."\n";
echo $rar_entry;
$rar_arch->close();
?>
```

The above example will output something similar to:

```
RarEntry
RarEntry for file "tese.txt" (23b93a7a)
```

Example #2 Procedural style

```
<?php
$rar_arch = rar_open('solid.rar');
if ($rar_arch === FALSE)
    die("Could not open RAR archive.");
$rar_entry = rar_entry_get($rar_arch, 'tese.txt');
if ($rar_entry === FALSE)
    die("Could not get such entry");
echo get_class($rar_entry)."\n";
echo $rar_entry;
rar_close($rar_arch);
?>
```

### See Also

- RarArchive::getEntries() - Get full list of entries from the RAR archive
- rar:// wrapper

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rararchive.getentry.php
