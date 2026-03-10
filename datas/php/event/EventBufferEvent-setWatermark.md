# EventBufferEvent::setWatermark

Source: https://devdocs.io/php/eventbufferevent.setwatermark

(PECL event >= 1.2.6-beta)

EventBufferEvent::setWatermark — Adjusts read and/or write watermarks

### Description

```
public EventBufferEvent::setWatermark( int $events ,  int $lowmark ,  int $highmark ): void
```

Adjusts the read watermarks, the write watermarks, or both, of a single buffer event.

A buffer event watermark is an edge, a value specifying number of bytes to be read or written before callback is invoked. By default every read/write event triggers a callback invokation. See » Fast portable non-blocking network programming with Libevent: Callbacks and watermarks

### Parameters

Bitmask of Event::READ, Event::WRITE, or both.

Minimum watermark value.

Maximum watermark value. 0 means "unlimited".

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.setwatermark.php
