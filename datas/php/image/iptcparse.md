# iptcparse

Source: https://devdocs.io/php/function.iptcparse

(PHP 4, PHP 5, PHP 7, PHP 8)

iptcparse — Parse a binary IPTC block into single tags

### Description

```
iptcparse(string $iptc_block): array|false
```

Parses an » IPTC block into its single tags.

### Parameters

A binary IPTC block.

### Return Values

Returns an array using the tagmarker as an index and the value as the value. It returns false on error or if no IPTC data was found.

### Examples

Example #1 iptcparse() used together with getimagesize()

```
<?php
$size = getimagesize('./test.jpg', $info);
if(isset($info['APP13']))
{
    $iptc = iptcparse($info['APP13']);
    var_dump($iptc);
}
?>
```

### Notes

Note:

This function does not require the GD image library.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iptcparse.php
