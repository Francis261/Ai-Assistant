# streamWrapper::rename

Source: https://devdocs.io/php/streamwrapper.rename

(PHP 5, PHP 7, PHP 8)

streamWrapper::rename — Renames a file or directory

### Description

```
public streamWrapper::rename(string $path_from, string $path_to): bool
```

This method is called in response to rename().

Should attempt to rename path_from to path_to

Note:

In order for the appropriate error message to be returned this method should not be defined if the wrapper does not support renaming files.

### Parameters

The URL to the current file.

The URL which the path_from should be renamed to.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

### Notes

Note:

The streamWrapper::$context property is updated if a valid context is passed to the caller function.

### See Also

- rename() - Renames a file or directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.rename.php
