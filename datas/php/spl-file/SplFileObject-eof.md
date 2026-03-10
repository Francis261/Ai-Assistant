# SplFileObject::eof

Source: https://devdocs.io/php/splfileobject.eof

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::eof — Reached end of file

### Description

```
public SplFileObject::eof(): bool
```

Determine whether the end of file has been reached

### Parameters

This function has no parameters.

### Return Values

Returns true if file is at EOF, false otherwise.

### Examples

Example #1 SplFileObject::eof() example

```
<?php
$file = new SplFileObject("fruits.txt");
while ( ! $file->eof()) {
    echo $file->fgets();
}
?>
```

The above example will output something similar to:

```
apple
banana
cherry
date
elderberry
```

### See Also

- SplFileObject::valid() - Not at EOF
- feof() - Tests for end-of-file on a file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.eof.php
