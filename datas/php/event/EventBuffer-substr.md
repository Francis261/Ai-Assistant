# EventBuffer::substr

Source: https://devdocs.io/php/eventbuffer.substr

(PECL event >= 1.6.0)

EventBuffer::substr — Substracts a portion of the buffer data

### Description

```
public EventBuffer::substr( int $start ,  int $length  = ?): string
```

Substracts up to length bytes of the buffer data beginning at start position.

### Parameters

The start position of data to be substracted.

Maximum number of bytes to substract.

### Return Values

Returns the data substracted as a string on success, or false on failure.

### See Also

- EventBuffer::read() - Read data from an evbuffer and drain the bytes read

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.substr.php
