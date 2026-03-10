# SplPriorityQueue::setExtractFlags

Source: https://devdocs.io/php/splpriorityqueue.setextractflags

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplPriorityQueue::setExtractFlags — Sets the mode of extraction

### Description

```
public SplPriorityQueue::setExtractFlags(int $flags): int
```

### Parameters

Defines what is extracted by SplPriorityQueue::current(), SplPriorityQueue::top() and SplPriorityQueue::extract().

- SplPriorityQueue::EXTR_DATA (0x00000001): Extract the data
- SplPriorityQueue::EXTR_PRIORITY (0x00000002): Extract the priority
- SplPriorityQueue::EXTR_BOTH (0x00000003): Extract an array containing both

The default mode is SplPriorityQueue::EXTR_DATA.

### Return Values

Returns the flags of extraction.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splpriorityqueue.setextractflags.php
