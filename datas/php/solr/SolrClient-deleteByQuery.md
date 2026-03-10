# SolrClient::deleteByQuery

Source: https://devdocs.io/php/solrclient.deletebyquery

(PECL solr >= 0.9.2)

SolrClient::deleteByQuery — Deletes all documents matching the given query

### Description

```
public SolrClient::deleteByQuery(string $query): SolrUpdateResponse
```

Deletes all documents matching the given query.

### Parameters

The query

### Return Values

Returns a SolrUpdateResponse on success and throws an exception on failure.

### Errors/Exceptions

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to process the request.

### Examples

Example #1 SolrQuery::deleteByQuery() example

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

//This will erase the entire index
$client->deleteByQuery("*:*");
$client->commit();

?>
```

### See Also

- SolrClient::deleteById() - Delete by Id
- SolrClient::deleteByIds() - Deletes by Ids
- SolrClient::deleteByQueries() - Removes all documents matching any of the queries

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.deletebyquery.php
