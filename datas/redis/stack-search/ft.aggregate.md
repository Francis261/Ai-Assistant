# FT.AGGREGATE

Source: https://devdocs.io/redis/ft.aggregate/index

```
FT.AGGREGATE
```

```
FT.AGGREGATE index query 
  [VERBATIM] 
  [ LOAD count field [field ...]] 
  [TIMEOUT timeout] 
  [LOAD *] 
  [ GROUPBY nargs property [property ...] [ REDUCE function nargs arg [arg ...] [AS name] [ REDUCE function nargs arg [arg ...] [AS name] ...]] 
  [ GROUPBY nargs property [property ...] [ REDUCE function nargs arg [arg ...] [AS name] [ REDUCE function nargs arg [arg ...] [AS name] ...]] ...]] 
  [ SORTBY nargs [ property ASC | DESC [ property ASC | DESC ...]] [MAX num]] 
  [ APPLY expression AS name [ APPLY expression AS name ...]] 
  [ LIMIT offset num] 
  [FILTER filter] 
  [ WITHCURSOR [COUNT read_size] [MAXIDLE idle_time]] 
  [ PARAMS nargs name value [ name value ...]] 
  [DIALECT dialect]
```

Run a search query on an index, and perform aggregate transformations on the results, extracting statistics etc from them

Examples

## Required arguments

is index name against which the query is executed. You must first create the index using FT.CREATE.

is base filtering query that retrieves the documents. It follows the exact same syntax as the search query, including filters, unions, not, optional, and so on.

## Optional arguments

if set, does not try to use stemming for query expansion but searches the query terms verbatim.

loads document attributes from the source document.

- identifier is either an attribute name for hashes and JSON or a JSON Path expression for JSON.
- property is the optional name used in the result. If it is not provided, the identifier is used. This should be avoided.
- If * is used as nargs, all attributes in a document are loaded.

Attributes needed for aggregations should be stored as SORTABLE, where they are available to the aggregation pipeline with very low latency. LOAD hurts the performance of aggregate queries considerably because every processed record needs to execute the equivalent of HMGET against a Redis key, which when executed over millions of keys, amounts to high processing times.

groups the results in the pipeline based on one or more properties. Each group should have at least one reducer, a function that handles the group entries, either counting them, or performing multiple aggregate operations (see below).

reduces the matching results in each group into a single record, using a reduction function. For example, COUNT counts the number of records in the group. The reducers can have their own property names using the AS {name} optional argument. If a name is not given, the resulting name will be the name of the reduce function and the group properties. For example, if a name is not given to COUNT_DISTINCT by property @foo, the resulting name will be count_distinct(@foo).

See Supported GROUPBY reducers for more details.

sorts the pipeline up until the point of SORTBY, using a list of properties.

- By default, sorting is ascending, but ASC or DESC can be added for each property.
- nargs is the number of sorting parameters, including ASC and DESC, for example, SORTBY 4 @foo ASC @bar DESC.
- MAX is used to optimized sorting, by sorting only for the n-largest elements. Although it is not connected to LIMIT, you usually need just SORTBY … MAX for common queries.

Attributes needed for SORTBY should be stored as SORTABLE to be available with very low latency.

applies a 1-to-1 transformation on one or more properties and either stores the result as a new property down the pipeline or replaces any property using this transformation.

expr is an expression that can be used to perform arithmetic operations on numeric properties, or functions that can be applied on properties depending on their types (see below), or any combination thereof. For example, APPLY "sqrt(@foo)/log(@bar) + 5" AS baz evaluates this expression dynamically for each record in the pipeline and store the result as a new property called baz, which can be referenced by further APPLY/SORTBY/GROUPBY/REDUCE operations down the pipeline.

limits the number of results to return just num results starting at index offset (zero-based). It is much more efficient to use SORTBY … MAX if you are interested in just limiting the output of a sort operation. If a key expires during the query, an attempt to load the key's value will return a null array.

However, limit can be used to limit results without sorting, or for paging the n-largest results as determined by SORTBY MAX. For example, getting results 50-100 of the top 100 results is most efficiently expressed as SORTBY 1 @foo MAX 100 LIMIT 50 50. Removing the MAX from SORTBY results in the pipeline sorting all the records and then paging over results 50-100.

filters the results using predicate expressions relating to values in each result. They are applied post query and relate to the current state of the pipeline.

Scan part of the results with a quicker alternative than LIMIT. See Cursor API for more details.

if set, overrides the timeout parameter of the module.

defines one or more value parameters. Each parameter has a name and a value.

