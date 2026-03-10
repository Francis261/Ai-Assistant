# SplFileObject::fgetss

Source: https://devdocs.io/php/splfileobject.fgetss

(PHP 5 >= 5.1.0, PHP 7)

SplFileObject::fgetss — Gets line from file and strip HTML tags

This function has been DEPRECATED as of PHP 7.3.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
public SplFileObject::fgetss(string $allowable_tags = ?): string
```

Identical to SplFileObject::fgets(), except that SplFileObject::fgetss() attempts to strip any HTML and PHP tags from the text it reads. The function retains the parsing state from call to call, and as such is not equivalent to calling strip_tags() on the return value of SplFileObject::fgets().

### Parameters

Optional parameter to specify tags which should not be stripped.

### Return Values

Returns a string containing the next line of the file with HTML and PHP code stripped, or false on error.

### Examples

Example #1 SplFileObject::fgetss() example

```
<?php
$str = <<<EOD
<html><body>
 <p>Welcome! Today is the <?php echo(date('jS')); ?> of <?= date('F'); ?>.</p>
</body></html>
Text outside of the HTML block.
EOD;
file_put_contents("sample.php", $str);

$file = new SplFileObject("sample.php");
while (!$file->eof()) {
    echo $file->fgetss();
}
?>
```

The above example will output something similar to:

```
Welcome! Today is the  of .

Text outside of the HTML block.
```

### See Also

- fgetss() - Gets line from file pointer and strip HTML tags
- SplFileObject::fgets() - Gets line from file
- SplFileObject::fgetc() - Gets character from file
- SplFileObject::current() - Retrieve current line of file
- The string.strip_tags filter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fgetss.php
