# OAuthProvider::is2LeggedEndpoint

Source: https://devdocs.io/php/oauthprovider.is2leggedendpoint

(PECL OAuth >= 1.0.0)

OAuthProvider::is2LeggedEndpoint — is2LeggedEndpoint

### Description

```
public OAuthProvider::is2LeggedEndpoint(mixed $params_array): void
```

The 2-legged flow, or request signing. It does not require a token.

This function is currently not documented; only its argument list is available.

### Parameters

### Return Values

An OAuthProvider object.

### Examples

Example #1 OAuthProvider::is2LeggedEndpoint() example

```
<?php

$provider = new OAuthProvider();

$provider->is2LeggedEndpoint(true);

?>
```

### See Also

- OAuthProvider::__construct() - Constructs a new OAuthProvider object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.is2leggedendpoint.php
