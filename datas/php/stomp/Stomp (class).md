# The Stomp class

Source: https://devdocs.io/php/class.stomp

## Introduction

(PECL stomp >= 0.1.0)

Represents a connection between PHP and a Stomp compliant Message Broker.

## Class synopsis

```
public abort(string $transaction_id, array $headers = ?): bool
```

```
stomp_abort(resource $link, string $transaction_id, array $headers = ?): bool
```

```
public ack(mixed $msg, array $headers = ?): bool
```

```
stomp_ack(resource $link, mixed $msg, array $headers = ?): bool
```

```
public begin(string $transaction_id, array $headers = ?): bool
```

```
stomp_begin(resource $link, string $transaction_id, array $headers = ?): bool
```

```
public commit(string $transaction_id, array $headers = ?): bool
```

```
stomp_commit(resource $link, string $transaction_id, array $headers = ?): bool
```

```
stomp_connect(
 string $broker = ini_get("stomp.default_broker_uri"),
 string $username = ?,
 string $password = ?,
 array $headers = ?
): resource
```

```
stomp_close(resource $link): bool
```

```
public error(): string
```

```
stomp_error(resource $link): string
```

```
public getReadTimeout(): array
```

```
stomp_get_read_timeout(resource $link): array
```

```
public getSessionId(): string|false
```

```
stomp_get_session_id(resource $link): string|false
```

```
public hasFrame(): bool
```

```
stomp_has_frame(resource $link): bool
```

```
public readFrame(string $class_name = "stompFrame"): stompframe
```

```
stomp_read_frame(resource $link): array
```

```
public send(string $destination, mixed $msg, array $headers = ?): bool
```

```
stomp_send(
 resource $link,
 string $destination,
 mixed $msg,
 array $headers = ?
): bool
```

```
public setReadTimeout(int $seconds, int $microseconds = ?): void
```

```
stomp_set_read_timeout(resource $link, int $seconds, int $microseconds = ?): void
```

```
public subscribe(string $destination, array $headers = ?): bool
```

```
stomp_subscribe(resource $link, string $destination, array $headers = ?): bool
```

```
public unsubscribe(string $destination, array $headers = ?): bool
```

```
stomp_unsubscribe(resource $link, string $destination, array $headers = ?): bool
```

## Table of Contents

- Stomp::abort — Rolls back a transaction in progress
- Stomp::ack — Acknowledges consumption of a message
- Stomp::begin — Starts a transaction
- Stomp::commit — Commits a transaction in progress
- Stomp::__construct — Opens a connection
- Stomp::__destruct — Closes stomp connection
- Stomp::error — Gets the last stomp error
- Stomp::getReadTimeout — Gets read timeout
- Stomp::getSessionId — Gets the current stomp session ID
- Stomp::hasFrame — Indicates whether or not there is a frame ready to read
- Stomp::readFrame — Reads the next frame
- Stomp::send — Sends a message
- Stomp::setReadTimeout — Sets read timeout
- Stomp::subscribe — Registers to listen to a given destination
- Stomp::unsubscribe — Removes an existing subscription

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.stomp.php
