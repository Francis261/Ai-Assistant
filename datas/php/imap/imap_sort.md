# imap_sort

Source: https://devdocs.io/php/function.imap-sort

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_sort — Gets and sort messages

### Description

```
imap_sort(
 IMAP\Connection $imap,
 int $criteria,
 bool $reverse,
 int $flags = 0,
 ?string $search_criteria = null,
 ?string $charset = null
): array|false
```

Gets and sorts message numbers by the given parameters.

### Parameters

An IMAP\Connection instance.

Criteria can be one (and only one) of the following:

- SORTDATE - message Date
- SORTARRIVAL - arrival date
- SORTFROM - mailbox in first From address
- SORTSUBJECT - message subject
- SORTTO - mailbox in first To address
- SORTCC - mailbox in first cc address
- SORTSIZE - size of message in octets

Whether to sort in reverse order.

The flags are a bitmask of one or more of the following:

- SE_UID - Return UIDs instead of sequence numbers
- SE_NOPREFETCH - Don't prefetch searched messages

IMAP2-format search criteria string. For details see imap_search().

MIME character set to use when sorting strings.

### Return Values

Returns an array of message numbers sorted by the given parameters, or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-sort.php
