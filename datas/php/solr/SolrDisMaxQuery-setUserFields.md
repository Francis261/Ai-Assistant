# SolrDisMaxQuery::setUserFields

Source: https://devdocs.io/php/solrdismaxquery.setuserfields

(No version information available, might only be in Git)

SolrDisMaxQuery::setUserFields — Sets User Fields parameter (uf)

### Description

```
public SolrDisMaxQuery::setUserFields(string $fields): SolrDisMaxQuery
```

Sets User Fields parameter (uf)

User Fields: Specifies which schema fields the end user shall be allowed to query.

### Parameters

Fields names separated by space

This parameter supports wildcards.

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setUserFields() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery->setUserFields('field1 field2 *_txt');
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&uf=field1 field2 *_txt
```

### See Also

- SolrDisMaxQuery::addUserField() - Adds a field to User Fields Parameter (uf)
- SolrDisMaxQuery::removeUserField() - Removes a field from The User Fields Parameter (uf)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setuserfields.php
