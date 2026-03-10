# tidy_get_output

Source: https://devdocs.io/php/function.tidy-get-output

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy_get_output — Return a string representing the parsed tidy markup

### Description

```
tidy_get_output(tidy $tidy): string
```

Gets a string with the repaired html.

### Parameters

The Tidy object.

### Return Values

Returns the parsed tidy markup.

### Examples

Example #1 tidy_get_output() example

```
<?php

$html = '<p>paragraph</i>';
$tidy = tidy_parse_string($html);

$tidy->cleanRepair();

echo tidy_get_output($tidy);
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
<p>paragraph</p>
</body>
</html>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.tidy-get-output.php
