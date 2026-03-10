# The SolrQuery class

Source: https://devdocs.io/php/class.solrquery

## Introduction

(PECL solr >= 0.9.2)

Represents a collection of name-value pairs sent to the Solr server during a request.

## Class synopsis

```
public addExpandFilterQuery(string $fq): SolrQuery
```

```
public addExpandSortField(string $field, string $order = ?): SolrQuery
```

```
public addFacetDateField(string $dateField): SolrQuery
```

```
public addFacetDateOther(string $value, string $field_override = ?): SolrQuery
```

```
public addFacetField(string $field): SolrQuery
```

```
public addFacetQuery(string $facetQuery): SolrQuery
```

```
public addField(string $field): SolrQuery
```

```
public addFilterQuery(string $fq): SolrQuery
```

```
public addGroupField(string $value): SolrQuery
```

```
public addGroupFunction(string $value): SolrQuery
```

```
public addGroupQuery(string $value): SolrQuery
```

```
public addGroupSortField(string $field, int $order = ?): SolrQuery
```

```
public addHighlightField(string $field): SolrQuery
```

```
public addMltField(string $field): SolrQuery
```

```
public addMltQueryField(string $field, float $boost): SolrQuery
```

```
public addSortField(string $field, int $order = SolrQuery::ORDER_DESC): SolrQuery
```

```
public addStatsFacet(string $field): SolrQuery
```

```
public addStatsField(string $field): SolrQuery
```

```
public collapse(SolrCollapseFunction $collapseFunction): SolrQuery
```

```
public getExpand(): bool
```

```
public getExpandFilterQueries(): array
```

```
public getExpandQuery(): array
```

```
public getExpandRows(): int
```

```
public getExpandSortFields(): array
```

```
public getFacet(): bool
```

```
public getFacetDateEnd(string $field_override = ?): string
```

```
public getFacetDateFields(): array
```

```
public getFacetDateGap(string $field_override = ?): string
```

```
public getFacetDateHardEnd(string $field_override = ?): string
```

```
public getFacetDateOther(string $field_override = ?): array
```

```
public getFacetDateStart(string $field_override = ?): string
```

```
public getFacetFields(): array
```

```
public getFacetLimit(string $field_override = ?): int
```

```
public getFacetMethod(string $field_override = ?): string
```

```
public getFacetMinCount(string $field_override = ?): int
```

```
public getFacetMissing(string $field_override = ?): bool
```

```
public getFacetOffset(string $field_override = ?): int
```

```
public getFacetPrefix(string $field_override = ?): string
```

```
public getFacetQueries(): array
```

```
public getFacetSort(string $field_override = ?): int
```

```
public getFields(): array
```

```
public getFilterQueries(): array
```

```
public getGroup(): bool
```

```
public getGroupCachePercent(): int
```

```
public getGroupFacet(): bool
```

```
public getGroupFields(): array
```

```
public getGroupFormat(): string
```

```
public getGroupFunctions(): array
```

```
public getGroupLimit(): int
```

```
public getGroupMain(): bool
```

```
public getGroupNGroups(): bool
```

```
public getGroupOffset(): int
```

```
public getGroupQueries(): array
```

```
public getGroupSortFields(): array
```

```
public getGroupTruncate(): bool
```

```
public getHighlight(): bool
```

```
public getHighlightAlternateField(string $field_override = ?): string
```

```
public getHighlightFields(): array
```

```
public getHighlightFormatter(string $field_override = ?): string
```

```
public getHighlightFragmenter(string $field_override = ?): string
```

```
public getHighlightFragsize(string $field_override = ?): int
```

```
public getHighlightHighlightMultiTerm(): bool
```

```
public getHighlightMaxAlternateFieldLength(string $field_override = ?): int
```

```
public getHighlightMaxAnalyzedChars(): int
```

```
public getHighlightMergeContiguous(string $field_override = ?): bool
```

```
public getHighlightQuery(): string
```

```
public getHighlightRegexMaxAnalyzedChars(): int
```

```
public getHighlightRegexPattern(): string
```

