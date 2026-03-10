# SolrQuery::setGroup

Source: https://devdocs.io/php/solrquery.setgroup

(PECL solr >= 2.2.0)

SolrQuery::setGroup — Enable/Disable result grouping (group parameter)

### Description

```
public SolrQuery::setGroup(bool $value): SolrQuery
```

Enable/Disable result grouping (group parameter)

### Parameters

### Return Values

### See Also

- SolrQuery::getGroup() - Returns true if grouping is enabled
- SolrQuery::addGroupField() - Add a field to be used to group results
- SolrQuery::addGroupFunction() - Allows grouping results based on the unique values of a function query (group.func parameter)
- SolrQuery::addGroupQuery() - Allows grouping of documents that match the given query
- SolrQuery::addGroupSortField() - Add a group sort field (group.sort parameter)
- SolrQuery::setGroupFacet() - Sets group.facet parameter
- SolrQuery::setGroupOffset() - Sets the group.offset parameter
- SolrQuery::setGroupLimit() - Specifies the number of results to return for each group. The server default value is 1
- SolrQuery::setGroupMain() - If true, the result of the first field grouping command is used as the main result list in the response, using group.format=simple
- SolrQuery::setGroupNGroups() - If true, Solr includes the number of groups that have matched the query in the results
- SolrQuery::setGroupTruncate() - If true, facet counts are based on the most relevant document of each group matching the query
- SolrQuery::setGroupFormat() - Sets the group format, result structure (group.format parameter)
- SolrQuery::setGroupCachePercent() - Enables caching for result grouping

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.setgroup.php
