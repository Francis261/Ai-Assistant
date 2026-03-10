# SolrDisMaxQuery::setBoostFunction

Source: https://devdocs.io/php/solrdismaxquery.setboostfunction

(No version information available, might only be in Git)

SolrDisMaxQuery::setBoostFunction — Sets a Boost Function (bf parameter)

### Description

```
public SolrDisMaxQuery::setBoostFunction(string $function): SolrDisMaxQuery
```

Sets Boost Function (bf parameter).

Functions (with optional boosts) that will be included in the user's query to influence the score. Any function supported natively by Solr can be used, along with a boost value. e.g.:

recip(rord(myfield),1,2,3)^1.5

### Parameters

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setBoostFunction() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');

$boostRecentDocsFunction = "recip(ms(NOW,mydatefield),3.16e-11,1,1)";
$dismaxQuery->setBoostFunction($boostRecentDocsFunction);

echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&bf=recip(ms(NOW,mydatefield),3.16e-11,1,1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setboostfunction.php