```
public getHighlightRegexSlop(): float
```

```
public getHighlightRequireFieldMatch(): bool
```

```
public getHighlightSimplePost(string $field_override = ?): string
```

```
public getHighlightSimplePre(string $field_override = ?): string
```

```
public getHighlightSnippets(string $field_override = ?): int
```

```
public getHighlightUsePhraseHighlighter(): bool
```

```
public getMlt(): bool
```

```
public getMltBoost(): bool
```

```
public getMltCount(): int
```

```
public getMltFields(): array
```

```
public getMltMaxNumQueryTerms(): int
```

```
public getMltMaxNumTokens(): int
```

```
public getMltMaxWordLength(): int
```

```
public getMltMinDocFrequency(): int
```

```
public getMltMinTermFrequency(): int
```

```
public getMltMinWordLength(): int
```

```
public getMltQueryFields(): array
```

```
public getQuery(): string
```

```
public getRows(): int
```

```
public getSortFields(): array
```

```
public getStart(): int
```

```
public getStats(): bool
```

```
public getStatsFacets(): array
```

```
public getStatsFields(): array
```

```
public getTerms(): bool
```

```
public getTermsField(): string
```

```
public getTermsIncludeLowerBound(): bool
```

```
public getTermsIncludeUpperBound(): bool
```

```
public getTermsLimit(): int
```

```
public getTermsLowerBound(): string
```

```
public getTermsMaxCount(): int
```

```
public getTermsMinCount(): int
```

```
public getTermsPrefix(): string
```

```
public getTermsReturnRaw(): bool
```

```
public getTermsSort(): int
```

```
public getTermsUpperBound(): string
```

```
public getTimeAllowed(): int
```

```
public removeExpandFilterQuery(string $fq): SolrQuery
```

```
public removeExpandSortField(string $field): SolrQuery
```

```
public removeFacetDateField(string $field): SolrQuery
```

```
public removeFacetDateOther(string $value, string $field_override = ?): SolrQuery
```

```
public removeFacetField(string $field): SolrQuery
```

```
public removeFacetQuery(string $value): SolrQuery
```

```
public removeField(string $field): SolrQuery
```

```
public removeFilterQuery(string $fq): SolrQuery
```

```
public removeHighlightField(string $field): SolrQuery
```

```
public removeMltField(string $field): SolrQuery
```

```
public removeMltQueryField(string $queryField): SolrQuery
```

```
public removeSortField(string $field): SolrQuery
```

```
public removeStatsFacet(string $value): SolrQuery
```

```
public removeStatsField(string $field): SolrQuery
```

```
public setEchoHandler(bool $flag): SolrQuery
```

```
public setEchoParams(string $type): SolrQuery
```

```
public setExpand(bool $value): SolrQuery
```

```
public setExpandQuery(string $q): SolrQuery
```

```
public setExpandRows(int $value): SolrQuery
```

```
public setExplainOther(string $query): SolrQuery
```

```
public setFacet(bool $flag): SolrQuery
```

```
public setFacetDateEnd(string $value, string $field_override = ?): SolrQuery
```

```
public setFacetDateGap(string $value, string $field_override = ?): SolrQuery
```

```
public setFacetDateHardEnd(bool $value, string $field_override = ?): SolrQuery
```

```
public setFacetDateStart(string $value, string $field_override = ?): SolrQuery
```

```
public setFacetEnumCacheMinDefaultFrequency(int $frequency, string $field_override = ?): SolrQuery
```

```
public setFacetLimit(int $limit, string $field_override = ?): SolrQuery
```

```
public setFacetMethod(string $method, string $field_override = ?): SolrQuery
```

```
public setFacetMinCount(int $mincount, string $field_override = ?): SolrQuery
```

```
public setFacetMissing(bool $flag, string $field_override = ?): SolrQuery
```

```
public setFacetOffset(int $offset, string $field_override = ?): SolrQuery
```

```
public setFacetPrefix(string $prefix, string $field_override = ?): SolrQuery
```

```
public setFacetSort(int $facetSort, string $field_override = ?): SolrQuery
```

