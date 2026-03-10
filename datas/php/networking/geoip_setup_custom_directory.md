# geoip_setup_custom_directory

Source: https://devdocs.io/php/function.geoip-setup-custom-directory

(PECL geoip >= 1.1.0)

geoip_setup_custom_directory — Set a custom directory for the GeoIP database

### Description

```
geoip_setup_custom_directory(string $path): void
```

The geoip_setup_custom_directory() function will change the default directory of the GeoIP database. This is equivalent to changing geoip.custom_directory.

### Parameters

The full path of where the GeoIP database is on disk.

### Return Values

No value is returned.

### Examples

Example #1 A geoip_setup_custom_directory() example

This will change the GeoIP default database path.

```
<?php

geoip_setup_custom_directory('/some/other/path');

print geoip_db_filename(GEOIP_COUNTRY_EDITION);

?>
```

The above example will output:

```
/some/other/path/GeoIP.dat
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.geoip-setup-custom-directory.php
