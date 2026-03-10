# EventBufferEvent::createPair

Source: https://devdocs.io/php/eventbufferevent.createpair

(PECL event >= 1.2.6-beta)

EventBufferEvent::createPair — Creates two buffer events connected to each other

### Description

```
public static EventBufferEvent::createPair( EventBase $base ,  int $options  = 0 ): array
```

Returns array of two EventBufferEvent objects connected to each other. All the usual options are supported, except for EventBufferEvent::OPT_CLOSE_ON_FREE, which has no effect, and EventBufferEvent::OPT_DEFER_CALLBACKS, which is always on.

### Parameters

Associated event base

EventBufferEvent::OPT_* constants combined with bitwise OR operator.

### Return Values

Returns array of two EventBufferEvent objects connected to each other.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.createpair.php
