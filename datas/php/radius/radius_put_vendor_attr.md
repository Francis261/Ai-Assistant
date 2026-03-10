# radius_put_vendor_attr

Source: https://devdocs.io/php/function.radius-put-vendor-attr

(PECL radius >= 1.1.0)

radius_put_vendor_attr — Attaches a vendor specific binary attribute

### Description

```
radius_put_vendor_attr(
 resource $radius_handle,
 int $vendor,
 int $type,
 string $value,
 int $options = 0,
 int $tag = ?
): bool
```

Attaches a vendor specific binary attribute to the current RADIUS request.

Note:

A request must be created via radius_create_request() before this function can be called.

### Parameters

The RADIUS resource.

The vendor ID.

The attribute type.

The attribute value, which will be treated as a raw binary string.

A bitmask of the attribute options. The available options include RADIUS_OPTION_TAGGED and RADIUS_OPTION_SALT.

The attribute tag. This parameter is ignored unless the RADIUS_OPTION_TAGGED option is set.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 radius_put_vendor_attr() example

```
<?php
if (!radius_put_vendor_attr($res, RADIUS_VENDOR_MICROSOFT, RAD_MICROSOFT_MS_CHAP_CHALLENGE, $challenge)) {
    echo 'RadiusError:' . radius_strerror($res). "\n<br />";
    exit;
}
?>
```

### See Also

- radius_get_vendor_attr() - Extracts a vendor specific attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-put-vendor-attr.php
