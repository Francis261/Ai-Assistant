# geoip_db_get_all_info

Source: https://devdocs.io/php/function.geoip-db-get-all-info

(PECL geoip >= 1.0.1)

geoip_db_get_all_info — Returns detailed information about all GeoIP database types

### Description

```
geoip_db_get_all_info(): array
```

The geoip_db_get_all_info() function will return detailed information as a multi-dimensional array about all the GeoIP database types.

This function is available even if no databases are installed. It will simply list them as non-available.

The names of the different keys of the returning associative array are as follows:

- "available" -- Boolean, indicate if DB is available (see geoip_db_avail())
- "description" -- The database description
- "filename" -- The database filename on disk (see geoip_db_filename())

### Parameters

This function has no parameters.

### Return Values

Returns the associative array.

### Examples

Example #1 A geoip_db_get_all_info() example

This will print the array containing all the information.

```
<?php
$infos = geoip_db_get_all_info();
if (is_array($infos)) {
    var_dump($infos);
}
?>
```

The above example will output:

```
array(11) {
  [1]=>
  array(3) {
    ["available"]=>
    bool(true)
    ["description"]=>
    string(21) "GeoIP Country Edition"
    ["filename"]=>
    string(32) "/usr/share/GeoIP/GeoIP.dat"
  }

[ ... ]

  [11]=>
  array(3) {
    ["available"]=>
    bool(false)
    ["description"]=>
    string(25) "GeoIP Domain Name Edition"
    ["filename"]=>
    string(38) "/usr/share/GeoIP/GeoIPDomain.dat"
  }
}
```

Example #2 A geoip_db_get_all_info() example

You can use the various constants as keys to get only parts of the information.

```
<?php
$infos = geoip_db_get_all_info();
if ($infos[GEOIP_COUNTRY_EDITION]['available']) {
    echo $infos[GEOIP_COUNTRY_EDITION]['description'];
}
?>
```

The above example will output:

```
GeoIP Country Edition
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-db-get-all-info.php
