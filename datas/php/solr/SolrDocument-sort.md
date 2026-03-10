# SolrDocument::sort

Source: https://devdocs.io/php/solrdocument.sort

(PECL solr >= 0.9.2)

SolrDocument::sort — Sorts the fields in the document

### Description

```
public SolrDocument::sort(int $sortOrderBy, int $sortDirection = SolrDocument::SORT_ASC): bool
```

```
The fields are rearranged according to the specified criteria and sort direction
   
   Fields can be sorted by boost values, field names and number of values.
   
   The sortOrderBy parameter must be one of :
   
   * SolrDocument::SORT_FIELD_NAME
   * SolrDocument::SORT_FIELD_BOOST_VALUE
   * SolrDocument::SORT_FIELD_VALUE_COUNT
   
   The sortDirection can be one of :
   
   * SolrDocument::SORT_DEFAULT
   * SolrDocument::SORT_ASC
   * SolrDocument::SORT_DESC
   
   The default way is to sort in ascending order.
```

### Parameters

The sort criteria.

The sort direction.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdocument.sort.php
