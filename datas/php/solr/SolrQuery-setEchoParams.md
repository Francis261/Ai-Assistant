# SolrQuery::setEchoParams

Source: https://devdocs.io/php/solrquery.setechoparams

(PECL solr >= 0.9.2)

SolrQuery::setEchoParams — Determines what kind of parameters to include in the response

### Description

```
public SolrQuery::setEchoParams(string $type): SolrQuery
```

Instructs Solr what kinds of Request parameters should be included in the response for debugging purposes, legal values include:

```
- none - don't include any request parameters for debugging
- explicit - include the parameters explicitly specified by the client in the request
- all - include all parameters involved in this request, either specified explicitly by the client, or implicit because of the request handler configuration.
```

### Parameters

The type of parameters to include

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.setechoparams.php
