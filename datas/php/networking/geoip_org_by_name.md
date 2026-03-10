# geoip_org_by_name

Source: https://devdocs.io/php/function.geoip-org-by-name

(PECL geoip >= 0.2.0)

geoip_org_by_name — Get the organization name

### Description

```
geoip_org_by_name(string $hostname): string
```

The geoip_org_by_name() function will return the name of the organization that an IP is assigned to.

This function is currently only available to users who have bought a commercial GeoIP Organization, ISP or AS Edition. A warning will be issued if the proper database cannot be located.

### Parameters

The hostname or IP address.

### Return Values

Returns the organization name on success, or false if the address cannot be found in the database.

### Examples

Example #1 A geoip_org_by_name() example

This will print to whom the host example.com IP is allocated.

```
<?php
$org = geoip_org_by_name('www.example.com');
if ($org) {
    echo 'This host IP is allocated to: ' . $org;
}
?>
```

The above example will output:

```
This host IP is allocated to: ICANN c/o Internet Assigned Numbers Authority
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-org-by-name.php
