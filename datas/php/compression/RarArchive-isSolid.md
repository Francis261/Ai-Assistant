# RarArchive::isSolid

Source: https://devdocs.io/php/rararchive.issolid

# rar_solid_is

(PECL rar >= 2.0.0)

RarArchive::isSolid -- rar_solid_is — Check whether the RAR archive is solid

### Description

Object-oriented style (method):

```
public RarArchive::isSolid(): bool
```

Procedural style:

```
rar_solid_is(RarArchive $rarfile): bool
```

Check whether the RAR archive is solid. Individual file extraction is slower on solid archives.

### Parameters

A RarArchive object, opened with rar_open().

### Return Values

Returns true if the archive is solid, false otherwise.

### Examples

Example #1 Object-oriented style

```
<?php
$arch1 = RarArchive::open("store_method.rar");
$arch2 = RarArchive::open("solid.rar");
echo "$arch1: " . ($arch1->isSolid()?'yes':'no') ."\n";
echo "$arch2: " . ($arch2->isSolid()?'yes':'no') . "\n";
?>
```

The above example will output something similar to:

```
RAR Archive "C:\php_rar\trunk\tests\store_method.rar": no
RAR Archive "C:\php_rar\trunk\tests\solid.rar": yes
```

Example #2 Procedural style

```
<?php
$arch1 = rar_open("store_method.rar");
$arch2 = rar_open("solid.rar");
echo "$arch1: " . (rar_solid_is($arch1)?'yes':'no') ."\n";
echo "$arch2: " . (rar_solid_is($arch2)?'yes':'no') . "\n";
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rararchive.issolid.php
