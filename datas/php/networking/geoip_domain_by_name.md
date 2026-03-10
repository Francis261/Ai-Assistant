# geoip_domain_by_name

Source: https://devdocs.io/php/function.geoip-domain-by-name

(PECL geoip >= 1.1.0)

geoip_domain_by_name — Get the second level domain name

### Description

```
geoip_domain_by_name(string $hostname): string
```

The geoip_domain_by_name() function will return the second level domain names associated with a hostname or an IP address.

This function is currently only available to users who have bought a commercial GeoIP Domain Edition. A warning will be issued if the proper database cannot be located.

### Parameters

The hostname or IP address.

### Return Values

Returns the domain name on success, or false if the address cannot be found in the database.

### Examples

Example #1 A geoip_domain_by_name() example

This will output the domain associated with IP 61.106.139.1.

```
<?php
$domain = geoip_domain_by_name('61.106.139.1');

if ($domain) {
    echo 'The domain is: '. $domain;
}

?>
```

The above example will output:

```
The domain is: von.co.kr
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-domain-by-name.php
