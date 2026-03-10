# XSLTProcessor::setParameter

Source: https://devdocs.io/php/xsltprocessor.setparameter

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::setParameter — Set value for a parameter

### Description

```
public XSLTProcessor::setParameter(string $namespace, string $name, string $value): bool
```

```
public XSLTProcessor::setParameter(string $namespace, array $options): bool
```

Sets the value of one or more parameters to be used in subsequent transformations with XSLTProcessor. If the parameter doesn't exist in the stylesheet it will be ignored.

### Parameters

The namespace URI of the XSLT parameter.

The local name of the XSLT parameter.

The new value of the XSLT parameter.

An array of name => value pairs.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Throws a ValueError if any of the arguments contain null bytes.

### Changelog

### Examples

Example #1 Changing the owner before the transformation

```
<?php

$collections = array(
    'Marc Rutkowski' => 'marc',
    'Olivier Parmentier' => 'olivier'
);

$xsl = new DOMDocument;
$xsl->load('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

foreach ($collections as $name => $file) {
    // Load the XML source
    $xml = new DOMDocument;
    $xml->load('collection_' . $file . '.xml');

    $proc->setParameter('', 'owner', $name);
    $proc->transformToURI($xml, 'file:///tmp/' . $file . '.html');
}

?>
```

### See Also

- XSLTProcessor::getParameter() - Get value of a parameter
- XSLTProcessor::removeParameter() - Remove parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.setparameter.php