You can reference parameters in the query by a $, followed by the parameter name, for example, $user. Each such reference in the search query to a parameter name is substituted by the corresponding parameter value. For example, with parameter definition PARAMS 4 lon 29.69465 lat 34.95126, the expression @loc:[$lon $lat 10 km] is evaluated to @loc:[29.69465 34.95126 10 km]. You cannot reference parameters in the query string where concrete values are not allowed, such as in field names, for example, @loc. To use PARAMS, set DIALECT to 2 or greater than 2.

selects the dialect version under which to execute the query. If not specified, the query will execute under the default dialect version set during module initial loading or via FT.CONFIG SET command.

## Return

FT.AGGREGATE returns an array reply where each row is an array reply and represents a single aggregate result. The integer reply at position 1 does not represent a valid value.

### Return multiple values

See Return multiple values in FT.SEARCH The DIALECT can be specified as a parameter in the FT.AGGREGATE command. If it is not specified, the DEFAULT_DIALECT is used, which can be set using FT.CONFIG SET or by passing it as an argument to the redisearch module when it is loaded. For example, with the following document and index:

```
127.0.0.1:6379> JSON.SET doc:1 $ '[{"arr": [1, 2, 3]}, {"val": "hello"}, {"val": "world"}]'
OK
127.0.0.1:6379> FT.CREATE idx ON JSON PREFIX 1 doc: SCHEMA $..arr AS arr NUMERIC $..val AS val TEXT
OK
```

Notice the different replies, with and without DIALECT 3:

```
127.0.0.1:6379> FT.AGGREGATE idx * LOAD 2 arr val 
1) (integer) 1
2) 1) "arr"
   2) "[1,2,3]"
   3) "val"
   4) "hello"
127.0.0.1:6379> FT.AGGREGATE idx * LOAD 2 arr val DIALECT 3
1) (integer) 1
2) 1) "arr"
   2) "[[1,2,3]]"
   3) "val"
   4) "[\"hello\",\"world\"]"
```

## Complexity

Non-deterministic. Depends on the query and aggregations performed, but it is usually linear to the number of results returned.

## Examples

Find visits to the page about.html, group them by the day of the visit, count the number of visits, and sort them by day.

```
FT.AGGREGATE idx "@url:\"about.html\""
    APPLY "day(@timestamp)" AS day
    GROUPBY 2 @day @country
      REDUCE count 0 AS num_visits
    SORTBY 4 @day
```

Find most books ever published in a single year.

```
FT.AGGREGATE books-idx *
    GROUPBY 1 @published_year
      REDUCE COUNT 0 AS num_published
    GROUPBY 0
      REDUCE MAX 1 @num_published AS max_books_published_per_year
```

The last example used GROUPBY 0. Use GROUPBY 0 to apply a REDUCE function over all results from the last step of an aggregation pipeline -- this works on both the initial query and subsequent GROUPBY operations.

Search for libraries within 10 kilometers of the longitude -73.982254 and latitude 40.753181 then annotate them with the distance between their location and those coordinates.

```
 FT.AGGREGATE libraries-idx "@location:[-73.982254 40.753181 10 km]"
    LOAD 1 @location
    APPLY "geodistance(@location, -73.982254, 40.753181)"
```

Here, we needed to use LOAD to pre-load the @location attribute because it is a GEO attribute.

Next, count GitHub events by user (actor), to produce the most active users.

```
127.0.0.1:6379> FT.AGGREGATE gh "*" GROUPBY 1 @actor REDUCE COUNT 0 AS num SORTBY 2 @num DESC MAX 10
 1) (integer) 284784
 2) 1) "actor"
    2) "lombiqbot"
    3) "num"
    4) "22197"
 3) 1) "actor"
    2) "codepipeline-test"
    3) "num"
    4) "17746"
 4) 1) "actor"
    2) "direwolf-github"
    3) "num"
    4) "10683"
 5) 1) "actor"
    2) "ogate"
    3) "num"
    4) "6449"
 6) 1) "actor"
    2) "openlocalizationtest"
    3) "num"
    4) "4759"
 7) 1) "actor"
    2) "digimatic"
    3) "num"
    4) "3809"
 8) 1) "actor"
    2) "gugod"
    3) "num"
    4) "3512"
 9) 1) "actor"
    2) "xdzou"
    3) "num"
    4) "3216"
[10](10)) 1) "actor"
    2) "opstest"
    3) "num"
    4) "2863"
11) 1) "actor"
    2) "jikker"
    3) "num"
    4) "2794"
(0.59s)
```

## See also

FT.CONFIG SET | FT.SEARCH

## Related topics

- Aggregations
- RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.aggregate/
