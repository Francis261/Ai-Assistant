# xmlrpc_decode

Source: https://devdocs.io/php/function.xmlrpc-decode

(PHP 4 >= 4.1.0, PHP 5, PHP 7)

xmlrpc_decode — Decodes XML into native PHP types

### Description

```
xmlrpc_decode(string $xml, string $encoding = "iso-8859-1"): mixed
```

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### Parameters

XML response returned by XMLRPC method.

Input encoding supported by iconv.

### Return Values

Returns either an array, or an integer, or a string, or a boolean according to the response returned by the XMLRPC method.

### Examples

See example by xmlrpc_encode_request().

### See Also

- xmlrpc_encode_request() - Generates XML for a method request
- xmlrpc_is_fault() - Determines if an array value represents an XMLRPC fault

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xmlrpc-decode.php
