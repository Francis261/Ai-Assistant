# radius_put_string

Source: https://devdocs.io/php/function.radius-put-string

(PECL radius >= 1.1.0)

radius_put_string — Attaches a string attribute

### Description

```
radius_put_string(
 resource $radius_handle,
 int $type,
 string $value,
 int $options = 0,
 int $tag = ?
): bool
```

Attaches a string attribute to the current RADIUS request. In general, radius_put_attr() is a more useful function for attaching string attributes, as it is binary safe.

Note:

A request must be created via radius_create_request() before this function can be called.

### Parameters

The RADIUS resource.

The attribute type.

The attribute value. This value is expected by the underlying library to be null terminated, therefore this parameter is not binary safe.

A bitmask of the attribute options. The available options include RADIUS_OPTION_TAGGED and RADIUS_OPTION_SALT.

The attribute tag. This parameter is ignored unless the RADIUS_OPTION_TAGGED option is set.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 radius_put_string() example

```
<?php
if (!radius_put_string($res, RADIUS_USER_NAME, 'billy')) {
    echo 'RadiusError:' . radius_strerror($res). "\n<br />";
    exit;
}
?>
```

### See Also

- radius_put_int() - Attaches an integer attribute
- radius_put_vendor_int() - Attaches a vendor specific integer attribute
- radius_put_vendor_string() - Attaches a vendor specific string attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-put-string.php
