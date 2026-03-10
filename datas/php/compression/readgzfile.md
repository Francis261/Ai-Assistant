# readgzfile

Source: https://devdocs.io/php/function.readgzfile

(PHP 4, PHP 5, PHP 7, PHP 8)

readgzfile — Output a gz-file

### Description

```
readgzfile(string $filename, bool $use_include_path = false): int|false
```

Reads a file, decompresses it and writes it to standard output.

readgzfile() can be used to read a file which is not in gzip format; in this case readgzfile() will directly read from the file without decompression.

### Parameters

The file name. This file will be opened from the filesystem and its contents written to standard output.

### Return Values

Returns the number of (uncompressed) bytes read from the file on success, or false on failure

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### See Also

- gzpassthru() - Output all remaining data on a gz-file pointer
- gzfile() - Read entire gz-file into an array
- gzopen() - Open gz-file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.readgzfile.php
