# stream_context_set_default

Source: https://devdocs.io/php/function.stream-context-set-default

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

stream_context_set_default — Set the default stream context

### Description

```
stream_context_set_default(array $options): resource
```

Set the default stream context which will be used whenever file operations (fopen(), file_get_contents(), etc...) are called without a context parameter. Uses the same syntax as stream_context_create().

### Parameters

The options to set for the default context.

Note:

options must be an associative array of associative arrays in the format $arr['wrapper']['option'] = $value.

### Return Values

Returns the default stream context.

### Examples

Example #1 stream_context_set_default() example

```
<?php
$default_opts = [
  'http' => [
    'method' => "GET",
    'header' => "Accept-language: en\r\n" .
                "Cookie: foo=bar",
    'proxy'  => "tcp://10.54.1.39:8000",
  ]
];

$default = stream_context_set_default($default_opts);

/* Sends a regular GET request to proxy server at 10.54.1.39
 * For www.example.com using context options specified in $default_opts
 */
readfile('http://www.example.com');
?>
```

### See Also

- stream_context_create() - Creates a stream context
- stream_context_get_default() - Retrieve the default stream context
- Listing of supported wrappers with context options (Supported Protocols and Wrappers).

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-context-set-default.php
