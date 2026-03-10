# SolrQuery::addFacetField

Source: https://devdocs.io/php/solrquery.addfacetfield

(PECL solr >= 0.9.2)

SolrQuery::addFacetField — Adds another field to the facet

### Description

```
public SolrQuery::addFacetField(string $field): SolrQuery
```

Adds another field to the facet

### Parameters

The name of the field

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

$query = new SolrQuery();

$query->setQuery($query);

$query->addField('price')->addField('color');

$query->setFacet(true);

$query->addFacetField('price')->addFacetField('color');

$query_response = $client->query($query);

$response = $query_response->getResponse();

print_r($response['facet_counts']['facet_fields']);

?>
```

The above example will output something similar to:

```
SolrObject Object
(
    [color] => SolrObject Object
        (
            [blue] => 20
            [green] => 100
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.addfacetfield.php
