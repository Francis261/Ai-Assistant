# GRAPH.RO_QUERY

Source: https://devdocs.io/redis/graph.ro_query/index

```
GRAPH.RO_QUERY
```

```
GRAPH.RO_QUERY graph query [TIMEOUT timeout]
```

Executes a given read only query against a specified graph.

Arguments: Graph name, Query, Timeout [optional]

Returns: Result set for a read only query or an error if a write query was given.

```
GRAPH.RO_QUERY us_government "MATCH (p:president)-[:born]->(:state {name:'Hawaii'}) RETURN p"
```

Query-level timeouts can be set as described in the configuration section.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/graph.ro_query/
