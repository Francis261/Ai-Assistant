# FT.EXPLAIN

Source: https://devdocs.io/redis/ft.explain/index

```
FT.EXPLAIN
```

```
FT.EXPLAIN index query 
  [DIALECT dialect]
```

Return the execution plan for a complex query

Examples

## Required arguments

is index name. You must first create the index using FT.CREATE.

is query string, as if sent to FT.SEARCH`.

## Optional arguments

is dialect version under which to execute the query. If not specified, the query executes under the default dialect version set during module initial loading or via FT.CONFIG SET command.

- In the returned response, a + on a term is an indication of stemming.
- Use redis-cli --raw to properly read line-breaks in the returned response.

## Return

FT.EXPLAIN returns a string representing the execution plan.

## Examples

```
$ redis-cli --raw
127.0.0.1:6379> FT.EXPLAIN rd "(foo bar)|(hello world) @date:[100 200]|@date:[500 +inf]"
INTERSECT {
  UNION {
    INTERSECT {
      foo
      bar
    }
    INTERSECT {
      hello
      world
    }
  }
  UNION {
    NUMERIC {100.000000 <= x <= 200.000000}
    NUMERIC {500.000000 <= x <= inf}
  }
}
```

## See also

FT.CREATE | FT.SEARCH | FT.CONFIG SET

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.explain/
