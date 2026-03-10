# SolrDisMaxQuery::addBigramPhraseField

Source: https://devdocs.io/php/solrdismaxquery.addbigramphrasefield

(No version information available, might only be in Git)

SolrDisMaxQuery::addBigramPhraseField — Adds a Phrase Bigram Field (pf2 parameter)

### Description

```
public SolrDisMaxQuery::addBigramPhraseField(string $field, string $boost, string $slop = ?): SolrDisMaxQuery
```

Adds a Phrase Bigram Field (pf2 parameter) output format: field~slop^boost OR field^boost Slop is optional

### Parameters

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::addBigramPhraseField() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addBigramPhraseField('cat', 2, 5.1)
    ->addBigramPhraseField('feature', 4.5)
;
echo $dismaxQuery;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&pf2=cat~5.1^2 feature^4.5
```

### See Also

- SolrDisMaxQuery::removeBigramPhraseField() - Removes phrase bigram field (pf2 parameter)
- SolrDisMaxQuery::setBigramPhraseFields() - Sets Bigram Phrase Fields and their boosts (and slops) using pf2 parameter
- SolrDisMaxQuery::setBigramPhraseSlop() - Sets Bigram Phrase Slop (ps2 parameter)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.addbigramphrasefield.php
