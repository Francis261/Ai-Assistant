# dirname

Source: https://devdocs.io/php/function.dirname

(PHP 4, PHP 5, PHP 7, PHP 8)

dirname — Returns a parent directory's path

### Description

```
dirname(string $path, int $levels = 1): string
```

Given a string containing the path of a file or directory, this function will return the parent directory's path that is levels up from the current directory.

Note:

dirname() operates naively on the input string, and is not aware of the actual filesystem, or path components such as "..".

On Windows, dirname() assumes the currently set codepage, so for it to see the correct directory name with multibyte character paths, the matching codepage must be set. If path contains characters which are invalid for the current codepage, the behavior of dirname() is undefined.

On other systems, dirname() assumes path to be encoded in an ASCII compatible encoding. Otherwise, the behavior of the function is undefined.

### Parameters

A path.

On Windows, both slash (/) and backslash (\) are used as directory separator character. In other environments, it is the forward slash (/).

The number of parent directories to go up.

This must be an integer greater than 0.

### Return Values

Returns the path of a parent directory. If there are no slashes in path, a dot ('.') is returned, indicating the current directory. Otherwise, the returned string is path with any trailing /component removed.

Be careful when using this function in a loop that can reach the top-level directory as this can result in an infinite loop.

```
<?php
dirname('.');    // Will return '.'.
dirname('/');    // Will return `\` on Windows and '/' on *nix systems.
dirname('\\');   // Will return `\` on Windows and '.' on *nix systems.
dirname('C:\\'); // Will return 'C:\' on Windows and '.' on *nix systems.
?>
```

### Examples

Example #1 dirname() example

```
<?php
echo dirname("/etc/passwd") . PHP_EOL;
echo dirname("/etc/") . PHP_EOL;
echo dirname(".") . PHP_EOL;
echo dirname("C:\\") . PHP_EOL;
echo dirname("/usr/local/lib", 2);
```

The above example will output something similar to:

```
/etc
/ (or \ on Windows)
.
C:\
/usr
```

### See Also

- basename() - Returns trailing name component of path
- pathinfo() - Returns information about a file path
- realpath() - Returns canonicalized absolute pathname

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dirname.php
