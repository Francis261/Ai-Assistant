# SolrDisMaxQuery::removeUserField

Source: https://devdocs.io/php/solrdismaxquery.removeuserfield

(No version information available, might only be in Git)

SolrDisMaxQuery::removeUserField — Removes a field from The User Fields Parameter (uf)

### Description

```
public SolrDisMaxQuery::removeUserField(string $field): SolrDisMaxQuery
```

Removes a field from The User Fields Parameter (uf)

This function is currently not documented; only its argument list is available.

### Parameters

Field Name

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::removeUserField() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
->addUserField('cat')
->addUserField('text')
->addUserField('*_dt')
;
echo $dismaxQuery.PHP_EOL;

// remove field named 'text'
$dismaxQuery
->removeUserField('text');
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=%s&uf=cat text *_dt
q=lucene&defType=%s&uf=cat *_dt
```

### See Also

- SolrDisMaxQuery::addUserField() - Adds a field to User Fields Parameter (uf)
- SolrDisMaxQuery::setUserFields() - Sets User Fields parameter (uf)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.removeuserfield.php
