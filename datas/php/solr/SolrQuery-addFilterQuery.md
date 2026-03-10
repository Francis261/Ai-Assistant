# SolrQuery::addFilterQuery

Source: https://devdocs.io/php/solrquery.addfilterquery

(PECL solr >= 0.9.2)

SolrQuery::addFilterQuery — Specifies a filter query

### Description

```
public SolrQuery::addFilterQuery(string $fq): SolrQuery
```

Specifies a filter query

### Parameters

The filter query

### Return Values

Returns the current SolrQuery object.

### Examples

Example #1 SolrQuery::addFilterQuery() example

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

$query = new SolrQuery();

$query->setQuery('*:*');

$query->addFilterQuery('color:blue,green');

$query_response = $client->query($query);

$response = $query_response->getResponse();

print_r($response['facet_counts']['facet_fields']);

?>
```

The above example will output something similar to:

```
&fq=color:blue,green
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.addfilterquery.php
