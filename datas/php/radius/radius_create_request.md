# radius_create_request

Source: https://devdocs.io/php/function.radius-create-request

(PECL radius >= 1.1.0)

radius_create_request — Create accounting or authentication request

### Description

```
radius_create_request(resource $radius_handle, int $type): bool
```

A Radius request consists of a code specifying the kind of request, and zero or more attributes which provide additional information. To begin constructing a new request, call radius_create_request().

Note: Attention: You must call this function, before you can put any attribute!

### Parameters

Type is RADIUS_ACCESS_REQUEST or RADIUS_ACCOUNTING_REQUEST.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 radius_create_request() example

```
<?php
if (!radius_create_request($res, RADIUS_ACCESS_REQUEST)) {
    echo 'RadiusError:' . radius_strerror($res). "\n<br />";
    exit;
}
?>
```

### See Also

- radius_send_request() - Sends the request and waits for a reply

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-create-request.php
