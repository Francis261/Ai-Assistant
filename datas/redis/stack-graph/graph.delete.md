# GRAPH.DELETE

Source: https://devdocs.io/redis/graph.delete/index

```
GRAPH.DELETE
```

```
GRAPH.DELETE graph
```

Completely removes the graph and all of its entities.

Arguments: Graph name

Returns: String indicating if operation succeeded or failed.

```
GRAPH.DELETE us_government
```

Note: To delete a node from the graph (not the entire graph), execute a MATCH query and pass the alias to the DELETE clause:

```
GRAPH.QUERY DEMO_GRAPH "MATCH (x:Y {propname: propvalue}) DELETE x"
```

WARNING: When you delete a node, all of the node's incoming/outgoing relationships are also removed.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/graph.delete/
