# SolrQuery::setHighlightFragmenter

Source: https://devdocs.io/php/solrquery.sethighlightfragmenter

(PECL solr >= 0.9.2)

SolrQuery::setHighlightFragmenter — Sets a text snippet generator for highlighted text

### Description

```
public SolrQuery::setHighlightFragmenter(string $fragmenter, string $field_override = ?): SolrQuery
```

Specify a text snippet generator for highlighted text.

### Parameters

The standard fragmenter is gap. Another option is regex, which tries to create fragments that resembles a certain regular expression

The name of the field.

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.sethighlightfragmenter.php
