# mysqli_get_links_stats

Source: https://devdocs.io/php/function.mysqli-get-links-stats

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

mysqli_get_links_stats — Return information about open and cached links

### Description

```
mysqli_get_links_stats(): array
```

mysqli_get_links_stats() returns information about open and cached MySQL links.

### Parameters

This function has no parameters.

### Return Values

mysqli_get_links_stats() returns an associative array with three elements, keyed as follows:

An int indicating the total number of open links in any state.

An int representing the number of active persistent connections.

An int representing the number of inactive persistent connections.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mysqli-get-links-stats.php
