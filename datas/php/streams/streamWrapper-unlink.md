# streamWrapper::unlink

Source: https://devdocs.io/php/streamwrapper.unlink

(PHP 5, PHP 7, PHP 8)

streamWrapper::unlink — Delete a file

### Description

```
public streamWrapper::unlink(string $path): bool
```

This method is called in response to unlink().

Note:

In order for the appropriate error message to be returned this method should not be defined if the wrapper does not support removing files.

### Parameters

The file URL which should be deleted.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

### Notes

Note:

The streamWrapper::$context property is updated if a valid context is passed to the caller function.

### See Also

- unlink() - Deletes a file
- streamWrapper::rmdir() - Removes a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.unlink.php
