# EventBuffer::copyout

Source: https://devdocs.io/php/eventbuffer.copyout

(PECL event >= 1.2.6-beta)

EventBuffer::copyout — Copies out specified number of bytes from the front of the buffer

### Description

```
public EventBuffer::copyout( string &$data ,  int $max_bytes ): int
```

Behaves just like EventBuffer::read(), but does not drain any data from the buffer. I.e. it copies the first max_bytes bytes from the front of the buffer into data. If there are fewer than max_bytes bytes available, the function copies all the bytes there are.

### Parameters

Output string.

The number of bytes to copy.

### Return Values

Returns the number of bytes copied, or -1 on failure.

### See Also

- EventBuffer::read() - Read data from an evbuffer and drain the bytes read
- EventBuffer::appendFrom() - Moves the specified number of bytes from a source buffer to the end of the current buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.copyout.php
