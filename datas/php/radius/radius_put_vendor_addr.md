# radius_put_vendor_addr

Source: https://devdocs.io/php/function.radius-put-vendor-addr

(PECL radius >= 1.1.0)

radius_put_vendor_addr — Attaches a vendor specific IP address attribute

### Description

```
radius_put_vendor_addr(
 resource $radius_handle,
 int $vendor,
 int $type,
 string $addr
): bool
```

Attaches an IP address vendor specific attribute to the current RADIUS request.

Note:

A request must be created via radius_create_request() before this function can be called.

### Parameters

The RADIUS resource.

The vendor ID.

The attribute type.

An IPv4 address in string form, such as 10.0.0.1.

A bitmask of the attribute options. The available options include RADIUS_OPTION_TAGGED and RADIUS_OPTION_SALT.

The attribute tag. This parameter is ignored unless the RADIUS_OPTION_TAGGED option is set.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-put-vendor-addr.php
