# openssl_get_cert_locations

Source: https://devdocs.io/php/function.openssl-get-cert-locations

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

openssl_get_cert_locations — Retrieve the available certificate locations

### Description

```
openssl_get_cert_locations(): array
```

openssl_get_cert_locations() returns an array with information about the available certificate locations that will be searched for SSL certificates.

### Parameters

This function has no parameters.

### Return Values

Returns an array with the available certificate locations.

### Examples

Example #1 openssl_get_cert_locations() example

```
<?php
var_dump(openssl_get_cert_locations());
?>
```

The above example will output:

```
array(8) {
  ["default_cert_file"]=>
  string(21) "/usr/lib/ssl/cert.pem"
  ["default_cert_file_env"]=>
  string(13) "SSL_CERT_FILE"
  ["default_cert_dir"]=>
  string(18) "/usr/lib/ssl/certs"
  ["default_cert_dir_env"]=>
  string(12) "SSL_CERT_DIR"
  ["default_private_dir"]=>
  string(20) "/usr/lib/ssl/private"
  ["default_default_cert_area"]=>
  string(12) "/usr/lib/ssl"
  ["ini_cafile"]=>
  string(0) ""
  ["ini_capath"]=>
  string(0) ""
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-get-cert-locations.php
