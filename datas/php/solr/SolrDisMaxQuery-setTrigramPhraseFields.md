# SolrDisMaxQuery::setTrigramPhraseFields

Source: https://devdocs.io/php/solrdismaxquery.settrigramphrasefields

(No version information available, might only be in Git)

SolrDisMaxQuery::setTrigramPhraseFields — Directly Sets Trigram Phrase Fields (pf3 parameter)

### Description

```
public SolrDisMaxQuery::setTrigramPhraseFields(string $fields): SolrDisMaxQuery
```

Directly Sets Trigram Phrase Fields (pf3 parameter)

### Parameters

Trigram Phrase Fields

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setTrigramPhraseFields() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery->setTrigramPhraseFields('cat~5.1^2 feature^4.5');
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output:

```
q=lucene&defType=edismax&pf3=cat~5.1^2 feature^4.5
```

### See Also

- SolrDisMaxQuery::addTrigramPhraseField() - Adds a Trigram Phrase Field (pf3 parameter)
- SolrDisMaxQuery::removeTrigramPhraseField() - Removes a Trigram Phrase Field (pf3 parameter)
- SolrDisMaxQuery::setTrigramPhraseSlop() - Sets Trigram Phrase Slop (ps3 parameter)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.settrigramphrasefields.php
