# SolrClient::optimize

Source: https://devdocs.io/php/solrclient.optimize

(PECL solr >= 0.9.2)

SolrClient::optimize — Defragments the index

### Description

```
public SolrClient::optimize(int $maxSegments = 1, bool $softCommit = true, bool $waitSearcher = true): SolrUpdateResponse
```

Defragments the index for faster search performance.

### Parameters

Optimizes down to at most this number of segments. Since Solr 1.3

This will refresh the 'view' of the index in a more performant manner, but without "on-disk" guarantees. (Solr4.0+)

Block until a new searcher is opened and registered as the main query searcher, making the changes visible.

### Return Values

Returns a SolrUpdateResponse on success or throws an exception on failure.

### Errors/Exceptions

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to process the request.

### Notes

PECL Solr >= 2.0 only supports Solr Server >= 4.0

Prior to PECL Solr 2.0 this method used to accept these arguments "int $maxSegments, bool $waitFlush, bool $waitSearcher".

### See Also

- SolrClient::commit() - Finalizes all add/deletes made to the index
- SolrClient::rollback() - Rollbacks all add/deletes made to the index since the last commit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.optimize.php
