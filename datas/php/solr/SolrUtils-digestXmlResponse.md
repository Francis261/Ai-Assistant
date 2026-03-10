# SolrUtils::digestXmlResponse

Source: https://devdocs.io/php/solrutils.digestxmlresponse

(PECL solr >= 0.9.2)

SolrUtils::digestXmlResponse — Parses an response XML string into a SolrObject

### Description

```
public static SolrUtils::digestXmlResponse(string $xmlresponse, int $parse_mode = 0): SolrObject
```

This method parses an response XML string from the Apache Solr server into a SolrObject. It throws a SolrException if there was an error.

### Parameters

The XML response string from the Solr server.

Use SolrResponse::PARSE_SOLR_OBJ or SolrResponse::PARSE_SOLR_DOC

### Return Values

Returns the SolrObject representing the XML response.

If the parse_mode parameter is set to SolrResponse::PARSE_SOLR_OBJ Solr documents will be parses as SolrObject instances.

If it is set to SolrResponse::PARSE_SOLR_DOC, they will be parsed as SolrDocument instances.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrutils.digestxmlresponse.php
