# bzerrstr

Source: https://devdocs.io/php/function.bzerrstr

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

bzerrstr — Returns a bzip2 error string

### Description

```
bzerrstr(resource $bz): string
```

Gets the error string of any bzip2 error returned by the given file pointer.

### Parameters

The file pointer. It must be valid and must point to a file successfully opened by bzopen().

### Return Values

Returns a string containing the error message.

### See Also

- bzerrno() - Returns a bzip2 error number
- bzerror() - Returns the bzip2 error number and error string in an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bzerrstr.php
