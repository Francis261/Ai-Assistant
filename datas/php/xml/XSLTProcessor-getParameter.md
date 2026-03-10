# XSLTProcessor::getParameter

Source: https://devdocs.io/php/xsltprocessor.getparameter

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::getParameter — Get value of a parameter

### Description

```
public XSLTProcessor::getParameter(string $namespace, string $name): string|false
```

Gets a parameter if previously set by XSLTProcessor::setParameter().

### Parameters

The namespace URI of the XSLT parameter.

The local name of the XSLT parameter.

### Return Values

The value of the parameter (as a string), or false if it's not set.

### See Also

- XSLTProcessor::setParameter() - Set value for a parameter
- XSLTProcessor::removeParameter() - Remove parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.getparameter.php
