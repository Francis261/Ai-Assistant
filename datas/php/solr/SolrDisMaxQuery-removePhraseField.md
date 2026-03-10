# SolrDisMaxQuery::removePhraseField

Source: https://devdocs.io/php/solrdismaxquery.removephrasefield

(No version information available, might only be in Git)

SolrDisMaxQuery::removePhraseField — Removes a Phrase Field (pf parameter)

### Description

```
public SolrDisMaxQuery::removePhraseField(string $field): SolrDisMaxQuery
```

Removes a Phrase Field (pf parameter) that was previously added using SolrDisMaxQuery::addPhraseField

### Parameters

Field Name

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::removePhraseField() example

```
<?php
$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
    ->addPhraseField('first', 3, 1)
    ->addPhraseField('second', 4, 1)
    ->addPhraseField('cat', 55);
echo $dismaxQuery . PHP_EOL;
echo $dismaxQuery->removePhraseField('second');
?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&pf=first~1^3 second~1^4 cat^55
q=lucene&defType=edismax&pf=first~1^3 cat^55
```

### See Also

- SolrDisMaxQuery::addPhraseField() - Adds a Phrase Field (pf parameter)
- SolrDisMaxQuery::setPhraseFields() - Sets Phrase Fields and their boosts (and slops) using pf2 parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.removephrasefield.php
