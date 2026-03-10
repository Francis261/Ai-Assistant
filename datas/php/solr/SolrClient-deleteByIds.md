# SolrClient::deleteByIds

Source: https://devdocs.io/php/solrclient.deletebyids

(PECL solr >= 0.9.2)

SolrClient::deleteByIds — Deletes by Ids

### Description

```
public SolrClient::deleteByIds(array $ids): SolrUpdateResponse
```

Deletes a collection of documents with the specified set of ids.

### Parameters

An array of IDs representing the uniqueKey field declared in the schema for each document to be deleted. This must be an actual php variable.

### Return Values

Returns a SolrUpdateResponse on success and throws an exception on failure.

### Errors/Exceptions

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to process the request.

### See Also

- SolrClient::deleteById() - Delete by Id
- SolrClient::deleteByQuery() - Deletes all documents matching the given query
- SolrClient::deleteByQueries() - Removes all documents matching any of the queries

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.deletebyids.php
