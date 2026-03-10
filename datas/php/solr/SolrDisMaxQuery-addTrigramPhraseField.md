# SolrDisMaxQuery::addTrigramPhraseField

Source: https://devdocs.io/php/solrdismaxquery.addtrigramphrasefield

(No version information available, might only be in Git)

SolrDisMaxQuery::addTrigramPhraseField — Adds a Trigram Phrase Field (pf3 parameter)

### Description

```
public SolrDisMaxQuery::addTrigramPhraseField(string $field, string $boost, string $slop = ?): SolrDisMaxQuery
```

Adds a Trigram Phrase Field (pf3 parameter)

### Parameters

Field Name

Field Boost

Field Slop

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::addTrigramPhraseField() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
->addTrigramPhraseField('cat', 2, 5.1)
->addTrigramPhraseField('feature', 4.5)
;
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output:

```
q=lucene&defType=%s&pf3=cat~5.1^2 feature^4.5
```

### See Also

- SolrDisMaxQuery::removeTrigramPhraseField() - Removes a Trigram Phrase Field (pf3 parameter)
- SolrDisMaxQuery::setTrigramPhraseFields() - Directly Sets Trigram Phrase Fields (pf3 parameter)
- SolrDisMaxQuery::setTrigramPhraseSlop() - Sets Trigram Phrase Slop (ps3 parameter)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.addtrigramphrasefield.php
