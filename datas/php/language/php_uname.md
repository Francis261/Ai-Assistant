# php_uname

Source: https://devdocs.io/php/function.php-uname

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

php_uname — Returns information about the operating system PHP is running on

### Description

```
php_uname(string $mode = "a"): string
```

php_uname() returns a description of the operating system PHP is running on. This is the same string you see at the very top of the phpinfo() output. For the name of just the operating system, consider using the PHP_OS constant, but keep in mind this constant will contain the operating system PHP was built on.

On some older UNIX platforms, it may not be able to determine the current OS information in which case it will revert to displaying the OS PHP was built on. This will only happen if your uname() library call either doesn't exist or doesn't work.

### Parameters

mode is a single character that defines what information is returned:

- 'a': This is the default. Returns the same information as the individual modes 's', 'n', 'r', 'v', 'm' separated by spaces.
- 's': Operating system name. eg. FreeBSD.
- 'n': Host name. eg. localhost.example.com.
- 'r': Release name. eg. 5.1.2-RELEASE.
- 'v': Version information. Varies a lot between operating systems.
- 'm': Machine type. eg. i386.

'a': This is the default. Returns the same information as the individual modes 's', 'n', 'r', 'v', 'm' separated by spaces.

### Return Values

Returns the description, as a string.

### Changelog

### Examples

Example #1 Some php_uname() examples

```
<?php
echo php_uname();
echo PHP_OS;

/* Some possible outputs:
Linux localhost 2.4.21-0.13mdk #1 Fri Mar 14 15:08:06 EST 2003 i686
Linux

FreeBSD localhost 3.2-RELEASE #15: Mon Dec 17 08:46:02 GMT 2001
FreeBSD

Windows NT XN1 5.1 build 2600
WINNT
*/

if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
    echo 'This is a server using Windows!';
} else {
    echo 'This is a server not using Windows!';
}

?>
```

There are also some related Predefined PHP constants that may come in handy, for example:

Example #2 A few OS related constant examples

```
<?php
// *nix
echo DIRECTORY_SEPARATOR; // /
echo PHP_SHLIB_SUFFIX;    // so
echo PATH_SEPARATOR;      // :

// Win*
echo DIRECTORY_SEPARATOR; // \
echo PHP_SHLIB_SUFFIX;    // dll
echo PATH_SEPARATOR;      // ;
?>
```

### See Also

- phpversion() - Gets the current PHP version
- php_sapi_name() - Returns the type of interface between web server and PHP
- phpinfo() - Outputs information about PHP's configuration

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.php-uname.php
