# GRAPH.EXPLAIN

Source: https://devdocs.io/redis/graph.explain/index

```
GRAPH.EXPLAIN
```

```
GRAPH.EXPLAIN graph query
```

Constructs a query execution plan but does not run it. Inspect this execution plan to better understand how your query will get executed.

Arguments: Graph name, Query

Returns: String representation of a query execution plan

```
GRAPH.EXPLAIN us_government "MATCH (p:President)-[:BORN]->(h:State {name:'Hawaii'}) RETURN p"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/graph.explain/
