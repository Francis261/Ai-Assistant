# ob_tidyhandler

Source: https://devdocs.io/php/function.ob-tidyhandler

(PHP 5, PHP 7, PHP 8)

ob_tidyhandler — ob_start callback function to repair the buffer

### Description

```
ob_tidyhandler(string $input, int $mode = ?): string
```

Callback function for ob_start() to repair the buffer.

### Parameters

The buffer.

The buffer mode.

### Return Values

Returns the modified buffer.

### Examples

Example #1 ob_tidyhandler() example

```
<?php
ob_start('ob_tidyhandler');

echo '<p>test</i>';
?>
```

The above example will output:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html>
<head>
<title></title>
</head>
<body>
<p>test</p>
</body>
</html>
```

### See Also

- ob_start() - Turn on output buffering

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ob-tidyhandler.php
