# geoip_isp_by_name

Source: https://devdocs.io/php/function.geoip-isp-by-name

(PECL geoip >= 1.0.2)

geoip_isp_by_name — Get the Internet Service Provider (ISP) name

### Description

```
geoip_isp_by_name(string $hostname): string
```

The geoip_isp_by_name() function will return the name of the Internet Service Provider (ISP) that an IP is assigned to.

This function is currently only available to users who have bought a commercial GeoIP ISP Edition. A warning will be issued if the proper database cannot be located.

### Parameters

The hostname or IP address.

### Return Values

Returns the ISP name on success, or false if the address cannot be found in the database.

### Examples

Example #1 A geoip_isp_by_name() example

This will print the ISP name of host example.com.

```
<?php
$isp = geoip_isp_by_name('www.example.com');
if ($isp) {
    echo 'This host IP is from ISP: ' . $isp;
}
?>
```

The above example will output:

```
This host IP is from ISP: ICANN c/o Internet Assigned Numbers Authority
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-isp-by-name.php
