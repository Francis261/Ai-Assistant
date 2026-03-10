# geoip_country_name_by_name

Source: https://devdocs.io/php/function.geoip-country-name-by-name

(PECL geoip >= 0.2.0)

geoip_country_name_by_name — Get the full country name

### Description

```
geoip_country_name_by_name(string $hostname): string
```

The geoip_country_name_by_name() function will return the full country name corresponding to a hostname or an IP address.

### Parameters

The hostname or IP address whose location is to be looked-up.

### Return Values

Returns the country name on success, or false if the address cannot be found in the database.

### Examples

Example #1 A geoip_country_name_by_name() example

This will print where the host example.com is located.

```
<?php
$country = geoip_country_name_by_name('www.example.com');
if ($country) {
    echo 'This host is located in: ' . $country;
}
?>
```

The above example will output:

```
This host is located in: United States
```

### See Also

- geoip_country_code_by_name() - Get the two letter country code
- geoip_country_code3_by_name() - Get the three letter country code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-country-name-by-name.php
