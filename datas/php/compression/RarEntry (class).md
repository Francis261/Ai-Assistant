# The RarEntry class

Source: https://devdocs.io/php/class.rarentry

## Introduction

(PECL rar >= 0.1)

A RAR entry, representing a directory or a compressed file inside a RAR archive.

## Class synopsis

```
public extract(
 string $dir,
 string $filepath = "",
 string $password = NULL,
 bool $extended_data = false
): bool
```

```
public getAttr(): int
```

```
public getCrc(): string
```

```
public getFileTime(): string
```

```
public getHostOs(): int
```

```
public getMethod(): int
```

```
public getName(): string
```

```
public getPackedSize(): int
```

```
public getStream(string $password = ?): resource|false
```

```
public getUnpackedSize(): int
```

```
public getVersion(): int
```

```
public isDirectory(): bool
```

```
public isEncrypted(): bool
```

```
public __toString(): string
```

## Predefined Constants

If the return value of RarEntry::getHostOs() equals this constant, MS-DOS was used to add this entry. Use instead of RAR_HOST_MSDOS.

If the return value of RarEntry::getHostOs() equals this constant, OS/2 was used to add this entry. Intended to replace RAR_HOST_OS2.

If the return value of RarEntry::getHostOs() equals this constant, Microsoft Windows was used to add this entry. Intended to replace RAR_HOST_WIN32.

If the return value of RarEntry::getHostOs() equals this constant, an unspecified UNIX OS was used to add this entry. Intended to replace RAR_HOST_UNIX.

If the return value of RarEntry::getHostOs() equals this constant, Mac OS was used to add this entry.

If the return value of RarEntry::getHostOs() equals this constant, BeOS was used to add this entry. Intended to replace RAR_HOST_BEOS.

Bit that represents a Windows entry with a read-only attribute. To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a hidden attribute. To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a system attribute. To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a directory attribute (entry is a directory). To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows. See also RarEntry::isDirectory(), which also works with entries that were not added in WinRAR.

Bit that represents a Windows entry with an archive attribute. To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a device attribute. To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a normal file attribute (entry is NOT a directory). To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows. See also RarEntry::isDirectory(), which also works with entries that were not added in WinRAR.

Bit that represents a Windows entry with a temporary attribute. To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a sparse file attribute (file is an NTFS sparse file). To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a reparse point attribute (entry is an NTFS reparse point, e.g. a directory junction or a mount file system). To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a compressed attribute (NTFS only). To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with an offline attribute (entry is offline and not accessible). To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a not content indexed attribute (entry is to be indexed). To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with an encrypted attribute (NTFS only). To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a Windows entry with a virtual attribute. To be used with RarEntry::getAttr() on entries whose host OS is Microsoft Windows.

Bit that represents a UNIX entry that is world executable. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents a UNIX entry that is world writable. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents a UNIX entry that is world readable. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents a UNIX entry that is group executable. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents a UNIX entry that is group writable. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents a UNIX entry that is group readable. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents a UNIX entry that is owner executable. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents a UNIX entry that is owner writable. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents a UNIX entry that is owner readable. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents the UNIX sticky bit. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents the UNIX setgid attribute. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Bit that represents the UNIX setuid attribute. To be used with RarEntry::getAttr() on entries whose host OS is UNIX.

Mask to isolate the last four bits (nibble) of UNIX attributes (_S_IFMT, the type of file mask). To be used with RarEntry::getAttr() on entries whose host OS is UNIX and with the constants RarEntry::ATTRIBUTE_UNIX_FIFO, RarEntry::ATTRIBUTE_UNIX_CHAR_DEV, RarEntry::ATTRIBUTE_UNIX_DIRECTORY, RarEntry::ATTRIBUTE_UNIX_BLOCK_DEV, RarEntry::ATTRIBUTE_UNIX_REGULAR_FILE, RarEntry::ATTRIBUTE_UNIX_SYM_LINK and RarEntry::ATTRIBUTE_UNIX_SOCKET.

Unix FIFOs will have attributes whose last four bits have this value. To be used with RarEntry::getAttr() on entries whose host OS is UNIX and with the constant RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET.

Unix character devices will have attributes whose last four bits have this value. To be used with RarEntry::getAttr() on entries whose host OS is UNIX and with the constant RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET.

Unix directories will have attributes whose last four bits have this value. To be used with RarEntry::getAttr() on entries whose host OS is UNIX and with the constant RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET. See also RarEntry::isDirectory(), which also works with entries that were added in other operating systems.

Unix block devices will have attributes whose last four bits have this value. To be used with RarEntry::getAttr() on entries whose host OS is UNIX and with the constant RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET.

Unix regular files (not directories) will have attributes whose last four bits have this value. To be used with RarEntry::getAttr() on entries whose host OS is UNIX and with the constant RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET. See also RarEntry::isDirectory(), which also works with entries that were added in other operating systems.

Unix symbolic links will have attributes whose last four bits have this value. To be used with RarEntry::getAttr() on entries whose host OS is UNIX and with the constant RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET.

Unix sockets will have attributes whose last four bits have this value. To be used with RarEntry::getAttr() on entries whose host OS is UNIX and with the constant RarEntry::ATTRIBUTE_UNIX_FINAL_QUARTET.

## Table of Contents

- RarEntry::extract — Extract entry from the archive
- RarEntry::getAttr — Get attributes of the entry
- RarEntry::getCrc — Get CRC of the entry
- RarEntry::getFileTime — Get entry last modification time
- RarEntry::getHostOs — Get entry host OS
- RarEntry::getMethod — Get pack method of the entry
- RarEntry::getName — Get name of the entry
- RarEntry::getPackedSize — Get packed size of the entry
- RarEntry::getStream — Get file handler for entry
- RarEntry::getUnpackedSize — Get unpacked size of the entry
- RarEntry::getVersion — Get minimum version of RAR program required to unpack the entry
- RarEntry::isDirectory — Test whether an entry represents a directory
- RarEntry::isEncrypted — Test whether an entry is encrypted
- RarEntry::__toString — Get text representation of entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.rarentry.php
