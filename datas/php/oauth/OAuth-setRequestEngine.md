# OAuth::setRequestEngine

Source: https://devdocs.io/php/oauth.setrequestengine

(PECL OAuth >= 1.0.0)

OAuth::setRequestEngine — The setRequestEngine purpose

### Description

```
public OAuth::setRequestEngine(int $reqengine): void
```

Sets the Request Engine, that will be sending the HTTP requests.

This function is currently not documented; only its argument list is available.

### Parameters

The desired request engine. Set to OAUTH_REQENGINE_STREAMS to use PHP Streams, or OAUTH_REQENGINE_CURL to use Curl.

### Return Values

No value is returned.

### Errors/Exceptions

Emits an OAuthException exception if an invalid request engine is chosen.

### Examples

Example #1 OAuth::setRequestEngine() example

```
<?php
$consumer = new OAuth();

$consumer->setRequestEngine(OAUTH_REQENGINE_STREAMS);
?>
```

### See Also

- Curl
- PHP streams
- OAuthException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.setrequestengine.php
