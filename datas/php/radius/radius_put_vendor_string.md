# radius_put_vendor_string

Source: https://devdocs.io/php/function.radius-put-vendor-string

(PECL radius >= 1.1.0)

radius_put_vendor_string — Attaches a vendor specific string attribute

### Description

```
radius_put_vendor_string(
 resource $radius_handle,
 int $vendor,
 int $type,
 string $value,
 int $options = 0,
 int $tag = ?
): bool
```

Attaches a vendor specific string attribute to the current RADIUS request. In general, radius_put_vendor_attr() is a more useful function for attaching string attributes, as it is binary safe.

Note:

A request must be created via radius_create_request() before this function can be called.

### Parameters

The RADIUS resource.

The vendor ID.

The attribute type.

The attribute value. This value is expected by the underlying library to be null terminated, therefore this parameter is not binary safe.

A bitmask of the attribute options. The available options include RADIUS_OPTION_TAGGED and RADIUS_OPTION_SALT.

The attribute tag. This parameter is ignored unless the RADIUS_OPTION_TAGGED option is set.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- radius_put_vendor_int() - Attaches a vendor specific integer attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-put-vendor-string.php
