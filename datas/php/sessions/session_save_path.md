# session_save_path

Source: https://devdocs.io/php/function.session-save-path

(PHP 4, PHP 5, PHP 7, PHP 8)

session_save_path — Get and/or set the current session save path

### Description

```
session_save_path(?string $path = null): string|false
```

session_save_path() returns the path of the current directory used to save session data.

### Parameters

Session data path. If specified and not null, the path to which data is saved will be changed. session_save_path() needs to be called before session_start() for that purpose.

Note:

On some operating systems, you may want to specify a path on a filesystem that handles lots of small files efficiently.

### Return Values

Returns the path of the current directory used for data storage, or false on failure.

### Changelog

### See Also

- The session.save_path configuration directive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-save-path.php
