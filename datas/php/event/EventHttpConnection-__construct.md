# EventHttpConnection::__construct

Source: https://devdocs.io/php/eventhttpconnection.construct

(PECL event >= 1.2.6-beta)

EventHttpConnection::__construct — Constructs EventHttpConnection object

### Description

```
public EventHttpConnection::__construct(
  EventBase $base ,
  EventDnsBase $dns_base ,
  string $address ,
  int $port ,
  EventSslContext $ctx  = null 
)
```

Constructs EventHttpConnection object.

### Parameters

Associated event base.

If dns_base is null, hostname resolution will block.

The address to connect to.

The port to connect to.

EventSslContext class object. Enables OpenSSL.

Note:

This parameter is available only if Event is compiled with OpenSSL support and only with Libevent
 2.1.0-alpha and higher.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttpconnection.construct.php
