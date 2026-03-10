# tidy_config_count

Source: https://devdocs.io/php/function.tidy-config-count

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy_config_count — Returns the Number of Tidy configuration errors encountered for specified document

### Description

```
tidy_config_count(tidy $tidy): int
```

Returns the number of errors encountered in the configuration of the specified tidy tidy.

### Parameters

The Tidy object.

### Return Values

Returns the number of errors.

### Examples

Example #1 tidy_config_count() example

```
<?php
$html = '<p>test</I>';

$config = array('doctype' => 'bogus');

$tidy = tidy_parse_string($html, $config);

/* This outputs 1, because 'bogus' isn't a valid doctype */
echo tidy_config_count($tidy);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.tidy-config-count.php
