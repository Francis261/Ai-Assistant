# SolrDisMaxQuery::useEDisMaxQueryParser

Source: https://devdocs.io/php/solrdismaxquery.useedismaxqueryparser

(No version information available, might only be in Git)

SolrDisMaxQuery::useEDisMaxQueryParser — Switch QueryParser to be EDisMax

### Description

```
public SolrDisMaxQuery::useEDisMaxQueryParser(): SolrDisMaxQuery
```

Switch QueryParser to be EDisMax. By default the query builder uses edismax, if it was switched using SolrDisMaxQuery::useDisMaxQueryParser(), it can be switched back using this method.

### Parameters

This function has no parameters.

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::useEDisMaxQueryParser() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery();
$dismaxQuery->useEDisMaxQueryParser();
echo $dismaxQuery;

?>
```

The above example will output something similar to:

```
defType=edismax
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.useedismaxqueryparser.php
