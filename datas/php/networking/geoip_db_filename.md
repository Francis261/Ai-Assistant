# geoip_db_filename

Source: https://devdocs.io/php/function.geoip-db-filename

(PECL geoip >= 1.0.1)

geoip_db_filename — Returns the filename of the corresponding GeoIP Database

### Description

```
geoip_db_filename(int $database): string
```

The geoip_db_filename() function returns the filename of the corresponding GeoIP Database.

It does not indicate if the file exists or not on disk, only where the library is looking for the database.

### Parameters

The database type as an integer. You can use the various constants defined with this extension (ie: GEOIP_*_EDITION).

### Return Values

Returns the filename of the corresponding database, or null on error.

### Examples

Example #1 A geoip_db_filename() example

This will output the filename of the corresponding database.

```
<?php

print geoip_db_filename(GEOIP_COUNTRY_EDITION);

?>
```

The above example will output:

```
/usr/share/GeoIP/GeoIP.dat
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-db-filename.php
