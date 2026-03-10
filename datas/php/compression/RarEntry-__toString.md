# RarEntry::__toString

Source: https://devdocs.io/php/rarentry.tostring

(PECL rar >= 2.0.0)

RarEntry::__toString — Get text representation of entry

### Description

```
public RarEntry::__toString(): string
```

RarEntry::__toString() returns a textual representation for this entry. It includes whether the entry is a file or a directory (symbolic links and other special objects will be treated as files), the UTF-8 name of the entry and its CRC. The form and content of this representation may be changed in the future, so they cannot be relied upon.

### Parameters

This function has no parameters.

### Return Values

A textual representation for the entry.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarentry.tostring.php
