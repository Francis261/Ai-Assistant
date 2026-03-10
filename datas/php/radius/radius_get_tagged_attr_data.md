# radius_get_tagged_attr_data

Source: https://devdocs.io/php/function.radius-get-tagged-attr-data

(PECL radius >= 1.3.0)

radius_get_tagged_attr_data — Extracts the data from a tagged attribute

### Description

```
radius_get_tagged_attr_data(string $data): string|false
```

If a tagged attribute has been returned from radius_get_attr(), radius_get_tagged_attr_data() will return the data from the attribute.

### Parameters

The tagged attribute to be decoded.

### Return Values

Returns the data from the tagged attribute or false on failure.

### Examples

Example #1 radius_get_tagged_attr_data() example

```
<?php
while ($resa = radius_get_attr($res)) {
    if (!is_array($resa)) {
        printf ("Error getting attribute: %s\n",  radius_strerror($res));
        exit;
    }

    $attr = $resa['attr'];
    $data = $resa['data'];

    $tag = radius_get_tagged_attr_tag($data);
    $value = radius_get_tagged_attr_data($data);

    printf("Got tagged attribute with tag %d and value %s\n", $tag, $value);
}
?>
```

### See Also

- radius_get_attr() - Extracts an attribute
- radius_get_tagged_attr_tag() - Extracts the tag from a tagged attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-get-tagged-attr-data.php
