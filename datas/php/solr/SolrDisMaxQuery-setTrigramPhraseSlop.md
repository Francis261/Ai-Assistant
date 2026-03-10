# SolrDisMaxQuery::setTrigramPhraseSlop

Source: https://devdocs.io/php/solrdismaxquery.settrigramphraseslop

(No version information available, might only be in Git)

SolrDisMaxQuery::setTrigramPhraseSlop — Sets Trigram Phrase Slop (ps3 parameter)

### Description

```
public SolrDisMaxQuery::setTrigramPhraseSlop(string $slop): SolrDisMaxQuery
```

Sets Trigram Phrase Slop (ps3 parameter)

### Parameters

Phrase slop

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setTrigramPhraseSlop() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery->setTrigramPhraseSlop(2);
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&ps3=2
```

### See Also

- SolrDisMaxQuery::addTrigramPhraseField() - Adds a Trigram Phrase Field (pf3 parameter)
- SolrDisMaxQuery::removeTrigramPhraseField() - Removes a Trigram Phrase Field (pf3 parameter)
- SolrDisMaxQuery::setTrigramPhraseFields() - Directly Sets Trigram Phrase Fields (pf3 parameter)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.settrigramphraseslop.php
