# OAuthProvider::__construct

Source: https://devdocs.io/php/oauthprovider.construct

(PECL OAuth >= 1.0.0)

OAuthProvider::__construct — Constructs a new OAuthProvider object

### Description

```
public OAuthProvider::__construct(array $params_array = ?)
```

Initiates a new OAuthProvider object.

This function is currently not documented; only its argument list is available.

### Parameters

Setting these optional parameters is limited to the CLI SAPI.

### Return Values

An OAuthProvider object.

### Examples

Example #1 OAuthProvider::__construct() example

```
<?php
try {

    $op = new OAuthProvider();

    // Uses user-defined callback functions
    $op->consumerHandler(array($this, 'lookupConsumer'));
    $op->timestampNonceHandler(array($this, 'timestampNonceChecker'));
    $op->tokenHandler(array($this, 'myTokenHandler'));

    // Ignore the foo_uri parameter
    $op->setParam('foo_uri', NULL);

    // No token needed for this end point
    $op->setRequestTokenPath('/v1/oauth/request_token');

    $op->checkOAuthRequest();

} catch (OAuthException $e) {

    echo OAuthProvider::reportProblem($e);
}
?>
```

### See Also

- OAuthProvider::setParam() - Set a parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.construct.php
