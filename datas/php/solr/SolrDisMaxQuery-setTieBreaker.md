# SolrDisMaxQuery::setTieBreaker

Source: https://devdocs.io/php/solrdismaxquery.settiebreaker

(No version information available, might only be in Git)

SolrDisMaxQuery::setTieBreaker — Sets Tie Breaker parameter (tie parameter)

### Description

```
public SolrDisMaxQuery::setTieBreaker(string $tieBreaker): SolrDisMaxQuery
```

Sets Tie Breaker parameter (tie parameter)

### Parameters

The tie parameter specifies a float value (which should be something much less than 1) to use as tiebreaker in DisMax queries.

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setTieBreaker() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery();
$dismaxQuery->setTieBreaker(0.1);

echo $dismaxQuery;

?>
```

The above example will output:

```
defType=edismax&tie=0.1
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.settiebreaker.php
