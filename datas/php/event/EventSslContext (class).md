# The EventSslContext class

Source: https://devdocs.io/php/class.eventsslcontext

## Introduction

(PECL event >= 1.2.6-beta)

Represents SSL_CTX structure. Provides methods and properties to configure the SSL context.

## Class synopsis

```
public __construct( string $method ,  string $options )
```

## Properties

Path to local certificate file on filesystem. It must be a PEM-encoded file which contains certificate. It can optionally contain the certificate chain of issuers.

Path to local private key file

## Predefined Constants

SSLv2 client method. See SSL_CTX_new(3) man page.

SSLv3 client method. See SSL_CTX_new(3) man page.

SSLv23 client method. See SSL_CTX_new(3) man page.

TLS client method. See SSL_CTX_new(3) man page.

SSLv2 server method. See SSL_CTX_new(3) man page.

SSLv3 server method. See SSL_CTX_new(3) man page.

SSLv23 server method. See SSL_CTX_new(3) man page.

TLS server method. See SSL_CTX_new(3) man page.

Key for an item of the options' array used in EventSslContext::__construct(). The option points to path of local certificate.

Key for an item of the options' array used in EventSslContext::__construct(). The option points to path of the private key.

Key for an item of the options' array used in EventSslContext::__construct(). Represents passphrase of the certificate.

Key for an item of the options' array used in EventSslContext::__construct(). Represents path of the certificate authority file.

Key for an item of the options' array used in EventSslContext::__construct(). Represents path where the certificate authority file should be searched for.

Key for an item of the options' array used in EventSslContext::__construct(). Represents option that allows self-signed certificates.

Key for an item of the options' array used in EventSslContext::__construct(). Represents option that tells Event to verify peer.

Key for an item of the options' array used in EventSslContext::__construct(). Represents maximum depth for the certificate chain verification that shall be allowed for the SSL context.

Key for an item of the options' array used in EventSslContext::__construct(). Represents the cipher list for the SSL context.

## Table of Contents

- EventSslContext::__construct — Constructs an OpenSSL context for use with Event classes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventsslcontext.php
