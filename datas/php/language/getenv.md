# getenv

Source: https://devdocs.io/php/function.getenv

(PHP 4, PHP 5, PHP 7, PHP 8)

getenv — Gets the value of a single or all environment variables

### Description

```
getenv(?string $name = null, bool $local_only = false): string|array|false
```

Gets the value of a single or all environment variables.

You can see a list of all the environmental variables by using phpinfo(). Many of these variables are listed within » RFC 3875, specifically section 4.1, "Request Meta-Variables".

### Parameters

The variable name as a string or null.

When set to true, only local environment variables are returned, set by the operating system or putenv. It only has an effect when name is a string.

### Return Values

Returns the value of the environment variable name, or false if the environment variable name does not exist. If name is null, all environment variables are returned as an associative array.

### Changelog

### Examples

Example #1 getenv() Example

```
<?php
// Example use of getenv()
$ip = getenv('REMOTE_ADDR');

// Or simply use a Superglobal ($_SERVER or $_ENV)
$ip = $_SERVER['REMOTE_ADDR'];

// Safely get the value of an environment variable, ignoring whether 
// or not it was set by a SAPI or has been changed with putenv
$ip = getenv('REMOTE_ADDR', true) ?: getenv('REMOTE_ADDR')
?>
```

### Notes

If PHP is running in a SAPI such as Fast CGI, this function will always return the value of an environment variable set by the SAPI, even if putenv() has been used to set a local environment variable of the same name. Use the local_only parameter to return the value of locally-set environment variables.

### See Also

- putenv() - Sets the value of an environment variable
- apache_getenv() - Get an Apache subprocess_env variable
- Superglobals

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.getenv.php
