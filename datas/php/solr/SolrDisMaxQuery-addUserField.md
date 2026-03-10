# SolrDisMaxQuery::addUserField

Source: https://devdocs.io/php/solrdismaxquery.adduserfield

(No version information available, might only be in Git)

SolrDisMaxQuery::addUserField — Adds a field to User Fields Parameter (uf)

### Description

```
public SolrDisMaxQuery::addUserField(string $field): SolrDisMaxQuery
```

Adds a field to The User Fields Parameter (uf)

### Parameters

Field Name

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::addUserField() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
->addUserField('cat')
->addUserField('text')
->addUserField('*_dt');

echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&uf=cat text *_dt
```

### See Also

- SolrDisMaxQuery::removeUserField() - Removes a field from The User Fields Parameter (uf)
- SolrDisMaxQuery::setUserFields() - Sets User Fields parameter (uf)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.adduserfield.php
