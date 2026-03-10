# tidy::cleanRepair

Source: https://devdocs.io/php/tidy.cleanrepair

# tidy_clean_repair

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy::cleanRepair -- tidy_clean_repair — Execute configured cleanup and repair operations on parsed markup

### Description

Object-oriented style

```
public tidy::cleanRepair(): bool
```

Procedural style

```
tidy_clean_repair(tidy $tidy): bool
```

This function cleans and repairs the given tidy tidy.

### Parameters

The Tidy object.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 tidy::cleanrepair() example

```
<?php
$html = '<p>test</I>';

$tidy = tidy_parse_string($html);
$tidy->cleanRepair();

echo $tidy;
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

- tidy::repairFile() - Repair a file and return it as a string
- tidy::repairString() - Repair a string using an optionally provided configuration file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.cleanrepair.php
