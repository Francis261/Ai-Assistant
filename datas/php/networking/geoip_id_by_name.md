# geoip_id_by_name

Source: https://devdocs.io/php/function.geoip-id-by-name

(PECL geoip >= 0.2.0)

geoip_id_by_name — Get the Internet connection type

### Description

```
geoip_id_by_name(string $hostname): int
```

The geoip_id_by_name() function will return the Internet connection type corresponding to a hostname or an IP address.

The return value is numeric and can be compared to the following constants:

- GEOIP_UNKNOWN_SPEED
- GEOIP_DIALUP_SPEED
- GEOIP_CABLEDSL_SPEED
- GEOIP_CORPORATE_SPEED

### Parameters

The hostname or IP address whose connection type is to be looked-up.

### Return Values

Returns the connection type.

### Examples

Example #1 A geoip_id_by_name() example

This will output the connection type of the host example.com.

```
<?php
$netspeed = geoip_id_by_name('www.example.com');

echo 'The connection type is ';

switch ($netspeed) {
    case GEOIP_DIALUP_SPEED:
        echo 'dial-up';
        break;
    case GEOIP_CABLEDSL_SPEED:
        echo 'cable or DSL';
        break;
    case GEOIP_CORPORATE_SPEED:
        echo 'corporate';
        break;
    case GEOIP_UNKNOWN_SPEED:
    default:
        echo 'unknown';
}
?>
```

The above example will output:

```
The connection type is corporate
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-id-by-name.php
