# SolrDisMaxQuery::useDisMaxQueryParser

Source: https://devdocs.io/php/solrdismaxquery.usedismaxqueryparser

(No version information available, might only be in Git)

SolrDisMaxQuery::useDisMaxQueryParser — Switch QueryParser to be DisMax Query Parser

### Description

```
public SolrDisMaxQuery::useDisMaxQueryParser(): SolrDisMaxQuery
```

Switch QueryParser to be DisMax Query Parser

### Parameters

This function has no parameters.

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::useDisMaxQueryParser() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery();
$dismaxQuery->useDisMaxQueryParser();
echo $dismaxQuery;
?>
```

The above example will output something similar to:

```
defType=dismax
```

### See Also

- SolrDisMaxQuery::useDisMaxQueryParser()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.usedismaxqueryparser.php
