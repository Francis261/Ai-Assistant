# SolrClient::commit

Source: https://devdocs.io/php/solrclient.commit

(PECL solr >= 0.9.2)

SolrClient::commit — Finalizes all add/deletes made to the index

### Description

```
public SolrClient::commit(bool $softCommit = false, bool $waitSearcher = true, bool $expungeDeletes = false): SolrUpdateResponse
```

This method finalizes all add/deletes made to the index.

### Parameters

This will refresh the 'view' of the index in a more performant manner, but without "on-disk" guarantees. (Solr4.0+)

A soft commit is much faster since it only makes index changes visible and does not fsync index files or write a new index descriptor. If the JVM crashes or there is a loss of power, changes that occurred after the last hard commit will be lost. Search collections that have near-real-time requirements (that want index changes to be quickly visible to searches) will want to soft commit often but hard commit less frequently.

block until a new searcher is opened and registered as the main query searcher, making the changes visible.

Merge segments with deletes away. (Solr1.4+)

### Return Values

Returns a SolrUpdateResponse object on success or throws an exception on failure.

### Errors/Exceptions

Throws SolrClientException if the client had failed, or there was a connection issue.

Throws SolrServerException if the Solr Server had failed to process the request.

### Changelog

### Notes

PECL Solr >= 2.0 only supports Solr Server >= 4.0

### See Also

- SolrClient::optimize() - Defragments the index
- SolrClient::rollback() - Rollbacks all add/deletes made to the index since the last commit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.commit.php
