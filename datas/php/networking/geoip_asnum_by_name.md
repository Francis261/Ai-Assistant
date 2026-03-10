# geoip_asnum_by_name

Source: https://devdocs.io/php/function.geoip-asnum-by-name

(PECL geoip >= 1.1.0)

geoip_asnum_by_name — Get the Autonomous System Numbers (ASN)

### Description

```
geoip_asnum_by_name(string $hostname): string
```

The geoip_asnum_by_name() function will return the Autonomous System Numbers (ASN) associated with an IP address.

### Parameters

The hostname or IP address.

### Return Values

Returns the ASN on success, or false if the address cannot be found in the database.

### Examples

Example #1 A geoip_asnum_by_name() example

This will output the ASN of the host www.example.com.

```
<?php
$asn = geoip_asnum_by_name('www.example.com');

if ($asn) {
    echo 'The ASN is: ' . $asn;
}
?>
```

The above example will output:

```
The ASN is: AS15133 EdgeCast Networks, Inc
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-asnum-by-name.php
