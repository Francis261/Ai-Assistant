# SolrClient::deleteByQueries

Source: https://devdocs.io/php/solrclient.deletebyqueries

(PECL solr >= 0.9.2)

SolrClient::deleteByQueries — Removes all documents matching any of the queries

### Description

```
public SolrClient::deleteByQueries(array $queries): SolrUpdateResponse
```

Removes all documents matching any of the queries

### Parameters

The array of queries. This must be an actual php variable.

### Return Values

Returns a SolrUpdateResponse on success and throws a SolrClientException on failure.

### Errors/Exceptions

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to process the request.

### See Also

- SolrClient::deleteById() - Delete by Id
- SolrClient::deleteByIds() - Deletes by Ids
- SolrClient::deleteByQuery() - Deletes all documents matching the given query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.deletebyqueries.php
