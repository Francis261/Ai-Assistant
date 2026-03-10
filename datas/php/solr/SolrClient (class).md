# The SolrClient class

Source: https://devdocs.io/php/class.solrclient

## Introduction

(PECL solr >= 0.9.2)

Used to send requests to a Solr server. Currently, cloning and serialization of SolrClient instances is not supported.

## Class synopsis

```
public addDocument(SolrInputDocument $doc, bool $overwrite = true, int $commitWithin = 0): SolrUpdateResponse
```

```
public addDocuments(array $docs, bool $overwrite = true, int $commitWithin = 0): void
```

```
public commit(bool $softCommit = false, bool $waitSearcher = true, bool $expungeDeletes = false): SolrUpdateResponse
```

```
public deleteById(string $id): SolrUpdateResponse
```

```
public deleteByIds(array $ids): SolrUpdateResponse
```

```
public deleteByQueries(array $queries): SolrUpdateResponse
```

```
public deleteByQuery(string $query): SolrUpdateResponse
```

```
public getById(string $id): SolrQueryResponse
```

```
public getByIds(array $ids): SolrQueryResponse
```

```
public getDebug(): string
```

```
public getOptions(): array
```

```
public optimize(int $maxSegments = 1, bool $softCommit = true, bool $waitSearcher = true): SolrUpdateResponse
```

```
public ping(): SolrPingResponse
```

```
public query(SolrParams $query): SolrQueryResponse
```

```
public request(string $raw_request): SolrUpdateResponse
```

```
public rollback(): SolrUpdateResponse
```

```
public setResponseWriter(string $responseWriter): void
```

```
public setServlet(int $type, string $value): bool
```

```
public system(): void
```

```
public threads(): void
```

## Predefined Constants

Used when updating the search servlet.

Used when updating the update servlet.

Used when updating the threads servlet.

Used when updating the ping servlet.

Used when updating the terms servlet.

Used when retrieving system information from the system servlet.

This is the initial value for the search servlet.

This is the initial value for the update servlet.

This is the initial value for the threads servlet.

This is the initial value for the ping servlet.

This is the initial value for the terms servlet used for the TermsComponent

This is the initial value for the system servlet used to obtain Solr Server information

## Table of Contents

- SolrClient::addDocument — Adds a document to the index
- SolrClient::addDocuments — Adds a collection of SolrInputDocument instances to the index
- SolrClient::commit — Finalizes all add/deletes made to the index
- SolrClient::__construct — Constructor for the SolrClient object
- SolrClient::deleteById — Delete by Id
- SolrClient::deleteByIds — Deletes by Ids
- SolrClient::deleteByQueries — Removes all documents matching any of the queries
- SolrClient::deleteByQuery — Deletes all documents matching the given query
- SolrClient::__destruct — Destructor for SolrClient
- SolrClient::getById — Get Document By Id. Utilizes Solr Realtime Get (RTG)
- SolrClient::getByIds — Get Documents by their Ids. Utilizes Solr Realtime Get (RTG)
- SolrClient::getDebug — Returns the debug data for the last connection attempt
- SolrClient::getOptions — Returns the client options set internally
- SolrClient::optimize — Defragments the index
- SolrClient::ping — Checks if Solr server is still up
- SolrClient::query — Sends a query to the server
- SolrClient::request — Sends a raw update request
- SolrClient::rollback — Rollbacks all add/deletes made to the index since the last commit
- SolrClient::setResponseWriter — Sets the response writer used to prepare the response from Solr
- SolrClient::setServlet — Changes the specified servlet type to a new value
- SolrClient::system — Retrieve Solr Server information
- SolrClient::threads — Checks the threads status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrclient.php
