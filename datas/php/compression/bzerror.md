# bzerror

Source: https://devdocs.io/php/function.bzerror

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

bzerror — Returns the bzip2 error number and error string in an array

### Description

```
bzerror(resource $bz): array
```

Returns the error number and error string of any bzip2 error returned by the given file pointer.

### Parameters

The file pointer. It must be valid and must point to a file successfully opened by bzopen().

### Return Values

Returns an associative array, with the error code in the errno entry, and the error message in the errstr entry.

### Examples

Example #1 bzerror() example

```
<?php
$error = bzerror($bz);

echo $error["errno"];
echo $error["errstr"];
?>
```

### See Also

- bzerrno() - Returns a bzip2 error number
- bzerrstr() - Returns a bzip2 error string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bzerror.php
