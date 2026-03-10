# SolrUtils::escapeQueryChars

Source: https://devdocs.io/php/solrutils.escapequerychars

(PECL solr >= 0.9.2)

SolrUtils::escapeQueryChars — Escapes a lucene query string

### Description

```
public static SolrUtils::escapeQueryChars(string $str): string|false
```

Lucene supports escaping special characters that are part of the query syntax.

The current list special characters are:

```
+ - && || ! ( ) { } [ ] ^ " ~ * ? : \ /
```

These characters are part of the query syntax and must be escaped

### Parameters

This is the query string to be escaped.

### Return Values

Returns the escaped string or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrutils.escapequerychars.php
