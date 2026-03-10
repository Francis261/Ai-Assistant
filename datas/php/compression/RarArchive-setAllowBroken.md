# RarArchive::setAllowBroken

Source: https://devdocs.io/php/rararchive.setallowbroken

(PECL rar >= 3.0.0)

RarArchive::setAllowBroken — Whether opening broken archives is allowed

### Description

Object-oriented style (method):

```
public RarArchive::setAllowBroken(bool $allow_broken): bool
```

Procedural style:

```
rar_allow_broken_set(RarArchive $rarfile, bool $allow_broken): bool
```

This method defines whether broken archives can be read or all the operations that attempt to extract the archive entries will fail. Broken archives are archives for which no error is detected when the file is opened but an error occurs when reading the entries.

### Parameters

A RarArchive object, opened with rar_open().

Whether to allow reading broken files (true) or not (false).

### Return Values

Returns true or false on failure. It will only fail if the file has already been closed.

### Examples

Example #1 Object-oriented style

```
<?php
function retnull() { return null; }
$file = dirname(__FILE__) . "/multi_broken.part1.rar";
/* Third argument omits "volume not found" message */
$a = RarArchive::open($file, null, 'retnull');
$a->setAllowBroken(true);
foreach ($a->getEntries() as $e) {
    echo "$e\n";
}
var_dump(count($a));
?>
```

The above example will output something similar to:

```
RarEntry for file "file1.txt" (52b28202)
int(1)
```

Example #2 Procedural style

```
<?php
function retnull() { return null; }
$file = dirname(__FILE__) . "/multi_broken.part1.rar";
/* Third argument omits "volume not found" message */
$a = rar_open($file, null, 'retnull');
rar_allow_broken_set($a, true);
foreach (rar_list($a) as $e) {
    echo "$e\n";
}
var_dump(count($a));
?>
```

### See Also

- RarArchive::isBroken() - Test whether an archive is broken (incomplete)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rararchive.setallowbroken.php
