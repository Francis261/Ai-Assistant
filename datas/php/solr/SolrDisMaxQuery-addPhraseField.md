# SolrDisMaxQuery::addPhraseField

Source: https://devdocs.io/php/solrdismaxquery.addphrasefield

(No version information available, might only be in Git)

SolrDisMaxQuery::addPhraseField — Adds a Phrase Field (pf parameter)

### Description

```
public SolrDisMaxQuery::addPhraseField(string $field, string $boost, string $slop = ?): SolrDisMaxQuery
```

Adds a Phrase Field (pf parameter)

### Parameters

field name

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::addPhraseField() example

```
<?php
$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addPhraseField('cat', 3, 1)
    ->addPhraseField('third', 4, 2)
    ->addPhraseField('source', 55)
;
echo $dismaxQuery;
?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&pf=cat~1^3 third~2^4 source^55
```

### See Also

- SolrDisMaxQuery::removePhraseField() - Removes a Phrase Field (pf parameter)
- SolrDisMaxQuery::setPhraseFields() - Sets Phrase Fields and their boosts (and slops) using pf2 parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.addphrasefield.php
