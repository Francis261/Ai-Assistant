# SolrQuery::addField

Source: https://devdocs.io/php/solrquery.addfield

(PECL solr >= 0.9.2)

SolrQuery::addField — Specifies which fields to return in the result

### Description

```
public SolrQuery::addField(string $field): SolrQuery
```

This method is used to used to specify a set of fields to return, thereby restricting the amount of data returned in the response.

It should be called multiple time, once for each field name.

### Parameters

The name of the field

### Return Values

Returns the current SolrQuery object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.addfield.php
