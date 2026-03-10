# tidy::getStatus

Source: https://devdocs.io/php/tidy.getstatus

# tidy_get_status

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy::getStatus -- tidy_get_status — Get status of specified document

### Description

Object-oriented style

```
public tidy::getStatus(): int
```

Procedural style

```
tidy_get_status(tidy $tidy): int
```

Returns the status for the specified tidy tidy.

### Parameters

The Tidy object.

### Return Values

Returns 0 if no error/warning was raised, 1 for warnings or accessibility errors, or 2 for errors.

### Examples

Example #1 tidy::getStatus() example

```
<?php
$html = '<p>paragraph</i>';
$tidy = new tidy();
$tidy->parseString($html);

$tidy2 = new tidy();
$html2 = '<bogus>test</bogus>';
$tidy2->parseString($html2);

echo $tidy->getStatus(); //1

echo $tidy2->getStatus(); //2
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.getstatus.php
