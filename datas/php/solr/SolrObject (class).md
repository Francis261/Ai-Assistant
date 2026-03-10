# The SolrObject class

Source: https://devdocs.io/php/class.solrobject

## Introduction

(PECL solr >= 0.9.2)

This is an object whose properties can also by accessed using the array syntax. All its properties are read-only.

## Class synopsis

```
public getPropertyNames(): array
```

```
public offsetExists(string $property_name): bool
```

```
public offsetGet(string $property_name): mixed
```

```
public offsetSet(string $property_name, string $property_value): void
```

```
public offsetUnset(string $property_name): void
```

## Table of Contents

- SolrObject::__construct — Creates Solr object
- SolrObject::__destruct — Destructor
- SolrObject::getPropertyNames — Returns an array of all the names of the properties
- SolrObject::offsetExists — Checks if the property exists
- SolrObject::offsetGet — Used to retrieve a property
- SolrObject::offsetSet — Sets the value for a property
- SolrObject::offsetUnset — Unsets the value for the property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrobject.php
