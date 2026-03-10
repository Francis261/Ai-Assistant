# RarArchive::getComment

Source: https://devdocs.io/php/rararchive.getcomment

# rar_comment_get

(PECL rar >= 2.0.0)

RarArchive::getComment -- rar_comment_get — Get comment text from the RAR archive

### Description

Object-oriented style (method):

```
public RarArchive::getComment(): string
```

Procedural style:

```
rar_comment_get(RarArchive $rarfile): string
```

Get the (global) comment stored in the RAR archive. It may be up to 64 KiB long.

Note:

This extension does not support comments at the entry level.

### Parameters

A RarArchive object, opened with rar_open().

### Return Values

Returns the comment or null if there is none.

Note:

RAR has currently no support for unicode comments. The encoding of the result of this function is not specified, but it will probably be Windows-1252.

### Examples

Example #1 Object-oriented style

```
<?php
$rar_arch = RarArchive::open('commented.rar'); 
echo $rar_arch->getComment();
?>
```

The above example will output something similar to:

```
This is the comment of the file commented.rar.
```

Example #2 Procedural style

```
<?php
$rar_arch = rar_open('commented.rar'); 
echo rar_comment_get($rar_arch);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rararchive.getcomment.php
