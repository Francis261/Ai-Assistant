# SolrCollapseFunction::__construct

Source: https://devdocs.io/php/solrcollapsefunction.construct

(PECL solr >= 2.2.0)

SolrCollapseFunction::__construct — Constructor

### Description

Collapse Function constructor

### Parameters

The field name to collapse on.

In order to collapse a result. The field type must be a single valued String, Int or Float.

### Examples

Example #1 SolrCollapseFunction::__construct() example

```
<?php

include "bootstrap.php";

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
    'path'     => SOLR_SERVER_PATH
);

$client = new SolrClient($options);

$query = new SolrQuery('*:*');

$func = new SolrCollapseFunction('field_name');

$func->setMax('sum(cscore(),field(some_other_field))');
$func->setSize(100);
$func->setNullPolicy(SolrCollapseFunction::NULLPOLICY_EXPAND);

$query->collapse($func);

$queryResponse = $client->query($query);

$response = $queryResponse->getResponse();

print_r($response);

?>
```

### See Also

- SolrQuery::collapse() - Collapses the result set to a single document per group

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrcollapsefunction.construct.php
