# RarArchive::close

Source: https://devdocs.io/php/rararchive.close

# rar_close

(PECL rar >= 2.0.0)

RarArchive::close -- rar_close — Close RAR archive and free all resources

### Description

Object-oriented style (method):

```
public RarArchive::close(): bool
```

Procedural style:

```
rar_close(RarArchive $rarfile): bool
```

Close RAR archive and free all allocated resources.

### Parameters

A RarArchive object, opened with rar_open().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Object-oriented style

```
<?php
$rar_arch = RarArchive::open('latest_winrar.rar');
echo $rar_arch."\n";
$rar_arch->close();
echo $rar_arch."\n";
?>
```

The above example will output something similar to:

```
RAR Archive "D:\php_rar\trunk\tests\latest_winrar.rar"
RAR Archive "D:\php_rar\trunk\tests\latest_winrar.rar" (closed)
```

Example #2 Procedural style

```
<?php
$rar_arch = rar_open('latest_winrar.rar');
echo $rar_arch."\n";
rar_close($rar_arch);
echo $rar_arch."\n";
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rararchive.close.php
