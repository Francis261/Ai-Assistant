# radius_cvt_int

Source: https://devdocs.io/php/function.radius-cvt-int

(PECL radius >= 1.1.0)

radius_cvt_int — Converts raw data to integer

### Description

```
radius_cvt_int(string $data): int
```

Converts raw data to integer

### Parameters

Input data

### Return Values

Returns the integer, retrieved from data.

### Examples

Example #1 radius_cvt_int() example

```
<?php
while ($resa = radius_get_attr($res)) {

    if (!is_array($resa)) {
        printf ("Error getting attribute: %s\n",  radius_strerror($res));
        exit;
    }

    $attr = $resa['attr'];
    $data = $resa['data'];
    
    switch ($attr) {

    case RADIUS_FRAMED_MTU:
        $mtu = radius_cvt_int($data);
        echo "MTU: $mtu<br>\n";
        break;
    }
}
?>
```

### See Also

- radius_cvt_addr() - Converts raw data to IP-Address
- radius_cvt_string() - Converts raw data to string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-cvt-int.php
