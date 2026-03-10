# tidy_access_count

Source: https://devdocs.io/php/function.tidy-access-count

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy_access_count — Returns the Number of Tidy accessibility warnings encountered for specified document

### Description

```
tidy_access_count(tidy $tidy): int
```

tidy_access_count() returns the number of accessibility warnings found for the specified document.

### Parameters

The Tidy object.

### Return Values

Returns the number of warnings.

### Examples

Example #1 tidy_access_count() example

```
<?php

$html ='<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html><head><title>Title</title></head>
<body>

<p><img src="img.png"></p>

</body></html>';

// select the accessibility check level: 1, 2 or 3
$config = array('accessibility-check' => 3);

$tidy = new tidy();
$tidy->parseString($html, $config);
$tidy->cleanRepair();

/* Never forget to call this! */
$tidy->diagnose();

echo tidy_access_count($tidy); //5

?>
```

### Notes

Note:

Due to the design of the TidyLib, you must call tidy_diagnose() before tidy_access_count() or it will return always 0. You must also need to enable the accessibility-check option.

### See Also

- tidy_error_count() - Returns the Number of Tidy errors encountered for specified document
- tidy_warning_count() - Returns the Number of Tidy warnings encountered for specified document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.tidy-access-count.php
