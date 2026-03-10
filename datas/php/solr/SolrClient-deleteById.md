# SolrClient::deleteById

Source: https://devdocs.io/php/solrclient.deletebyid

(PECL solr >= 0.9.2)

SolrClient::deleteById — Delete by Id

### Description

```
public SolrClient::deleteById(string $id): SolrUpdateResponse
```

Deletes the document with the specified ID. Where ID is the value of the uniqueKey field declared in the schema

### Parameters

The value of the uniqueKey field declared in the schema

### Return Values

Returns a SolrUpdateResponse on success and throws an exception on failure.

### Errors/Exceptions

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to process the request.

### See Also

- SolrClient::deleteByIds() - Deletes by Ids
- SolrClient::deleteByQuery() - Deletes all documents matching the given query
- SolrClient::deleteByQueries() - Removes all documents matching any of the queries

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.deletebyid.php
