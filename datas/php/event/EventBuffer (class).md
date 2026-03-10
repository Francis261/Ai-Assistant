# The EventBuffer class

Source: https://devdocs.io/php/class.eventbuffer

## Introduction

(PECL event >= 1.5.0)

EventBuffer represents Libevent's "evbuffer", an utility functionality for buffered I/O.

Event buffers are meant to be generally useful for doing the "buffer" part of buffered network I/O.

## Class synopsis

```
public add( string $data ): bool
```

```
public addBuffer( EventBuffer $buf ): bool
```

```
public appendFrom( EventBuffer $buf ,  int $len ): int
```

```
public __construct()
```

```
public copyout( string &$data ,  int $max_bytes ): int
```

```
public drain( int $len ): bool
```

```
public enableLocking(): void
```

```
public expand( int $len ): bool
```

```
public freeze( bool $at_front ): bool
```

```
public lock(): void
```

```
public prepend( string $data ): bool
```

```
public prependBuffer( EventBuffer $buf ): bool
```

```
public pullup( int $size ): string
```

```
public read( int $max_bytes ): string
```

```
public read( mixed $fd ,  int $howmuch ): int
```

```
public readLine( int $eol_style ): string
```

```
public search( string $what ,  int $start  = -1 ,  int $end  = -1 ): mixed
```

```
public searchEol( int $start  = -1 ,  int $eol_style  = EventBuffer::EOL_ANY  ): mixed
```

```
public substr( int $start ,  int $length  = ?): string
```

```
public unfreeze( bool $at_front ): bool
```

```
public unlock(): bool
```

```
public write( mixed $fd ,  int $howmuch  = ?): int
```

## Properties

The number of bytes stored in an event buffer.

The number of bytes stored contiguously at the front of the buffer. The bytes in a buffer may be stored in multiple separate chunks of memory; the property returns the number of bytes currently stored in the first chunk.

## Predefined Constants

The end of line is any sequence of any number of carriage return and linefeed characters. This format is not very useful; it exists mainly for backward compatibility.

The end of the line is an optional carriage return, followed by a linefeed. (In other words, it is either a "\r\n" or a "\n" .) This format is useful in parsing text-based Internet protocols, since the standards generally prescribe a "\r\n" line-terminator, but nonconformant clients sometimes say just "\n".

The end of a line is a single carriage return, followed by a single linefeed. (This is also known as "\r\n". The ASCII values are 0x0D 0x0A ).

The end of a line is a single linefeed character. (This is also known as "\n". It is ASCII value is 0x0A .)

Flag used as argument of EventBuffer::setPosition() method. If this flag specified, the position pointer is moved to an absolute position within the buffer.

The same as EventBuffer::PTR_SET, except this flag causes EventBuffer::setPosition() method to move position forward up to the specified number of bytes(instead of setting absolute position).

## Table of Contents

- EventBuffer::add — Append data to the end of an event buffer
- EventBuffer::addBuffer — Move all data from a buffer provided to the current instance of EventBuffer
- EventBuffer::appendFrom — Moves the specified number of bytes from a source buffer to the end of the current buffer
- EventBuffer::__construct — Constructs EventBuffer object
- EventBuffer::copyout — Copies out specified number of bytes from the front of the buffer
- EventBuffer::drain — Removes specified number of bytes from the front of the buffer without copying it anywhere
- EventBuffer::enableLocking — Description
- EventBuffer::expand — Reserves space in buffer
- EventBuffer::freeze — Prevent calls that modify an event buffer from succeeding
- EventBuffer::lock — Acquires a lock on buffer
- EventBuffer::prepend — Prepend data to the front of the buffer
- EventBuffer::prependBuffer — Moves all data from source buffer to the front of current buffer
- EventBuffer::pullup — Linearizes data within buffer and returns it's contents as a string
- EventBuffer::read — Read data from an evbuffer and drain the bytes read
- EventBuffer::readFrom — Read data from a file onto the end of the buffer
- EventBuffer::readLine — Extracts a line from the front of the buffer
- EventBuffer::search — Scans the buffer for an occurrence of a string
- EventBuffer::searchEol — Scans the buffer for an occurrence of an end of line
- EventBuffer::substr — Substracts a portion of the buffer data
- EventBuffer::unfreeze — Re-enable calls that modify an event buffer
- EventBuffer::unlock — Releases lock acquired by EventBuffer::lock
- EventBuffer::write — Write contents of the buffer to a file or socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventbuffer.php
