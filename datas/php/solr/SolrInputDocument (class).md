# The SolrInputDocument class

Source: https://devdocs.io/php/class.solrinputdocument

## Introduction

(PECL solr >= 0.9.2)

This class represents a Solr document that is about to be submitted to the Solr index.

## Class synopsis

```
public addChildDocument(SolrInputDocument $child): void
```

```
public addChildDocuments(array &$docs): void
```

```
public addField(string $fieldName, string $fieldValue, float $fieldBoostValue = 0.0): bool
```

```
public clear(): bool
```

```
public __clone(): void
```

```
public deleteField(string $fieldName): bool
```

```
public fieldExists(string $fieldName): bool
```

```
public getBoost(): float
```

```
public getChildDocuments(): array
```

```
public getChildDocumentsCount(): int
```

```
public getField(string $fieldName): SolrDocumentField
```

```
public getFieldBoost(string $fieldName): float
```

```
public getFieldCount(): int|false
```

```
public getFieldNames(): array
```

```
public hasChildDocuments(): bool
```

```
public merge(SolrInputDocument $sourceDoc, bool $overwrite = true): bool
```

```
public reset(): bool
```

```
public setBoost(float $documentBoostValue): bool
```

```
public setFieldBoost(string $fieldName, float $fieldBoostValue): bool
```

```
public sort(int $sortOrderBy, int $sortDirection = SolrInputDocument::SORT_ASC): bool
```

```
public toArray(): array
```

## Predefined Constants

## SolrInputDocument Class Constants

Sorts the fields in ascending order.

Sorts the fields in ascending order.

Sorts the fields in descending order.

Sorts the fields by name

Sorts the fields by number of values.

Sorts the fields by boost value.

## Table of Contents

- SolrInputDocument::addChildDocument — Adds a child document for block indexing
- SolrInputDocument::addChildDocuments — Adds an array of child documents
- SolrInputDocument::addField — Adds a field to the document
- SolrInputDocument::clear — Resets the input document
- SolrInputDocument::__clone — Creates a copy of a SolrDocument
- SolrInputDocument::__construct — Constructor
- SolrInputDocument::deleteField — Removes a field from the document
- SolrInputDocument::__destruct — Destructor
- SolrInputDocument::fieldExists — Checks if a field exists
- SolrInputDocument::getBoost — Retrieves the current boost value for the document
- SolrInputDocument::getChildDocuments — Returns an array of child documents (SolrInputDocument)
- SolrInputDocument::getChildDocumentsCount — Returns the number of child documents
- SolrInputDocument::getField — Retrieves a field by name
- SolrInputDocument::getFieldBoost — Retrieves the boost value for a particular field
- SolrInputDocument::getFieldCount — Returns the number of fields in the document
- SolrInputDocument::getFieldNames — Returns an array containing all the fields in the document
- SolrInputDocument::hasChildDocuments — Returns true if the document has any child documents
- SolrInputDocument::merge — Merges one input document into another
- SolrInputDocument::reset — Alias of SolrInputDocument::clear
- SolrInputDocument::setBoost — Sets the boost value for this document
- SolrInputDocument::setFieldBoost — Sets the index-time boost value for a field
- SolrInputDocument::sort — Sorts the fields within the document
- SolrInputDocument::toArray — Returns an array representation of the input document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrinputdocument.php
