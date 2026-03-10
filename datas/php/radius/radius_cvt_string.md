# radius_cvt_string

Source: https://devdocs.io/php/function.radius-cvt-string

(PECL radius >= 1.1.0)

radius_cvt_string — Converts raw data to string

### Description

```
radius_cvt_string(string $data): string
```

Converts raw data to string

### Parameters

Input data

### Return Values

Returns the string, retrieved from data.

### Examples

Example #1 radius_cvt_string() example

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

    case RADIUS_FILTER_ID:
        $id = radius_cvt_string($data);
        echo "Filter ID: $id<br>\n";
        break;
    }
}
?>
```

### See Also

- radius_cvt_addr() - Converts raw data to IP-Address
- radius_cvt_int() - Converts raw data to integer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-cvt-string.php
