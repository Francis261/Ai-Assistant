# EventBuffer::search

Source: https://devdocs.io/php/eventbuffer.search

(PECL event >= 1.2.6-beta)

EventBuffer::search — Scans the buffer for an occurrence of a string

### Description

```
public EventBuffer::search( string $what ,  int $start  = -1 ,  int $end  = -1 ): mixed
```

Scans the buffer for an occurrence of the string what. It returns numeric position of the string, or false if the string was not found.

If the start argument is provided, it points to the position at which the search should begin; otherwise, the search is performed from the start of the string. If end argument provided, the search is performed between start and end buffer positions.

### Parameters

String to search.

Start search position.

End search position.

### Return Values

Returns numeric position of the first occurrence of the string in the buffer, or false if string is not found.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Examples

Example #1 EventBuffer::search() example

```
<?php
// Count total occurrences of 'str' in 'buf'
function count_instances($buf, $str) {
    $total = 0;
    $p     = 0;
    $i     = 0;

    while (1) {
        $p = $buf->search($str, $p);
        if ($p === FALSE) {
            break;
        }
        ++$total;
        ++$p;
    }

    return $total;
}

$buf = new EventBuffer();
$buf->add("Some string within a string inside another string");
var_dump(count_instances($buf, "str"));
?>
```

The above example will output something similar to:

```
int(3)
```

### See Also

- EventBuffer::searchEol() - Scans the buffer for an occurrence of an end of line

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbuffer.search.php
