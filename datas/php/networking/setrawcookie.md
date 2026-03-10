# setrawcookie

Source: https://devdocs.io/php/function.setrawcookie

(PHP 5, PHP 7, PHP 8)

setrawcookie — Send a cookie without urlencoding the cookie value

### Description

```
setrawcookie(
 string $name,
 string $value = ?,
 int $expires_or_options = 0,
 string $path = ?,
 string $domain = ?,
 bool $secure = false,
 bool $httponly = false
): bool
```

Alternative signature available as of PHP 7.3.0 (not supported with named parameters):

```
setrawcookie(string $name, string $value = ?, array $options = []): bool
```

setrawcookie() is exactly the same as setcookie() except that the cookie value will not be automatically urlencoded when sent to the browser.

### Parameters

For parameter information, see the setcookie() documentation.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- setcookie() - Send a cookie

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.setrawcookie.php
