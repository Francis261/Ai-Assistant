# XSLTProcessor::removeParameter

Source: https://devdocs.io/php/xsltprocessor.removeparameter

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::removeParameter — Remove parameter

### Description

```
public XSLTProcessor::removeParameter(string $namespace, string $name): bool
```

Removes a parameter, if set. This will make the processor use the default value for the parameter as specified in the stylesheet.

### Parameters

The namespace URI of the XSLT parameter.

The local name of the XSLT parameter.

### Return Values

Returns true on success or false on failure.

### See Also

- XSLTProcessor::setParameter() - Set value for a parameter
- XSLTProcessor::getParameter() - Get value of a parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.removeparameter.php
