# request_parse_body

Source: https://devdocs.io/php/function.request-parse-body

(PHP 8 >= 8.4.0)

request_parse_body — Read and parse the request body and return the result

### Description

```
request_parse_body(?array $options = null): array
```

This function reads the request body and parses it according to the Content-Type header. Currently, two content types are supported:

- application/x-www-form-urlencoded
- multipart/form-data

This function is used primarily to parse multipart/form-data requests with HTTP verbs other than POST which do not automatically populate the $_POST and $_FILES superglobals.

request_parse_body() consumes the request body without buffering it to the php://input stream.

### Parameters

- max_file_uploads
- max_input_vars
- max_multipart_body_parts
- post_max_size
- upload_max_filesize

### Return Values

request_parse_body() returns an array pair with the equivalent of $_POST at index 0 and $_FILES at index 1.

### Errors/Exceptions

When the request body is invalid, according to the Content-Type header, a RequestParseBodyException is thrown.

A ValueError is thrown when options contains invalid keys, or invalid values for the corresponding key.

### Examples

Example #1 request_parse_body() example

```
<?php
// Parse request and store result in the $_POST and $_FILES superglobals.
[$_POST, $_FILES] = request_parse_body();
// Echo the content of some transferred file
echo file_get_contents($_FILES['file_name']['tmp_name']);
?>
```

Example #2 request_parse_body() example with customized options

```
<?php
// form.php

assert_logged_in();

// Only for this form, we allow a bigger upload size.
[$_POST, $_FILES] = request_parse_body([
    'post_max_size' => '10M',
    'upload_max_filesize' => '10M',
]);

// Do something with the uploaded files.
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.request-parse-body.php
