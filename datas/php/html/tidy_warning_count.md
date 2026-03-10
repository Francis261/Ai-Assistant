# tidy_warning_count

Source: https://devdocs.io/php/function.tidy-warning-count

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy_warning_count — Returns the Number of Tidy warnings encountered for specified document

### Description

```
tidy_warning_count(tidy $tidy): int
```

Returns the number of Tidy warnings encountered for the specified document.

### Parameters

The Tidy object.

### Return Values

Returns the number of warnings.

### Examples

Example #1 tidy_warning_count() example

```
<?php
$html = '<p>test</i>
<bogustag>bogus</bogustag>';

$tidy = tidy_parse_string($html);

echo tidy_error_count($tidy) . "\n"; //1
echo tidy_warning_count($tidy) . "\n"; //5
?>
```

### See Also

- tidy_error_count() - Returns the Number of Tidy errors encountered for specified document
- tidy_access_count() - Returns the Number of Tidy accessibility warnings encountered for specified document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.tidy-warning-count.php
