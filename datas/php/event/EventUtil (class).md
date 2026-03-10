# The EventUtil class

Source: https://devdocs.io/php/class.eventutil

## Introduction

(PECL event >= 1.5.0)

EventUtil is a singleton with supplimentary methods and constants.

## Class synopsis

```
abstract public __construct()
```

```
public static getLastSocketErrno( mixed $socket  = null ): int
```

```
public static getLastSocketError( mixed $socket  = ?): string
```

```
public static getSocketFd( mixed $socket ): int
```

```
public static getSocketName( mixed $socket ,  string &$address ,  mixed &$port  = ?): bool
```

```
public static setSocketOption(
  mixed $socket ,
  int $level ,
  int $optname ,
  mixed $optval 
): bool
```

```
public static sslRandPoll(): void
```

## Predefined Constants

IPv4 address family

IPv6 address family

Unspecified IP address family

Socket option. Enable socket debugging. Only allowed for processes with the CAP_NET_ADMIN capability or an effective user ID of 0. (Added in event-1.6.0.)

Socket option. Indicates that the rules used in validating addresses supplied in a bind(2) call should allow reuse of local addresses. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. Enable sending of keep-alive messages on connection-oriented sockets. Expects an integer boolean flag. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. When enabled, a close(2) or shutdown(2) will not return until all queued messages for the socket have been successfully sent or the linger timeout has been reached. Otherwise, the call returns immediately and the closing is done in the background. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. Reports whether transmission of broadcast messages is supported. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option level. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option level. See the socket(7) manual page. (Added in event-1.6.0.)

Socket option level. See the socket(7) manual page. (Added in event-1.6.0.)

See the socket(7) manual page. (Added in event-1.6.0.)

See the socket(7) manual page. (Added in event-1.6.0.)

Libevent' version number at the time when Event extension had been compiled with the library.

## Table of Contents

- EventUtil::__construct — The abstract constructor
- EventUtil::getLastSocketErrno — Returns the most recent socket error number
- EventUtil::getLastSocketError — Returns the most recent socket error
- EventUtil::getSocketFd — Returns numeric file descriptor of a socket, or stream
- EventUtil::getSocketName — Retreives the current address to which the socket is bound
- EventUtil::setSocketOption — Sets socket options
- EventUtil::sslRandPoll — Generates entropy by means of OpenSSL's RAND_poll()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventutil.php
