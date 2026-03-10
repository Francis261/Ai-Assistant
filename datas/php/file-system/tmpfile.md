# tmpfile

Source: https://devdocs.io/php/function.tmpfile

(PHP 4, PHP 5, PHP 7, PHP 8)

tmpfile — Creates a temporary file

### Description

```
tmpfile(): resource|false
```

Creates a temporary file with a unique name in read-write-binary (w+b) mode and returns a file handle.

The file is automatically removed when closed (for example, by calling fclose(), or when there are no remaining references to the file handle returned by tmpfile()), or when the script ends.

If the script terminates unexpectedly, the temporary file may not be deleted.

### Parameters

This function has no parameters.

### Return Values

Returns a file handle, similar to the one returned by fopen(), for the new file or false on failure.

### Examples

Example #1 tmpfile() example

```
<?php
$temp = tmpfile();
fwrite($temp, "writing to tempfile");
fseek($temp, 0);
echo fread($temp, 1024);
fclose($temp); // this removes the file
?>
```

The above example will output:

```
writing to tempfile
```

### See Also

- tempnam() - Create file with unique file name
- sys_get_temp_dir() - Returns directory path used for temporary files

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.tmpfile.php