```
public setGroup(bool $value): SolrQuery
```

```
public setGroupCachePercent(int $percent): SolrQuery
```

```
public setGroupFacet(bool $value): SolrQuery
```

```
public setGroupFormat(string $value): SolrQuery
```

```
public setGroupLimit(int $value): SolrQuery
```

```
public setGroupMain(string $value): SolrQuery
```

```
public setGroupNGroups(bool $value): SolrQuery
```

```
public setGroupOffset(int $value): SolrQuery
```

```
public setGroupTruncate(bool $value): SolrQuery
```

```
public setHighlight(bool $flag): SolrQuery
```

```
public setHighlightAlternateField(string $field, string $field_override = ?): SolrQuery
```

```
public setHighlightFormatter(string $formatter, string $field_override = ?): SolrQuery
```

```
public setHighlightFragmenter(string $fragmenter, string $field_override = ?): SolrQuery
```

```
public setHighlightFragsize(int $size, string $field_override = ?): SolrQuery
```

```
public setHighlightHighlightMultiTerm(bool $flag): SolrQuery
```

```
public setHighlightMaxAlternateFieldLength(int $fieldLength, string $field_override = ?): SolrQuery
```

```
public setHighlightMaxAnalyzedChars(int $value): SolrQuery
```

```
public setHighlightMergeContiguous(bool $flag, string $field_override = ?): SolrQuery
```

```
public setHighlightQuery(string $q): SolrQuery
```

```
public setHighlightRegexMaxAnalyzedChars(int $maxAnalyzedChars): SolrQuery
```

```
public setHighlightRegexPattern(string $value): SolrQuery
```

```
public setHighlightRegexSlop(float $factor): SolrQuery
```

```
public setHighlightRequireFieldMatch(bool $flag): SolrQuery
```

```
public setHighlightSimplePost(string $simplePost, string $field_override = ?): SolrQuery
```

```
public setHighlightSimplePre(string $simplePre, string $field_override = ?): SolrQuery
```

```
public setHighlightSnippets(int $value, string $field_override = ?): SolrQuery
```

```
public setHighlightUsePhraseHighlighter(bool $flag): SolrQuery
```

```
public setMlt(bool $flag): SolrQuery
```

```
public setMltBoost(bool $flag): SolrQuery
```

```
public setMltCount(int $count): SolrQuery
```

```
public setMltMaxNumQueryTerms(int $value): SolrQuery
```

```
public setMltMaxNumTokens(int $value): SolrQuery
```

```
public setMltMaxWordLength(int $maxWordLength): SolrQuery
```

```
public setMltMinDocFrequency(int $minDocFrequency): SolrQuery
```

```
public setMltMinTermFrequency(int $minTermFrequency): SolrQuery
```

```
public setMltMinWordLength(int $minWordLength): SolrQuery
```

```
public setOmitHeader(bool $flag): SolrQuery
```

```
public setQuery(string $query): SolrQuery
```

```
public setRows(int $rows): SolrQuery
```

```
public setShowDebugInfo(bool $flag): SolrQuery
```

```
public setStart(int $start): SolrQuery
```

```
public setStats(bool $flag): SolrQuery
```

```
public setTerms(bool $flag): SolrQuery
```

```
public setTermsField(string $fieldname): SolrQuery
```

```
public setTermsIncludeLowerBound(bool $flag): SolrQuery
```

```
public setTermsIncludeUpperBound(bool $flag): SolrQuery
```

```
public setTermsLimit(int $limit): SolrQuery
```

```
public setTermsLowerBound(string $lowerBound): SolrQuery
```

```
public setTermsMaxCount(int $frequency): SolrQuery
```

```
public setTermsMinCount(int $frequency): SolrQuery
```

```
public setTermsPrefix(string $prefix): SolrQuery
```

```
public setTermsReturnRaw(bool $flag): SolrQuery
```

```
public setTermsSort(int $sortType): SolrQuery
```

```
public setTermsUpperBound(string $upperBound): SolrQuery
```

```
public setTimeAllowed(int $timeAllowed): SolrQuery
```

## Predefined Constants

