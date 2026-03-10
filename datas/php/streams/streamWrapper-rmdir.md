# streamWrapper::rmdir

Source: https://devdocs.io/php/streamwrapper.rmdir

(PHP 5, PHP 7, PHP 8)

streamWrapper::rmdir — Removes a directory

### Description

```
public streamWrapper::rmdir(string $path, int $options): bool
```

This method is called in response to rmdir().

Note:

In order for the appropriate error message to be returned this method should not be defined if the wrapper does not support removing directories.

### Parameters

The directory URL which should be removed.

A bitwise mask of values, such as STREAM_MKDIR_RECURSIVE.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

### Notes

Note:

The streamWrapper::$context property is updated if a valid context is passed to the caller function.

### See Also

- rmdir() - Removes directory
- streamwrapper::mkdir() - Create a directory
- streamwrapper::unlink() - Delete a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.rmdir.php
