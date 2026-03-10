# posix_mkfifo

Source: https://devdocs.io/php/function.posix-mkfifo

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_mkfifo — Create a fifo special file (a named pipe)

### Description

```
posix_mkfifo(string $filename, int $permissions): bool
```

posix_mkfifo() creates a special FIFO file which exists in the file system and acts as a bidirectional communication endpoint for processes.

### Parameters

Path to the FIFO file.

The second parameter permissions has to be given in octal notation (e.g. 0644). The permission of the newly created FIFO also depends on the setting of the current umask(). The permissions of the created file are (mode & ~umask).

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-mkfifo.php