Used to specify that the sorting should be in acending order

Used to specify that the sorting should be in descending order

Used to specify that the facet should sort by index

Used to specify that the facet should sort by count

Used in the TermsComponent

Used in the TermsComponent

## Table of Contents

- SolrQuery::addExpandFilterQuery — Overrides main filter query, determines which documents to include in the main group
- SolrQuery::addExpandSortField — Orders the documents within the expanded groups (expand.sort parameter)
- SolrQuery::addFacetDateField — Maps to facet.date
- SolrQuery::addFacetDateOther — Adds another facet.date.other parameter
- SolrQuery::addFacetField — Adds another field to the facet
- SolrQuery::addFacetQuery — Adds a facet query
- SolrQuery::addField — Specifies which fields to return in the result
- SolrQuery::addFilterQuery — Specifies a filter query
- SolrQuery::addGroupField — Add a field to be used to group results
- SolrQuery::addGroupFunction — Allows grouping results based on the unique values of a function query (group.func parameter)
- SolrQuery::addGroupQuery — Allows grouping of documents that match the given query
- SolrQuery::addGroupSortField — Add a group sort field (group.sort parameter)
- SolrQuery::addHighlightField — Maps to hl.fl
- SolrQuery::addMltField — Sets a field to use for similarity
- SolrQuery::addMltQueryField — Maps to mlt.qf
- SolrQuery::addSortField — Used to control how the results should be sorted
- SolrQuery::addStatsFacet — Requests a return of sub results for values within the given facet
- SolrQuery::addStatsField — Maps to stats.field parameter
- SolrQuery::collapse — Collapses the result set to a single document per group
- SolrQuery::__construct — Constructor
- SolrQuery::__destruct — Destructor
- SolrQuery::getExpand — Returns true if group expanding is enabled
- SolrQuery::getExpandFilterQueries — Returns the expand filter queries
- SolrQuery::getExpandQuery — Returns the expand query expand.q parameter
- SolrQuery::getExpandRows — Returns The number of rows to display in each group (expand.rows)
- SolrQuery::getExpandSortFields — Returns an array of fields
- SolrQuery::getFacet — Returns the value of the facet parameter
- SolrQuery::getFacetDateEnd — Returns the value for the facet.date.end parameter
- SolrQuery::getFacetDateFields — Returns all the facet.date fields
- SolrQuery::getFacetDateGap — Returns the value of the facet.date.gap parameter
- SolrQuery::getFacetDateHardEnd — Returns the value of the facet.date.hardend parameter
- SolrQuery::getFacetDateOther — Returns the value for the facet.date.other parameter
- SolrQuery::getFacetDateStart — Returns the lower bound for the first date range for all date faceting on this field
- SolrQuery::getFacetFields — Returns all the facet fields
- SolrQuery::getFacetLimit — Returns the maximum number of constraint counts that should be returned for the facet fields
- SolrQuery::getFacetMethod — Returns the value of the facet.method parameter
- SolrQuery::getFacetMinCount — Returns the minimum counts for facet fields should be included in the response
- SolrQuery::getFacetMissing — Returns the current state of the facet.missing parameter
- SolrQuery::getFacetOffset — Returns an offset into the list of constraints to be used for pagination
- SolrQuery::getFacetPrefix — Returns the facet prefix
- SolrQuery::getFacetQueries — Returns all the facet queries
- SolrQuery::getFacetSort — Returns the facet sort type
- SolrQuery::getFields — Returns the list of fields that will be returned in the response
- SolrQuery::getFilterQueries — Returns an array of filter queries
- SolrQuery::getGroup — Returns true if grouping is enabled
- SolrQuery::getGroupCachePercent — Returns group cache percent value
- SolrQuery::getGroupFacet — Returns the group.facet parameter value
- SolrQuery::getGroupFields — Returns group fields (group.field parameter values)
- SolrQuery::getGroupFormat — Returns the group.format value
- SolrQuery::getGroupFunctions — Returns group functions (group.func parameter values)
- SolrQuery::getGroupLimit — Returns the group.limit value
- SolrQuery::getGroupMain — Returns the group.main value
- SolrQuery::getGroupNGroups — Returns the group.ngroups value
- SolrQuery::getGroupOffset — Returns the group.offset value
- SolrQuery::getGroupQueries — Returns all the group.query parameter values
- SolrQuery::getGroupSortFields — Returns the group.sort value
- SolrQuery::getGroupTruncate — Returns the group.truncate value
- SolrQuery::getHighlight — Returns the state of the hl parameter
- SolrQuery::getHighlightAlternateField — Returns the highlight field to use as backup or default
- SolrQuery::getHighlightFields — Returns all the fields that Solr should generate highlighted snippets for
- SolrQuery::getHighlightFormatter — Returns the formatter for the highlighted output
- SolrQuery::getHighlightFragmenter — Returns the text snippet generator for highlighted text
- SolrQuery::getHighlightFragsize — Returns the number of characters of fragments to consider for highlighting
- SolrQuery::getHighlightHighlightMultiTerm — Returns whether or not to enable highlighting for range/wildcard/fuzzy/prefix queries
- SolrQuery::getHighlightMaxAlternateFieldLength — Returns the maximum number of characters of the field to return
- SolrQuery::getHighlightMaxAnalyzedChars — Returns the maximum number of characters into a document to look for suitable snippets
- SolrQuery::getHighlightMergeContiguous — Returns whether or not the collapse contiguous fragments into a single fragment
- SolrQuery::getHighlightQuery — return the highlightquery (hl.q)
- SolrQuery::getHighlightRegexMaxAnalyzedChars — Returns the maximum number of characters from a field when using the regex fragmenter
- SolrQuery::getHighlightRegexPattern — Returns the regular expression for fragmenting
- SolrQuery::getHighlightRegexSlop — Returns the deviation factor from the ideal fragment size
- SolrQuery::getHighlightRequireFieldMatch — Returns if a field will only be highlighted if the query matched in this particular field
- SolrQuery::getHighlightSimplePost — Returns the text which appears after a highlighted term
- SolrQuery::getHighlightSimplePre — Returns the text which appears before a highlighted term
- SolrQuery::getHighlightSnippets — Returns the maximum number of highlighted snippets to generate per field
- SolrQuery::getHighlightUsePhraseHighlighter — Returns the state of the hl.usePhraseHighlighter parameter
- SolrQuery::getMlt — Returns whether or not MoreLikeThis results should be enabled
- SolrQuery::getMltBoost — Returns whether or not the query will be boosted by the interesting term relevance
- SolrQuery::getMltCount — Returns the number of similar documents to return for each result
- SolrQuery::getMltFields — Returns all the fields to use for similarity
- SolrQuery::getMltMaxNumQueryTerms — Returns the maximum number of query terms that will be included in any generated query
- SolrQuery::getMltMaxNumTokens — Returns the maximum number of tokens to parse in each document field that is not stored with TermVector support
- SolrQuery::getMltMaxWordLength — Returns the maximum word length above which words will be ignored
- SolrQuery::getMltMinDocFrequency — Returns the treshold frequency at which words will be ignored which do not occur in at least this many docs
- SolrQuery::getMltMinTermFrequency — Returns the frequency below which terms will be ignored in the source document
- SolrQuery::getMltMinWordLength — Returns the minimum word length below which words will be ignored
- SolrQuery::getMltQueryFields — Returns the query fields and their boosts
- SolrQuery::getQuery — Returns the main query
- SolrQuery::getRows — Returns the maximum number of documents
- SolrQuery::getSortFields — Returns all the sort fields
- SolrQuery::getStart — Returns the offset in the complete result set
- SolrQuery::getStats — Returns whether or not stats is enabled
- SolrQuery::getStatsFacets — Returns all the stats facets that were set
- SolrQuery::getStatsFields — Returns all the statistics fields
- SolrQuery::getTerms — Returns whether or not the TermsComponent is enabled
- SolrQuery::getTermsField — Returns the field from which the terms are retrieved
- SolrQuery::getTermsIncludeLowerBound — Returns whether or not to include the lower bound in the result set
- SolrQuery::getTermsIncludeUpperBound — Returns whether or not to include the upper bound term in the result set
- SolrQuery::getTermsLimit — Returns the maximum number of terms Solr should return
- SolrQuery::getTermsLowerBound — Returns the term to start at
- SolrQuery::getTermsMaxCount — Returns the maximum document frequency
- SolrQuery::getTermsMinCount — Returns the minimum document frequency to return in order to be included
- SolrQuery::getTermsPrefix — Returns the term prefix
- SolrQuery::getTermsReturnRaw — Whether or not to return raw characters
- SolrQuery::getTermsSort — Returns an integer indicating how terms are sorted
- SolrQuery::getTermsUpperBound — Returns the term to stop at
- SolrQuery::getTimeAllowed — Returns the time in milliseconds allowed for the query to finish
- SolrQuery::removeExpandFilterQuery — Removes an expand filter query
- SolrQuery::removeExpandSortField — Removes an expand sort field from the expand.sort parameter
- SolrQuery::removeFacetDateField — Removes one of the facet date fields
- SolrQuery::removeFacetDateOther — Removes one of the facet.date.other parameters
- SolrQuery::removeFacetField — Removes one of the facet.date parameters
- SolrQuery::removeFacetQuery — Removes one of the facet.query parameters
- SolrQuery::removeField — Removes a field from the list of fields
- SolrQuery::removeFilterQuery — Removes a filter query
- SolrQuery::removeHighlightField — Removes one of the fields used for highlighting
- SolrQuery::removeMltField — Removes one of the moreLikeThis fields
- SolrQuery::removeMltQueryField — Removes one of the moreLikeThis query fields
- SolrQuery::removeSortField — Removes one of the sort fields
- SolrQuery::removeStatsFacet — Removes one of the stats.facet parameters
- SolrQuery::removeStatsField — Removes one of the stats.field parameters
- SolrQuery::setEchoHandler — Toggles the echoHandler parameter
- SolrQuery::setEchoParams — Determines what kind of parameters to include in the response
- SolrQuery::setExpand — Enables/Disables the Expand Component
- SolrQuery::setExpandQuery — Sets the expand.q parameter
- SolrQuery::setExpandRows — Sets the number of rows to display in each group (expand.rows). Server Default 5
- SolrQuery::setExplainOther — Sets the explainOther common query parameter
- SolrQuery::setFacet — Maps to the facet parameter. Enables or disables facetting
- SolrQuery::setFacetDateEnd — Maps to facet.date.end
- SolrQuery::setFacetDateGap — Maps to facet.date.gap
- SolrQuery::setFacetDateHardEnd — Maps to facet.date.hardend
- SolrQuery::setFacetDateStart — Maps to facet.date.start
- SolrQuery::setFacetEnumCacheMinDefaultFrequency — Sets the minimum document frequency used for determining term count
- SolrQuery::setFacetLimit — Maps to facet.limit
- SolrQuery::setFacetMethod — Specifies the type of algorithm to use when faceting a field
- SolrQuery::setFacetMinCount — Maps to facet.mincount
- SolrQuery::setFacetMissing — Maps to facet.missing
- SolrQuery::setFacetOffset — Sets the offset into the list of constraints to allow for pagination
- SolrQuery::setFacetPrefix — Specifies a string prefix with which to limits the terms on which to facet
- SolrQuery::setFacetSort — Determines the ordering of the facet field constraints
- SolrQuery::setGroup — Enable/Disable result grouping (group parameter)
- SolrQuery::setGroupCachePercent — Enables caching for result grouping
- SolrQuery::setGroupFacet — Sets group.facet parameter
- SolrQuery::setGroupFormat — Sets the group format, result structure (group.format parameter)
- SolrQuery::setGroupLimit — Specifies the number of results to return for each group. The server default value is 1
- SolrQuery::setGroupMain — If true, the result of the first field grouping command is used as the main result list in the response, using group.format=simple
- SolrQuery::setGroupNGroups — If true, Solr includes the number of groups that have matched the query in the results
- SolrQuery::setGroupOffset — Sets the group.offset parameter
- SolrQuery::setGroupTruncate — If true, facet counts are based on the most relevant document of each group matching the query
- SolrQuery::setHighlight — Enables or disables highlighting
- SolrQuery::setHighlightAlternateField — Specifies the backup field to use
- SolrQuery::setHighlightFormatter — Specify a formatter for the highlight output
- SolrQuery::setHighlightFragmenter — Sets a text snippet generator for highlighted text
- SolrQuery::setHighlightFragsize — The size of fragments to consider for highlighting
- SolrQuery::setHighlightHighlightMultiTerm — Use SpanScorer to highlight phrase terms
- SolrQuery::setHighlightMaxAlternateFieldLength — Sets the maximum number of characters of the field to return
- SolrQuery::setHighlightMaxAnalyzedChars — Specifies the number of characters into a document to look for suitable snippets
- SolrQuery::setHighlightMergeContiguous — Whether or not to collapse contiguous fragments into a single fragment
- SolrQuery::setHighlightQuery — A query designated for highlighting (hl.q)
- SolrQuery::setHighlightRegexMaxAnalyzedChars — Specify the maximum number of characters to analyze
- SolrQuery::setHighlightRegexPattern — Specify the regular expression for fragmenting
- SolrQuery::setHighlightRegexSlop — Sets the factor by which the regex fragmenter can stray from the ideal fragment size
- SolrQuery::setHighlightRequireFieldMatch — Require field matching during highlighting
- SolrQuery::setHighlightSimplePost — Sets the text which appears after a highlighted term
- SolrQuery::setHighlightSimplePre — Sets the text which appears before a highlighted term
- SolrQuery::setHighlightSnippets — Sets the maximum number of highlighted snippets to generate per field
- SolrQuery::setHighlightUsePhraseHighlighter — Whether to highlight phrase terms only when they appear within the query phrase
- SolrQuery::setMlt — Enables or disables moreLikeThis
- SolrQuery::setMltBoost — Set if the query will be boosted by the interesting term relevance
- SolrQuery::setMltCount — Set the number of similar documents to return for each result
- SolrQuery::setMltMaxNumQueryTerms — Sets the maximum number of query terms included
- SolrQuery::setMltMaxNumTokens — Specifies the maximum number of tokens to parse
- SolrQuery::setMltMaxWordLength — Sets the maximum word length
- SolrQuery::setMltMinDocFrequency — Sets the mltMinDoc frequency
- SolrQuery::setMltMinTermFrequency — Sets the frequency below which terms will be ignored in the source docs
- SolrQuery::setMltMinWordLength — Sets the minimum word length
- SolrQuery::setOmitHeader — Exclude the header from the returned results
- SolrQuery::setQuery — Sets the search query
- SolrQuery::setRows — Specifies the maximum number of rows to return in the result
- SolrQuery::setShowDebugInfo — Flag to show debug information
- SolrQuery::setStart — Specifies the number of rows to skip
- SolrQuery::setStats — Enables or disables the Stats component
- SolrQuery::setTerms — Enables or disables the TermsComponent
- SolrQuery::setTermsField — Sets the name of the field to get the Terms from
- SolrQuery::setTermsIncludeLowerBound — Include the lower bound term in the result set
- SolrQuery::setTermsIncludeUpperBound — Include the upper bound term in the result set
- SolrQuery::setTermsLimit — Sets the maximum number of terms to return
- SolrQuery::setTermsLowerBound — Specifies the Term to start from
- SolrQuery::setTermsMaxCount — Sets the maximum document frequency
- SolrQuery::setTermsMinCount — Sets the minimum document frequency
- SolrQuery::setTermsPrefix — Restrict matches to terms that start with the prefix
- SolrQuery::setTermsReturnRaw — Return the raw characters of the indexed term
- SolrQuery::setTermsSort — Specifies how to sort the returned terms
- SolrQuery::setTermsUpperBound — Sets the term to stop at
- SolrQuery::setTimeAllowed — The time allowed for search to finish

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrquery.php
