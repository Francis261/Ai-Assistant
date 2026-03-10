# The SolrUtils class

Source: https://devdocs.io/php/class.solrutils

## Introduction

(PECL solr >= 0.9.2)

Contains utility methods for retrieving the current extension version and preparing query phrases.

Also contains method for escaping query strings and parsing XML responses.

## Class synopsis

```
public static digestXmlResponse(string $xmlresponse, int $parse_mode = 0): SolrObject
```

```
public static escapeQueryChars(string $str): string|false
```

```
public static getSolrVersion(): string
```

```
public static queryPhrase(string $str): string
```

## Table of Contents

- SolrUtils::digestXmlResponse — Parses an response XML string into a SolrObject
- SolrUtils::escapeQueryChars — Escapes a lucene query string
- SolrUtils::getSolrVersion — Returns the current version of the Solr extension
- SolrUtils::queryPhrase — Prepares a phrase from an unescaped lucene string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrutils.php
