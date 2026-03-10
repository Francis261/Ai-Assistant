# EventBuffer::searchEol

Source: https://devdocs.io/php/eventbuffer.searcheol

(PECL event >= 1.5.0)

EventBuffer::searchEol — Scans the buffer for an occurrence of an end of line

### Description

```
public EventBuffer::searchEol( int $start  = -1 ,  int $eol_style  = EventBuffer::EOL_ANY  ): mixed
```

Scans the buffer for an occurrence of an end of line specified by eol_style parameter . It returns numeric position of the string, or false if the string was not found.

If the start argument is provided, it represents the position at which the search should begin; otherwise, the search is performed from the start of the string. If end argument provided, the search is performed between start and end buffer positions.

### Parameters

Start search position.

One of EventBuffer:EOL_* constants.

### Return Values

Returns numeric position of the first occurrence of end-of-line symbol in the buffer, or false if not found.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### See Also

- EventBuffer::search() - Scans the buffer for an occurrence of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.searcheol.php
