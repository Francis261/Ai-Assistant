# fclose

Source: https://devdocs.io/php/function.fclose

(PHP 4, PHP 5, PHP 7, PHP 8)

fclose — Closes an open file pointer

### Description

```
fclose(resource $stream): bool
```

The file pointed to by stream is closed.

### Parameters

The file pointer must be valid, and must point to a file successfully opened by fopen() or fsockopen().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 A simple fclose() example

```
<?php

$handle = fopen('somefile.txt', 'r');

fclose($handle);

?>
```

### See Also

- fopen() - Opens file or URL
- fsockopen() - Open Internet or Unix domain socket connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fclose.php
