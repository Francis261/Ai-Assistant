# RarArchive::isBroken

Source: https://devdocs.io/php/rararchive.isbroken

# rar_broken_is

(PECL rar >= 3.0.0)

RarArchive::isBroken -- rar_broken_is — Test whether an archive is broken (incomplete)

### Description

Object-oriented style (method):

```
public RarArchive::isBroken(): bool
```

Procedural style:

```
rar_broken_is(RarArchive $rarfile): bool
```

This function determines whether an archive is incomplete, i.e., if a volume is missing or a volume is truncated.

### Parameters

A RarArchive object, opened with rar_open().

### Return Values

Returns true if the archive is broken, false otherwise. This function may also return false if the passed file has already been closed. The only way to tell the two cases apart is to enable exceptions with RarException::setUsingExceptions(); however, this should be unnecessary as a program should not operate on closed files.

### Examples

Example #1 Object-oriented style

```
<?php
function retnull() { return null; }
$file = dirname(__FILE__) . "/multi_broken.part1.rar";
/* Third argument is used to omit notice */
$arch = RarArchive::open($file, null, 'retnull');
var_dump($arch->isBroken());
?>
```

The above example will output something similar to:

```
bool(true)
```

Example #2 Procedural style

```
<?php
function retnull() { return null; }
$file = dirname(__FILE__) . "/multi_broken.part1.rar";
/* Third argument is used to omit notice */
$arch = rar_open($file, null, 'retnull');
var_dump(rar_broken_is($arch));
?>
```

### See Also

- RarArchive::setAllowBroken() - Whether opening broken archives is allowed

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rararchive.isbroken.php
