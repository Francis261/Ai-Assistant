# basename

Source: https://devdocs.io/php/function.basename

(PHP 4, PHP 5, PHP 7, PHP 8)

basename — Returns trailing name component of path

### Description

```
basename(string $path, string $suffix = ""): string
```

Given a string containing the path to a file or directory, this function will return the trailing name component.

Note:

basename() operates naively on the input string, and is not aware of the actual filesystem, or path components such as "..".

basename() is locale aware, so for it to see the correct basename with multibyte character paths, the matching locale must be set using the setlocale() function. If path contains characters which are invalid for the current locale, the behavior of basename() is undefined.

### Parameters

A path.

On Windows, both slash (/) and backslash (\) are used as directory separator character. In other environments, it is the forward slash (/).

If the name component ends in suffix this will also be cut off.

### Return Values

Returns the base name of the given path.

### Examples

Example #1 basename() example

```
<?php
echo "1) ".basename("/etc/sudoers.d", ".d").PHP_EOL;
echo "2) ".basename("/etc/sudoers.d").PHP_EOL;
echo "3) ".basename("/etc/passwd").PHP_EOL;
echo "4) ".basename("/etc/").PHP_EOL;
echo "5) ".basename(".").PHP_EOL;
echo "6) ".basename("/");
?>
```

The above example will output:

```
1) sudoers
2) sudoers.d
3) passwd
4) etc
5) .
6)
```

### See Also

- dirname() - Returns a parent directory's path
- pathinfo() - Returns information about a file path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.basename.php
