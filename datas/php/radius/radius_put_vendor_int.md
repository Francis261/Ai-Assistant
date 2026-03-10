# radius_put_vendor_int

Source: https://devdocs.io/php/function.radius-put-vendor-int

(PECL radius >= 1.1.0)

radius_put_vendor_int — Attaches a vendor specific integer attribute

### Description

```
radius_put_vendor_int(
 resource $radius_handle,
 int $vendor,
 int $type,
 int $value,
 int $options = 0,
 int $tag = ?
): bool
```

Attaches a vendor specific integer attribute to the current RADIUS request.

Note:

A request must be created via radius_create_request() before this function can be called.

### Parameters

The RADIUS resource.

The vendor ID.

The attribute type.

The attribute value.

A bitmask of the attribute options. The available options include RADIUS_OPTION_TAGGED and RADIUS_OPTION_SALT.

The attribute tag. This parameter is ignored unless the RADIUS_OPTION_TAGGED option is set.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- radius_put_vendor_string() - Attaches a vendor specific string attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-put-vendor-int.php
