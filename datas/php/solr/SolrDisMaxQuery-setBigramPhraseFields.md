# SolrDisMaxQuery::setBigramPhraseFields

Source: https://devdocs.io/php/solrdismaxquery.setbigramphrasefields

(No version information available, might only be in Git)

SolrDisMaxQuery::setBigramPhraseFields — Sets Bigram Phrase Fields and their boosts (and slops) using pf2 parameter

### Description

```
public SolrDisMaxQuery::setBigramPhraseFields(string $fields): SolrDisMaxQuery
```

Sets Bigram Phrase Fields (pf2) and their boosts (and slops)

### Parameters

Fields boosts (slops)

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setBigramPhraseFields() example

```
<?php
$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery->setBigramPhraseFields("cat~5.1^2 feature^4.5");
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&pf2=cat~5.1^2 feature^4.5
```

### See Also

- SolrDisMaxQuery::setBigramPhraseSlop() - Sets Bigram Phrase Slop (ps2 parameter)
- SolrDisMaxQuery::addBigramPhraseFields()
- SolrDisMaxQuery::removeBigramPhraseField() - Removes phrase bigram field (pf2 parameter)
- SolrDisMaxQuery::setTrigramPhraseFields() - Directly Sets Trigram Phrase Fields (pf3 parameter)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setbigramphrasefields.php
