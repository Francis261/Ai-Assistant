# geoip_continent_code_by_name

Source: https://devdocs.io/php/function.geoip-continent-code-by-name

(PECL geoip >= 1.0.3)

geoip_continent_code_by_name — Get the two letter continent code

### Description

```
geoip_continent_code_by_name(string $hostname): string
```

The geoip_continent_code_by_name() function will return the two letter continent code corresponding to a hostname or an IP address.

### Parameters

The hostname or IP address whose location is to be looked-up.

### Return Values

Returns the two letter continent code on success, or false if the address cannot be found in the database.

### Examples

Example #1 A geoip_continent_code_by_name() example

This will print where the host example.com is located.

```
<?php
$continent = geoip_continent_code_by_name('www.example.com');
if ($continent) {
    echo 'This host is located in: ' . $continent;
}
?>
```

The above example will output:

```
This host is located in: NA
```

### See Also

- geoip_country_code_by_name() - Get the two letter country code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-continent-code-by-name.php
