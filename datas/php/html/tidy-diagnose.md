# tidy::diagnose

Source: https://devdocs.io/php/tidy.diagnose

# tidy_diagnose

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy::diagnose -- tidy_diagnose — Run configured diagnostics on parsed and repaired markup

### Description

Object-oriented style

```
public tidy::diagnose(): bool
```

Procedural style

```
tidy_diagnose(tidy $tidy): bool
```

Runs diagnostic tests on the given tidy tidy, adding some more information about the document in the error buffer.

### Parameters

The Tidy object.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 tidy::diagnose() example

```
<?php

$html = <<< HTML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<p>paragraph</p>
HTML;

$tidy = tidy_parse_string($html);
$tidy->cleanRepair();

// note the difference between the two outputs
echo $tidy->errorBuffer . "\n";

$tidy->diagnose();
echo $tidy->errorBuffer;

?>
```

The above example will output:

```
line 4 column 1 - Warning: <p> isn't allowed in <head> elements
line 4 column 1 - Warning: inserting missing 'title' element
line 4 column 1 - Warning: <p> isn't allowed in <head> elements
line 4 column 1 - Warning: inserting missing 'title' element
Info: Doctype given is "-//W3C//DTD XHTML 1.0 Strict//EN"
Info: Document content looks like XHTML 1.0 Strict
2 warnings, 0 errors were found!
```

### See Also

- tidy::errorBuffer()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.diagnose.php
