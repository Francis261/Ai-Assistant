# tidy_error_count

Source: https://devdocs.io/php/function.tidy-error-count

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy_error_count — Returns the Number of Tidy errors encountered for specified document

### Description

```
tidy_error_count(tidy $tidy): int
```

Returns the number of Tidy errors encountered for the specified document.

### Parameters

The Tidy object.

### Return Values

Returns the number of errors.

### Examples

Example #1 tidy_error_count() example

```
<?php
$html = '<p>test</i>
<bogustag>bogus</bogustag>';

$tidy = tidy_parse_string($html);

echo tidy_error_count($tidy) . "\n"; //1

echo $tidy->errorBuffer;
?>
```

The above example will output:

```
1
line 1 column 1 - Warning: missing <!DOCTYPE> declaration
line 1 column 8 - Warning: discarding unexpected </i>
line 2 column 1 - Error: <bogustag> is not recognized!
line 2 column 1 - Warning: discarding unexpected <bogustag>
line 2 column 16 - Warning: discarding unexpected </bogustag>
line 1 column 1 - Warning: inserting missing 'title' element
```

### See Also

- tidy_access_count() - Returns the Number of Tidy accessibility warnings encountered for specified document
- tidy_warning_count() - Returns the Number of Tidy warnings encountered for specified document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.tidy-error-count.php
