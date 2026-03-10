# tidy::$errorBuffer

Source: https://devdocs.io/php/tidy.props.errorbuffer

# tidy_get_error_buffer

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy::$errorBuffer -- tidy_get_error_buffer — Return warnings and errors which occurred parsing the specified document

### Description

Object-oriented style (property):

Procedural style:

```
tidy_get_error_buffer(tidy $tidy): string|false
```

Returns warnings and errors which occurred parsing the specified document.

### Parameters

The Tidy object.

### Return Values

Returns the error buffer as a string, or false if the buffer is empty.

### Examples

Example #1 tidy_get_error_buffer() example

```
<?php
$html = '<p>paragraph</p>';

$tidy = tidy_parse_string($html);

echo tidy_get_error_buffer($tidy);
/* or in OO: */
echo $tidy->errorBuffer;
?>
```

The above example will output:

```
line 1 column 1 - Warning: missing <!DOCTYPE> declaration
line 1 column 1 - Warning: inserting missing 'title' element
```

### See Also

- tidy_access_count() - Returns the Number of Tidy accessibility warnings encountered for specified document
- tidy_error_count() - Returns the Number of Tidy errors encountered for specified document
- tidy_warning_count() - Returns the Number of Tidy warnings encountered for specified document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.props.errorbuffer.php
