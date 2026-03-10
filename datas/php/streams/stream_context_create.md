# stream_context_create

Source: https://devdocs.io/php/function.stream-context-create

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

stream_context_create — Creates a stream context

### Description

```
stream_context_create(?array $options = null, ?array $params = null): resource
```

Creates and returns a stream context with any options supplied in options preset.

### Parameters

Must be an associative array of associative arrays in the format $arr['wrapper']['option'] = $value, or null. Refer to context options for a list of available wrappers and options.

Defaults to null.

Must be an associative array in the format $arr['parameter'] = $value, or null. Refer to context parameters for a listing of standard stream parameters.

### Return Values

A stream context resource.

### Changelog

### Examples

Example #1 Using stream_context_create()

```
<?php
$opts = [
  'http' => [
    'method' => "GET",
    // Use CRLF \r\n to separate multiple headers
    'header' => "Accept-language: en\r\n" .
                "Cookie: foo=bar",
  ]
];

$context = stream_context_create($opts);

/* Sends an http request to www.example.com
   with additional headers shown above */
$fp = fopen('http://www.example.com', 'r', false, $context);
fpassthru($fp);
fclose($fp);
?>
```

### See Also

- stream_context_set_option() - Sets an option for a stream/wrapper/context
- Listing of supported wrappers (Supported Protocols and Wrappers)
- Context options (Context options and parameters)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-context-create.php
