# The EventHttpConnection class

Source: https://devdocs.io/php/class.eventhttpconnection

## Introduction

(PECL event >= 1.4.0-beta)

Represents an HTTP connection.

## Class synopsis

```
public __construct(
  EventBase $base ,
  EventDnsBase $dns_base ,
  string $address ,
  int $port ,
  EventSslContext $ctx  = null 
)
```

```
public getBase(): EventBase
```

```
public getPeer( string &$address ,  int &$port ): void
```

```
public makeRequest( EventHttpRequest $req ,  int $type ,  string $uri ): bool
```

```
public setCloseCallback( callable $callback ,  mixed $data  = ?): void
```

```
public setLocalAddress( string $address ): void
```

```
public setLocalPort( int $port ): void
```

```
public setMaxBodySize( string $max_size ): void
```

```
public setMaxHeadersSize( string $max_size ): void
```

```
public setRetries( int $retries ): void
```

```
public setTimeout( int $timeout ): void
```

## Table of Contents

- EventHttpConnection::__construct — Constructs EventHttpConnection object
- EventHttpConnection::getBase — Returns event base associated with the connection
- EventHttpConnection::getPeer — Gets the remote address and port associated with the connection
- EventHttpConnection::makeRequest — Makes an HTTP request over the specified connection
- EventHttpConnection::setCloseCallback — Set callback for connection close
- EventHttpConnection::setLocalAddress — Sets the IP address from which HTTP connections are made
- EventHttpConnection::setLocalPort — Sets the local port from which connections are made
- EventHttpConnection::setMaxBodySize — Sets maximum body size for the connection
- EventHttpConnection::setMaxHeadersSize — Sets maximum header size
- EventHttpConnection::setRetries — Sets the retry limit for the connection
- EventHttpConnection::setTimeout — Sets the timeout for the connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventhttpconnection.php
