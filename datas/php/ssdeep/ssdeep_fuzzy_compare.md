# ssdeep_fuzzy_compare

Source: https://devdocs.io/php/function.ssdeep-fuzzy-compare

(PECL ssdeep >= 1.0.0)

ssdeep_fuzzy_compare — Calculates the match score between two fuzzy hash signatures

### Description

```
ssdeep_fuzzy_compare(string $signature1, string $signature2): int
```

Calculates the match score between signature1 and signature2 using » context-triggered piecewise hashing, and returns the match score.

### Parameters

The first fuzzy hash signature string.

The second fuzzy hash signature string.

### Return Values

Returns an integer from 0 to 100 on success, false otherwise.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssdeep-fuzzy-compare.php
