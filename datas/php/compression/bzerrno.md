# bzerrno

Source: https://devdocs.io/php/function.bzerrno

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

bzerrno — Returns a bzip2 error number

### Description

```
bzerrno(resource $bz): int
```

Returns the error number of any bzip2 error returned by the given file pointer.

### Parameters

The file pointer. It must be valid and must point to a file successfully opened by bzopen().

### Return Values

Returns the error number as an integer.

### See Also

- bzerror() - Returns the bzip2 error number and error string in an array
- bzerrstr() - Returns a bzip2 error string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bzerrno.php
