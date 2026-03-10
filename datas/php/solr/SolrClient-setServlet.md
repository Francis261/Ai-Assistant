# SolrClient::setServlet

Source: https://devdocs.io/php/solrclient.setservlet

(PECL solr >= 0.9.2)

SolrClient::setServlet — Changes the specified servlet type to a new value

### Description

```
public SolrClient::setServlet(int $type, string $value): bool
```

Changes the specified servlet type to a new value

### Parameters

One of the following :

```
- SolrClient::SEARCH_SERVLET_TYPE
 - SolrClient::UPDATE_SERVLET_TYPE
 - SolrClient::THREADS_SERVLET_TYPE
 - SolrClient::PING_SERVLET_TYPE
 - SolrClient::TERMS_SERVLET_TYPE
```

The new value for the servlet

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrclient.setservlet.php
