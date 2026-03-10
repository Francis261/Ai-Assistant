# SolrInputDocument::sort

Source: https://devdocs.io/php/solrinputdocument.sort

(PECL solr >= 0.9.2)

SolrInputDocument::sort — Sorts the fields within the document

### Description

```
public SolrInputDocument::sort(int $sortOrderBy, int $sortDirection = SolrInputDocument::SORT_ASC): bool
```

```
The fields are rearranged according to the specified criteria and sort direction
   
   Fields can be sorted by boost values, field names and number of values.
   
   The $order_by parameter must be one of :
   
   * SolrInputDocument::SORT_FIELD_NAME
   * SolrInputDocument::SORT_FIELD_BOOST_VALUE
   * SolrInputDocument::SORT_FIELD_VALUE_COUNT
   
   The sort direction can be one of :
   
   * SolrInputDocument::SORT_DEFAULT
   * SolrInputDocument::SORT_ASC
   * SolrInputDocument::SORT_DESC
```

### Parameters

The sort criteria

The sort direction

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrinputdocument.sort.php
