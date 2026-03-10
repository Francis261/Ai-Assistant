# EventBufferEvent::getDnsErrorString

Source: https://devdocs.io/php/eventbufferevent.getdnserrorstring

(PECL event >= 1.2.6-beta)

EventBufferEvent::getDnsErrorString — Returns string describing the last failed DNS lookup attempt

### Description

```
public EventBufferEvent::getDnsErrorString(): string
```

Returns string describing the last failed DNS lookup attempt made by EventBufferEvent::connectHost(), or an empty string, if there is no DNS error detected.

### Parameters

This function has no parameters.

### Return Values

Returns a string describing DNS lookup error, or an empty string for no error.

### See Also

- EventBufferEvent::connectHost() - Connects to a hostname with optionally asyncronous DNS resolving

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.getdnserrorstring.php
