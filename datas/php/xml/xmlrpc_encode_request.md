# xmlrpc_encode_request

Source: https://devdocs.io/php/function.xmlrpc-encode-request

(PHP 4 >= 4.1.0, PHP 5, PHP 7)

xmlrpc_encode_request — Generates XML for a method request

### Description

```
xmlrpc_encode_request(string $method, mixed $params, array $output_options = ?): string
```

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### Parameters

Name of the method to call.

Method parameters compatible with method signature.

Array specifying output options may contain (default values are emphasised):

- output_type: php, xml
- verbosity: no_white_space, newlines_only, pretty
- escaping: cdata, non-ascii, non-print, markup (may be a string with one value or an array with multiple values)
- version: simple, xmlrpc, soap 1.1, auto
- encoding: iso-8859-1, other character set supported by iconv

output_type: php, xml

verbosity: no_white_space, newlines_only, pretty

escaping: cdata, non-ascii, non-print, markup (may be a string with one value or an array with multiple values)

version: simple, xmlrpc, soap 1.1, auto

encoding: iso-8859-1, other character set supported by iconv

### Return Values

Returns a string containing the XML representation of the request.

### Examples

Example #1 XMLRPC client functions example

```
<?php
$request = xmlrpc_encode_request("method", [1, 2, 3]);
$context = stream_context_create([
    'http' => [
        'method'  => "POST",
        'header'  => "Content-Type: text/xml",
        'content' => $request,
    ]
]);
$file = file_get_contents("http://www.example.com/xmlrpc", false, $context);
$response = xmlrpc_decode($file);
if ($response && xmlrpc_is_fault($response)) {
    trigger_error("xmlrpc: $response[faultString] ($response[faultCode])");
} else {
    print_r($response);
}
?>
```

### See Also

- stream_context_create() - Creates a stream context
- file_get_contents() - Reads entire file into a string
- xmlrpc_decode() - Decodes XML into native PHP types

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xmlrpc-encode-request.php
