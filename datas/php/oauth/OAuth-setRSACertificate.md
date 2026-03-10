# OAuth::setRSACertificate

Source: https://devdocs.io/php/oauth.setrsacertificate

(PECL OAuth >= 1.0.0)

OAuth::setRSACertificate — Set the RSA certificate

### Description

```
public OAuth::setRSACertificate(string $cert): mixed
```

Sets the RSA certificate.

This function is currently not documented; only its argument list is available.

### Parameters

The RSA certificate.

### Return Values

Returns true on success, or false on failure (e.g., the RSA certificate cannot be parsed.)

### Changelog

### Examples

Example #1 An OAuth::setRsaCertificate() example

```
<?php
$consume = new OAuth('1234', '', OAUTH_SIG_METHOD_RSASHA1);

$consume->setRSACertificate(file_get_contents('test.pem'));
?>
```

### See Also

- OAuth::setCaPath() - Set CA path and info

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.setrsacertificate.php
