# EventSslContext::__construct

Source: https://devdocs.io/php/eventsslcontext.construct

(PECL event >= 1.2.6-beta)

EventSslContext::__construct — Constructs an OpenSSL context for use with Event classes

### Description

```
public EventSslContext::__construct( string $method ,  string $options )
```

Creates SSL context holding pointer to SSL_CTX (see the system manual).

### Parameters

One of EventSslContext::*_METHOD constants.

Associative array of SSL context options One of EventSslContext::OPT_* constants.

### Examples

Example #1 EventSslContext::__construct() example

```
<?php
$ctx = new EventSslContext(EventSslContext::SSLv3_SERVER_METHOD, array(
     EventSslContext::OPT_LOCAL_CERT        => $local_cert,
     EventSslContext::OPT_LOCAL_PK          => $local_pk,
     EventSslContext::OPT_PASSPHRASE        => "echo server",
     EventSslContext::OPT_VERIFY_PEER       => true,
     EventSslContext::OPT_ALLOW_SELF_SIGNED => false,
));
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventsslcontext.construct.php
