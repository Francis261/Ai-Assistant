# SolrDisMaxQuery::setBigramPhraseSlop

Source: https://devdocs.io/php/solrdismaxquery.setbigramphraseslop

(No version information available, might only be in Git)

SolrDisMaxQuery::setBigramPhraseSlop — Sets Bigram Phrase Slop (ps2 parameter)

### Description

```
public SolrDisMaxQuery::setBigramPhraseSlop(string $slop): SolrDisMaxQuery
```

Sets Bigram Phrase Slop (ps2 parameter). A default slop for Bigram phrase fields.

### Parameters

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setBigramPhraseSlop() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');

$dismaxQuery->setBigramPhraseSlop(5);
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&ps2=5
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setbigramphraseslop.php
