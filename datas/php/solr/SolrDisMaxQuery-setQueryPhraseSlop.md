# SolrDisMaxQuery::setQueryPhraseSlop

Source: https://devdocs.io/php/solrdismaxquery.setqueryphraseslop

(No version information available, might only be in Git)

SolrDisMaxQuery::setQueryPhraseSlop — Specifies the amount of slop permitted on phrase queries explicitly included in the user's query string (qf parameter)

### Description

```
public SolrDisMaxQuery::setQueryPhraseSlop(string $slop): SolrDisMaxQuery
```

The Query Phrase Slop is the amount of slop permitted on phrase queries explicitly included in the user's query string with the qf parameter.

slop refers to the number of positions one token needs to be moved in relation to another token in order to match a phrase specified in a query.

### Parameters

Amount of slop

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setQueryPhraseSlop() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery();
$dismaxQuery->setQueryPhraseSlop(3);
echo $dismaxQuery;
?>
```

The above example will output something similar to:

```
defType=edismax&qs=3
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setqueryphraseslop.php
