# radius_get_vendor_attr

Source: https://devdocs.io/php/function.radius-get-vendor-attr

(PECL radius >= 1.1.0)

radius_get_vendor_attr — Extracts a vendor specific attribute

### Description

```
radius_get_vendor_attr(string $data): array
```

If radius_get_attr() returns RADIUS_VENDOR_SPECIFIC, radius_get_vendor_attr() may be called to determine the vendor.

### Parameters

Input data

### Return Values

Returns an associative array containing the attribute-type, vendor and the data, or false on error.

### Examples

Example #1 radius_get_vendor_attr() example

```
<?php
while ($resa = radius_get_attr($res)) {

    if (!is_array($resa)) {
        printf ("Error getting attribute: %s\n",  radius_strerror($res));
        exit;
    }

    $attr = $resa['attr'];
    $data = $resa['data'];
    printf("Got Attr:%d %d Bytes %s\n", $attr, strlen($data), bin2hex($data));
    if ($attr == RADIUS_VENDOR_SPECIFIC) {

        $resv = radius_get_vendor_attr($data);
        if (is_array($resv)) {
            $vendor = $resv['vendor'];
            $attrv = $resv['attr'];
            $datav = $resv['data'];    
            printf("Got Vendor Attr:%d %d Bytes %s\n", $attrv, strlen($datav), bin2hex($datav));
        }
        
    }
}
?>
```

### See Also

- radius_get_attr() - Extracts an attribute
- radius_put_vendor_attr() - Attaches a vendor specific binary attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-get-vendor-attr.php
