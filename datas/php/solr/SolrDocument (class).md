# The SolrDocument class

Source: https://devdocs.io/php/class.solrdocument

## Introduction

(PECL solr >= 0.9.2)

Represents a Solr document retrieved from a query response.

## Class synopsis

```
public addField(string $fieldName, string $fieldValue): bool
```

```
public clear(): bool
```

```
public __clone(): void
```

```
public current(): SolrDocumentField
```

```
public deleteField(string $fieldName): bool
```

```
public fieldExists(string $fieldName): bool
```

```
public __get(string $fieldName): SolrDocumentField
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
public getFieldCount(): int
```

```
public getFieldNames(): array
```

```
public getInputDocument(): SolrInputDocument
```

```
public hasChildDocuments(): bool
```

```
public __isset(string $fieldName): bool
```

```
public key(): string
```

```
public merge(SolrDocument $sourceDoc, bool $overwrite = true): bool
```

```
public next(): void
```

```
public offsetExists(string $fieldName): bool
```

```
public offsetGet(string $fieldName): SolrDocumentField
```

```
public offsetSet(string $fieldName, string $fieldValue): void
```

```
public offsetUnset(string $fieldName): void
```

```
public reset(): bool
```

```
public rewind(): void
```

```
public serialize(): string
```

```
public __set(string $fieldName, string $fieldValue): bool
```

```
public sort(int $sortOrderBy, int $sortDirection = SolrDocument::SORT_ASC): bool
```

```
public toArray(): array
```

```
public unserialize(string $serialized): void
```

```
public __unset(string $fieldName): bool
```

```
public valid(): bool
```

## Predefined Constants

Default mode for sorting fields within the document.

Sorts the fields in ascending order

Sorts the fields in descending order

Sorts the fields by field name.

Sorts the fields by number of values in each field.

Sorts the fields by thier boost values.

## Table of Contents

- SolrDocument::addField — Adds a field to the document
- SolrDocument::clear — Drops all the fields in the document
- SolrDocument::__clone — Creates a copy of a SolrDocument object
- SolrDocument::__construct — Constructor
- SolrDocument::current — Retrieves the current field
- SolrDocument::deleteField — Removes a field from the document
- SolrDocument::__destruct — Destructor
- SolrDocument::fieldExists — Checks if a field exists in the document
- SolrDocument::__get — Access the field as a property
- SolrDocument::getChildDocuments — Returns an array of child documents (SolrDocument)
- SolrDocument::getChildDocumentsCount — Returns the number of child documents
- SolrDocument::getField — Retrieves a field by name
- SolrDocument::getFieldCount — Returns the number of fields in this document
- SolrDocument::getFieldNames — Returns an array of fields names in the document
- SolrDocument::getInputDocument — Returns a SolrInputDocument equivalent of the object
- SolrDocument::hasChildDocuments — Checks whether the document has any child documents
- SolrDocument::__isset — Checks if a field exists
- SolrDocument::key — Retrieves the current key
- SolrDocument::merge — Merges source to the current SolrDocument
- SolrDocument::next — Moves the internal pointer to the next field
- SolrDocument::offsetExists — Checks if a particular field exists
- SolrDocument::offsetGet — Retrieves a field
- SolrDocument::offsetSet — Adds a field to the document
- SolrDocument::offsetUnset — Removes a field
- SolrDocument::reset — Alias of SolrDocument::clear
- SolrDocument::rewind — Resets the internal pointer to the beginning
- SolrDocument::serialize — Used for custom serialization
- SolrDocument::__set — Adds another field to the document
- SolrDocument::sort — Sorts the fields in the document
- SolrDocument::toArray — Returns an array representation of the document
- SolrDocument::unserialize — Custom serialization of SolrDocument objects
- SolrDocument::__unset — Removes a field from the document
- SolrDocument::valid — Checks if the current position internally is still valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrdocument.php
