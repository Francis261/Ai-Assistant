# The EventHttpRequest class

Source: https://devdocs.io/php/class.eventhttprequest

## Introduction

(PECL event >= 1.4.0-beta)

Represents an HTTP request.

## Class synopsis

```
public addHeader( string $key ,  string $value ,  int $type ): bool
```

```
public cancel(): void
```

```
public clearHeaders(): void
```

```
public closeConnection(): void
```

```
public __construct( callable $callback ,  mixed $data  = null )
```

```
public findHeader( string $key ,  string $type ): void
```

```
public free(): void
```

```
public closeConnection(): EventBufferEvent
```

```
public getCommand(): void
```

```
public closeConnection(): EventHttpConnection
```

```
public getHost(): string
```

```
public getInputBuffer(): EventBuffer
```

```
public getInputHeaders(): array
```

```
public getOutputBuffer(): EventBuffer
```

```
public getOutputHeaders(): void
```

```
public getResponseCode(): int
```

```
public getUri(): string
```

```
public removeHeader( string $key ,  string $type ): void
```

```
public sendError( int $error ,  string $reason  = null ): void
```

```
public sendReply( int $code ,  string $reason ,  EventBuffer $buf  = ?): void
```

```
public sendReplyChunk( EventBuffer $buf ): void
```

```
public sendReplyEnd(): void
```

```
public sendReplyStart( int $code ,  string $reason ): void
```

## Predefined Constants

GET method(command)

POST method(command)

HEAD method(command)

PUT method(command)

DELETE command(method)

OPTIONS method(command)

TRACE method(command)

CONNECT method(command)

PATCH method(command)

Request input header type.

Request output header type.

## Table of Contents

- EventHttpRequest::addHeader — Adds an HTTP header to the headers of the request
- EventHttpRequest::cancel — Cancels a pending HTTP request
- EventHttpRequest::clearHeaders — Removes all output headers from the header list of the request
- EventHttpRequest::closeConnection — Closes associated HTTP connection
- EventHttpRequest::__construct — Constructs EventHttpRequest object
- EventHttpRequest::findHeader — Finds the value belonging a header
- EventHttpRequest::free — Frees the object and removes associated events
- EventHttpRequest::getBufferEvent — Returns EventBufferEvent object
- EventHttpRequest::getCommand — Returns the request command(method)
- EventHttpRequest::getConnection — Returns EventHttpConnection object
- EventHttpRequest::getHost — Returns the request host
- EventHttpRequest::getInputBuffer — Returns the input buffer
- EventHttpRequest::getInputHeaders — Returns associative array of the input headers
- EventHttpRequest::getOutputBuffer — Returns the output buffer of the request
- EventHttpRequest::getOutputHeaders — Returns associative array of the output headers
- EventHttpRequest::getResponseCode — Returns the response code
- EventHttpRequest::getUri — Returns the request URI
- EventHttpRequest::removeHeader — Removes an HTTP header from the headers of the request
- EventHttpRequest::sendError — Send an HTML error message to the client
- EventHttpRequest::sendReply — Send an HTML reply to the client
- EventHttpRequest::sendReplyChunk — Send another data chunk as part of an ongoing chunked reply
- EventHttpRequest::sendReplyEnd — Complete a chunked reply, freeing the request as appropriate
- EventHttpRequest::sendReplyStart — Initiate a chunked reply

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventhttprequest.php
