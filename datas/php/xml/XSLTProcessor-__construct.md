# XSLTProcessor::__construct

Source: https://devdocs.io/php/xsltprocessor.construct

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::__construct — Creates a new XSLTProcessor object

### Description

Creates a new XSLTProcessor object.

### Parameters

This function has no parameters.

### Examples

Example #1 Creating an XSLTProcessor

```
<?php

$xsldoc = new DOMDocument();
$xsldoc->load($xsl_filename);

$xmldoc = new DOMDocument();
$xmldoc->load($xml_filename);

$xsl = new XSLTProcessor();
$xsl->importStyleSheet($xsldoc);
echo $xsl->transformToXML($xmldoc);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.construct.php
