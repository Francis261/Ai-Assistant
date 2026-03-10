# sys_get_temp_dir

Source: https://devdocs.io/php/function.sys-get-temp-dir

(PHP 5 >= 5.2.1, PHP 7, PHP 8)

sys_get_temp_dir — Returns directory path used for temporary files

### Description

```
sys_get_temp_dir(): string
```

Returns the path of the directory PHP stores temporary files in by default.

### Parameters

This function has no parameters.

### Return Values

Returns the path of the temporary directory.

### Examples

Example #1 sys_get_temp_dir() example

```
<?php
// Create a temporary file in the temporary 
// files directory using sys_get_temp_dir()
$temp_file = tempnam(sys_get_temp_dir(), 'Tux');

echo $temp_file;
?>
```

The above example will output something similar to:

```
C:\Windows\Temp\TuxA318.tmp
```

### See Also

- tmpfile() - Creates a temporary file
- tempnam() - Create file with unique file name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sys-get-temp-dir.php
