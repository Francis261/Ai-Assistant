# streamWrapper::mkdir

Source: https://devdocs.io/php/streamwrapper.mkdir

(PHP 5, PHP 7, PHP 8)

streamWrapper::mkdir — Create a directory

### Description

```
public streamWrapper::mkdir(string $path, int $mode, int $options): bool
```

This method is called in response to mkdir().

Note:

In order for the appropriate error message to be returned this method should not be defined if the wrapper does not support creating directories.

### Parameters

Directory which should be created.

The value passed to mkdir().

A bitwise mask of values, such as STREAM_MKDIR_RECURSIVE.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

### Notes

Note:

The streamWrapper::$context property is updated if a valid context is passed to the caller function.

### See Also

- mkdir() - Makes directory
- streamwrapper::rmdir() - Removes a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.mkdir.php
