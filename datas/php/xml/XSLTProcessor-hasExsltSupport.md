# XSLTProcessor::hasExsltSupport

Source: https://devdocs.io/php/xsltprocessor.hasexsltsupport

(PHP 5 >= 5.0.4, PHP 7, PHP 8)

XSLTProcessor::hasExsltSupport — Determine if PHP has EXSLT support

### Description

```
public XSLTProcessor::hasExsltSupport(): bool
```

This method determines if PHP was built with the » EXSLT library.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Testing EXSLT support

```
<?php

$proc = new XSLTProcessor;
if (!$proc->hasExsltSupport()) {
    die('EXSLT support not available');
}

// do EXSLT stuff here ..

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.hasexsltsupport.php
