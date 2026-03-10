# radius_put_addr

Source: https://devdocs.io/php/function.radius-put-addr

(PECL radius >= 1.1.0)

radius_put_addr — Attaches an IP address attribute

### Description

```
radius_put_addr(
 resource $radius_handle,
 int $type,
 string $addr,
 int $options = 0,
 int $tag = ?
): bool
```

Attaches an IP address attribute to the current RADIUS request.

Note:

A request must be created via radius_create_request() before this function can be called.

### Parameters

The RADIUS resource.

The attribute type.

An IPv4 address in string form, such as 10.0.0.1.

A bitmask of the attribute options. The available options include RADIUS_OPTION_TAGGED and RADIUS_OPTION_SALT.

The attribute tag. This parameter is ignored unless the RADIUS_OPTION_TAGGED option is set.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-put-addr.php
