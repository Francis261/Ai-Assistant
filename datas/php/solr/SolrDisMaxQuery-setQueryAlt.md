# SolrDisMaxQuery::setQueryAlt

Source: https://devdocs.io/php/solrdismaxquery.setqueryalt

(No version information available, might only be in Git)

SolrDisMaxQuery::setQueryAlt — Set Query Alternate (q.alt parameter)

### Description

```
public SolrDisMaxQuery::setQueryAlt(string $q): SolrDisMaxQuery
```

Set Query Alternate (q.alt parameter)

When the main q parameter is not specified or is blank. The q.alt parameter is used

### Parameters

Query String

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setQueryAlt() example

```
<?php

$dismaxQuery = new DisMaxQuery();
$dismaxQuery->setQueryAlt('*:*');

?>
```

The above example will output something similar to:

```
defType=edismax&q.alt=*:*&q=
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setqueryalt.php
