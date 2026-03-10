# radius_put_int

Source: https://devdocs.io/php/function.radius-put-int

(PECL radius >= 1.1.0)

radius_put_int — Attaches an integer attribute

### Description

```
radius_put_int(
 resource $radius_handle,
 int $type,
 int $value,
 int $options = 0,
 int $tag = ?
): bool
```

Attaches an integer attribute to the current RADIUS request.

Note:

A request must be created via radius_create_request() before this function can be called.

### Parameters

The RADIUS resource.

The attribute type.

The attribute value.

A bitmask of the attribute options. The available options include RADIUS_OPTION_TAGGED and RADIUS_OPTION_SALT.

The attribute tag. This parameter is ignored unless the RADIUS_OPTION_TAGGED option is set.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 radius_put_int() example

```
<?php
if (!radius_put_int($res, RAD_FRAMED_PROTOCOL, RAD_PPP)) {
   echo 'RadiusError:' . radius_strerror($res). "\n<br />";
   exit;
}
?>
```

### See Also

- radius_put_string() - Attaches a string attribute
- radius_put_vendor_int() - Attaches a vendor specific integer attribute
- radius_put_vendor_string() - Attaches a vendor specific string attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-put-int.php
