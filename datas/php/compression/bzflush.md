# bzflush

Source: https://devdocs.io/php/function.bzflush

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

bzflush — Do nothing

### Description

```
bzflush(resource $bz): bool
```

This function is supposed to force a write of all buffered bzip2 data for the file pointer bz, but is implemented as null function in libbz2, and as such does nothing.

### Parameters

The file pointer. It must be valid and must point to a file successfully opened by bzopen().

### Return Values

Returns true on success or false on failure.

### See Also

- bzread() - Binary safe bzip2 file read
- bzwrite() - Binary safe bzip2 file write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bzflush.php
