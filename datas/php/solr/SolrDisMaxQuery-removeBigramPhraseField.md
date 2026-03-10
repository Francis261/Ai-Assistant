# SolrDisMaxQuery::removeBigramPhraseField

Source: https://devdocs.io/php/solrdismaxquery.removebigramphrasefield

(No version information available, might only be in Git)

SolrDisMaxQuery::removeBigramPhraseField — Removes phrase bigram field (pf2 parameter)

### Description

```
public SolrDisMaxQuery::removeBigramPhraseField(string $field): SolrDisMaxQuery
```

Removes a Bigram Phrase Field (pf2 parameter) that was previously added using SolrDisMaxQuery::addBigramPhraseField()

### Parameters

The Field Name

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::removeBigramPhraseField() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addBigramPhraseField('cat', 2, 5.1)
    ->addBigramPhraseField('feature', 4.5)
;
echo $dismaxQuery.PHP_EOL;

// remove cat from pf2
$dismaxQuery
    ->removeBigramPhraseField('cat');
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&pf2=cat~5.1^2 feature^4.5
q=lucene&defType=edismax&pf2=feature^4.5
```

### See Also

- SolrDisMaxQuery::addBigramPhraseField() - Adds a Phrase Bigram Field (pf2 parameter)
- SolrDisMaxQuery::setBigramPhraseFields() - Sets Bigram Phrase Fields and their boosts (and slops) using pf2 parameter
- SolrDisMaxQuery::setBigramPhraseSlop() - Sets Bigram Phrase Slop (ps2 parameter)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.removebigramphrasefield.php
