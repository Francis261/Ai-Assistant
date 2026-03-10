# SolrClient::system

Source: https://devdocs.io/php/solrclient.system

(PECL solr >= 2.0.0)

SolrClient::system — Retrieve Solr Server information

### Description

```
public SolrClient::system(): void
```

Retrieve Solr Server information

### Parameters

This function has no parameters.

### Return Values

Returns a SolrGenericResponse object on success.

### Errors/Exceptions

Emits SolrClientException if the client failed, or there was a connection issue.

Emits SolrServerException if the Solr Server failed to satisfy the query.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.system.php
