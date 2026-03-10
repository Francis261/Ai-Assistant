# SolrCollapseFunction::setMax

Source: https://devdocs.io/php/solrcollapsefunction.setmax

(PECL solr >= 2.2.0)

SolrCollapseFunction::setMax — Selects the group heads by the max value of a numeric field or function query

### Description

```
public SolrCollapseFunction::setMax(string $max): SolrCollapseFunction
```

Selects the group heads by the max value of a numeric field or function query.

### Parameters

### Return Values

SolrCollapseFunction

### Examples

Example #1 SolrCollapseFunction::setMax() example

```
<?php

$func = new SolrCollapseFunction('field_name');

$func->setMax('sum(cscore(),field(some_field))');

$query = new SolrQuery('*:*');

$query->collapse($func);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrcollapsefunction.setmax.php
