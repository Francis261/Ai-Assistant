# radius_send_request

Source: https://devdocs.io/php/function.radius-send-request

(PECL radius >= 1.1.0)

radius_send_request — Sends the request and waits for a reply

### Description

```
radius_send_request(resource $radius_handle): int
```

After the Radius request has been constructed, it is sent by radius_send_request().

The radius_send_request() function sends the request and waits for a valid reply, retrying the defined servers in round-robin fashion as necessary.

### Parameters

The RADIUS resource.

### Return Values

If a valid response is received, radius_send_request() returns the Radius code which specifies the type of the response. This will typically be RADIUS_ACCESS_ACCEPT, RADIUS_ACCESS_REJECT, or RADIUS_ACCESS_CHALLENGE. If no valid response is received, radius_send_request() returns false.

### See Also

- radius_create_request() - Create accounting or authentication request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-send-request.php
