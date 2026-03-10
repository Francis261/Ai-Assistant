# SolrQuery::addFacetQuery

Source: https://devdocs.io/php/solrquery.addfacetquery

(PECL solr >= 0.9.2)

SolrQuery::addFacetQuery — Adds a facet query

### Description

```
public SolrQuery::addFacetQuery(string $facetQuery): SolrQuery
```

Adds a facet query

### Parameters

The facet query

### Return Values

Returns the current SolrQuery object, if the return value is used.

### Examples

Example #1 SolrQuery::addFacetField() example

```
<?php

$options = array
(
        'hostname' => SOLR_SERVER_HOSTNAME,
        'login'    => SOLR_SERVER_USERNAME,
        'password' => SOLR_SERVER_PASSWORD,
        'port'     => SOLR_SERVER_PORT,
);

$client = new SolrClient($options);

$query = new SolrQuery('*:*');

$query->setFacet(true);

$query->addFacetQuery('price:[* TO 500]')->addFacetQuery('price:[500 TO *]');

$query_response = $client->query($query);

$response = $query_response->getResponse();

print_r($response->facet_counts->facet_queries);

?>
```

The above example will output something similar to:

```
SolrObject Object
(
    [price:[* TO 500]] => 14
    [price:[500 TO *]] => 2
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.addfacetquery.php
