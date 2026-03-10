# The EventHttp class

Source: https://devdocs.io/php/class.eventhttp

## Introduction

(PECL event >= 1.4.0-beta)

Represents HTTP server.

## Class synopsis

```
public accept( mixed $socket ): bool
```

```
public addServerAlias( string $alias ): bool
```

```
public bind( string $address ,  int $port ): void
```

```
public __construct( EventBase $base ,  EventSslContext $ctx  = null )
```

```
public removeServerAlias( string $alias ): bool
```

```
public setAllowedMethods( int $methods ): void
```

```
public setCallback( string $path ,  string $cb ,  string $arg  = ?): void
```

```
public setDefaultCallback( string $cb ,  string $arg  = ?): void
```

```
public setMaxBodySize( int $value ): void
```

```
public setMaxHeadersSize( int $value ): void
```

```
public setTimeout( int $value ): void
```

## Table of Contents

- EventHttp::accept — Makes an HTTP server accept connections on the specified socket stream or resource
- EventHttp::addServerAlias — Adds a server alias to the HTTP server object
- EventHttp::bind — Binds an HTTP server on the specified address and port
- EventHttp::__construct — Constructs EventHttp object (the HTTP server)
- EventHttp::removeServerAlias — Removes server alias
- EventHttp::setAllowedMethods — Sets the what HTTP methods are supported in requests accepted by this server, and passed to user callbacks
- EventHttp::setCallback — Sets a callback for specified URI
- EventHttp::setDefaultCallback — Sets default callback to handle requests that are not caught by specific callbacks
- EventHttp::setMaxBodySize — Sets maximum request body size
- EventHttp::setMaxHeadersSize — Sets maximum HTTP header size
- EventHttp::setTimeout — Sets the timeout for an HTTP request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventhttp.php
