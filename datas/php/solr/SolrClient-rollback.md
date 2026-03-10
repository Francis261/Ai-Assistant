# SolrClient::rollback

Source: https://devdocs.io/php/solrclient.rollback

(PECL solr >= 0.9.2)

SolrClient::rollback — Rollbacks all add/deletes made to the index since the last commit

### Description

```
public SolrClient::rollback(): SolrUpdateResponse
```

Rollbacks all add/deletes made to the index since the last commit. It neither calls any event listeners nor creates a new searcher.

### Parameters

This function has no parameters.

### Return Values

Returns a SolrUpdateResponse on success or throws a SolrClientException on failure.

### See Also

- SolrClient::commit() - Finalizes all add/deletes made to the index
- SolrClient::optimize() - Defragments the index

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.rollback.php
