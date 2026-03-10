# posix_isatty

Source: https://devdocs.io/php/function.posix-isatty

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_isatty — Determine if a file descriptor is an interactive terminal

### Description

```
posix_isatty(resource|int $file_descriptor): bool
```

Determines if the file descriptor file_descriptor refers to a valid terminal type device.

### Parameters

The file descriptor, which is expected to be either a file resource or an int. An int will be assumed to be a file descriptor that can be passed directly to the underlying system call.

### Return Values

Returns true if file_descriptor is an open descriptor connected to a terminal and false otherwise.

### Changelog

### See Also

- posix_ttyname() - Determine terminal device name
- stream_isatty() - Check if a stream is a TTY

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-isatty.php
