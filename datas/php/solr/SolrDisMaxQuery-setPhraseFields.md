# SolrDisMaxQuery::setPhraseFields

Source: https://devdocs.io/php/solrdismaxquery.setphrasefields

(No version information available, might only be in Git)

SolrDisMaxQuery::setPhraseFields — Sets Phrase Fields and their boosts (and slops) using pf2 parameter

### Description

```
public SolrDisMaxQuery::setPhraseFields(string $fields): SolrDisMaxQuery
```

Sets Phrase Fields (pf) and their boosts (and slops)

### Parameters

Fields, boosts [, slops]

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setPhraseFields() example

```
<?php
$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery->setPhraseFields("cat~5.1^2 feature^4.5");
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&pf=cat~5.1^2 feature^4.5
```

### See Also

- SolrDisMaxQuery::addPhraseFields()
- SolrDisMaxQuery::removePhraseField() - Removes a Phrase Field (pf parameter)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setphrasefields.php
