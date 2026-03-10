# session_unset

Source: https://devdocs.io/php/function.session-unset

(PHP 4, PHP 5, PHP 7, PHP 8)

session_unset — Free all session variables

### Description

```
session_unset(): bool
```

The session_unset() function frees all session variables currently registered.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note:

If $_SESSION is used, use unset() to unregister a session variable, i.e. unset($_SESSION['varname']);.

Do NOT unset the whole $_SESSION with unset($_SESSION) as this will disable the registering of session variables through the $_SESSION superglobal.

Note:

The use of session_unset() is identical to $_SESSION = [].

This function works only if a session is active. It will not clear the $_SESSION array if the session has not been started yet or has already been destroyed. Use $_SESSION = [] to unset all session variables even if the session is not active.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-unset.php
