# RarArchive::__toString

Source: https://devdocs.io/php/rararchive.tostring

(PECL rar >= 2.0.0)

RarArchive::__toString — Get text representation

### Description

```
public RarArchive::__toString(): string
```

Provides a string representation for this RarArchive object. It currently shows the full path name of the archive volume that was opened and whether the resource is valid or was already closed through a call to RarArchive::close().

This method may be used only for debugging purposes, as there are no guarantees as to which information the result contains or how it is formatted.

### Parameters

This function has no parameters.

### Return Values

A textual representation of this RarArchive object. The content of this representation is unspecified.

### Examples

Example #1 RarArchive::__toString() example

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

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rararchive.tostring.php
