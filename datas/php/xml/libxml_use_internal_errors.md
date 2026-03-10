# libxml_use_internal_errors

Source: https://devdocs.io/php/function.libxml-use-internal-errors

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

libxml_use_internal_errors — Disable libxml errors and allow user to fetch error information as needed

### Description

```
libxml_use_internal_errors(?bool $use_errors = null): bool
```

libxml_use_internal_errors() allows you to disable standard libxml errors and enable user error handling.

### Parameters

Enable (true) user error handling or disable (false) user error handling. Disabling will also clear any existing libxml errors.

### Return Values

This function returns the previous value of use_errors.

### Changelog

### Examples

Example #1 A libxml_use_internal_errors() example

This example demonstrates the basic usage of libxml errors and the value returned by this function.

```
<?php

// enable user error handling
var_dump(libxml_use_internal_errors(true));

// load the document
$doc = new DOMDocument;

if (!$doc->load('file.xml')) {
    foreach (libxml_get_errors() as $error) {
        // handle errors here
    }

    libxml_clear_errors();
}

?>
```

The above example will output:

```
bool(false)
```

### See Also

- libxml_clear_errors() - Clear libxml error buffer
- libxml_get_errors() - Retrieve array of errors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.libxml-use-internal-errors.php
