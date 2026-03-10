# FT.SEARCH

Source: https://devdocs.io/redis/ft.search/index

```
FT.SEARCH
```

```
FT.SEARCH index query 
  [NOCONTENT] 
  [VERBATIM] [NOSTOPWORDS] 
  [WITHSCORES] 
  [WITHPAYLOADS] 
  [WITHSORTKEYS] 
  [FILTER numeric_field min max [ FILTER numeric_field min max ...]] 
  [GEOFILTER geo_field lon lat radius m | km | mi | ft [ GEOFILTER geo_field lon lat radius m | km | mi | ft ...]] 
  [INKEYS count key [key ...]] [ INFIELDS count field [field ...]] 
  [RETURN count identifier [AS property] [ identifier [AS property] ...]] 
  [SUMMARIZE [ FIELDS count field [field ...]] [FRAGS num] [LEN fragsize] [SEPARATOR separator]] 
  [HIGHLIGHT [ FIELDS count field [field ...]] [ TAGS open close]] 
  [SLOP slop] 
  [TIMEOUT timeout] 
  [INORDER] 
  [LANGUAGE language] 
  [EXPANDER expander] 
  [SCORER scorer] 
  [EXPLAINSCORE] 
  [PAYLOAD payload] 
  [SORTBY sortby [ ASC | DESC]] 
  [LIMIT offset num] 
  [PARAMS nargs name value [ name value ...]] 
  [DIALECT dialect]
```

Search the index with a textual query, returning either documents or just ids

Examples

## Required arguments

is index name. You must first create the index using FT.CREATE.

is text query to search. If it's more than a single word, put it in quotes. Refer to Query syntax for more details.

## Optional arguments

returns the document ids and not the content. This is useful if RediSearch is only an index on an external document collection.

does not try to use stemming for query expansion but searches the query terms verbatim.

also returns the relative internal score of each document. This can be used to merge results from multiple instances.

retrieves optional document payloads. See FT.CREATE. The payloads follow the document id and, if WITHSCORES is set, the scores.

returns the value of the sorting key, right after the id and score and/or payload, if requested. This is usually not needed, and exists for distributed search coordination purposes. This option is relevant only if used in conjunction with SORTBY.

limits results to those having numeric values ranging between min and max, if numeric_attribute is defined as a numeric attribute in FT.CREATE. min and max follow ZRANGE syntax, and can be -inf, +inf, and use ( for exclusive ranges. Multiple numeric filters for different attributes are supported in one query.

filter the results to a given radius from lon and lat. Radius is given as a number and units. See GEORADIUS for more details.

limits the result to a given set of keys specified in the list. The first argument must be the length of the list and greater than zero. Non-existent keys are ignored, unless all the keys are non-existent.

filters the results to those appearing only in specific attributes of the document, like title or URL. You must include num, which is the number of attributes you're filtering by. For example, if you request title and URL, then num is 2.

limits the attributes returned from the document. num is the number of attributes following the keyword. If num is 0, it acts like NOCONTENT. identifier is either an attribute name (for hashes and JSON) or a JSON Path expression (for JSON). property is an optional name used in the result. If not provided, the identifier is used in the result.

returns only the sections of the attribute that contain the matched text. See Highlighting for more information.

formats occurrences of matched text. See Highlighting for more information.

is the number of intermediate terms allowed to appear between the terms of the query. Suppose you're searching for a phrase hello world. If some terms appear in-between hello and world, a SLOP greater than 0 allows for these text attributes to match. By default, there is no SLOP constraint.

requires the terms in the document to have the same order as the terms in the query, regardless of the offsets between them. Typically used in conjunction with SLOP. Default is false.

use a stemmer for the supplied language during search for query expansion. If querying documents in Chinese, set to chinese to properly tokenize the query terms. Defaults to English. If an unsupported language is sent, the command returns an error. See FT.CREATE for the list of languages.

uses a custom query expander instead of the stemmer. See Extensions.

uses a custom scoring function you define. See Extensions.

returns a textual description of how the scores were calculated. Using this option requires WITHSCORES.

adds an arbitrary, binary safe payload that is exposed to custom scoring functions. See Extensions.

orders the results by the value of this attribute. This applies to both text and numeric attributes. Attributes needed for SORTBY should be declared as SORTABLE in the index, in order to be available with very low latency. Note that this adds memory overhead.

limits the results to the offset and number of results given. Note that the offset is zero-indexed. The default is 0 10, which returns 10 items starting from the first result. You can use LIMIT 0 0 to count the number of documents in the result set without actually returning them.

overrides the timeout parameter of the module.

defines one or more value parameters. Each parameter has a name and a value.

You can reference parameters in the query by a $, followed by the parameter name, for example, $user. Each such reference in the search query to a parameter name is substituted by the corresponding parameter value. For example, with parameter definition PARAMS 4 lon 29.69465 lat 34.95126, the expression @loc:[$lon $lat 10 km] is evaluated to @loc:[29.69465 34.95126 10 km]. You cannot reference parameters in the query string where concrete values are not allowed, such as in field names, for example, @loc. To use PARAMS, set DIALECT to 2 or greater than 2.

selects the dialect version under which to execute the query. If not specified, the query will execute under the default dialect version set during module initial loading or via FT.CONFIG SET command.

## Return

FT.SEARCH returns an array reply, where the first element is an integer reply of the total number of results, and then array reply pairs of document ids, and array replies of attribute/value pairs.

- If NOCONTENT is given, an array is returned where the first element is the total number of results, and the rest of the members are document ids.
- If a hash expires after the query process starts, the hash is counted in the total number of results, but the key name and content return as null.

### Return multiple values

When the index is defined ON JSON, a reply for a single attribute or a single JSONPath may return multiple values when the JSONPath matches multiple values, or when the JSONPath matches an array.

Prior to RediSearch v2.6, only the first of the matched values was returned. Starting with RediSearch v2.6, all values are returned, wrapped with a top-level array.

In order to maintain backward compatibility, the default behavior with RediSearch v2.6 is to return only the first value.

To return all the values, use DIALECT 3 (or greater, when available).

The DIALECT can be specified as a parameter in the FT.SEARCH command. If it is not specified, the DEFAULT_DIALECT is used, which can be set using FT.CONFIG SET or by passing it as an argument to the redisearch module when it is loaded.

For example, with the following document and index:

```
127.0.0.1:6379> JSON.SET doc:1 $ '[{"arr": [1, 2, 3]}, {"val": "hello"}, {"val": "world"}]'
OK
127.0.0.1:6379> FT.CREATE idx ON JSON PREFIX 1 doc: SCHEMA $..arr AS arr NUMERIC $..val AS val TEXT
OK
```

Notice the different replies, with and without DIALECT 3:

```
127.0.0.1:6379> FT.SEARCH idx * RETURN 2 arr val
1) (integer) 1
2) "doc:1"
3) 1) "arr"
   2) "[1,2,3]"
   3) "val"
   4) "hello"
127.0.0.1:6379> FT.SEARCH idx * RETURN 2 arr val DIALECT 3
1) (integer) 1
2) "doc:1"
3) 1) "arr"
   2) "[[1,2,3]]"
   3) "val"
   4) "[\"hello\",\"world\"]"
```

## Complexity

FT.SEARCH complexity is O(n) for single word queries. n is the number of the results in the result set. Finding all the documents that have a specific term is O(1), however, a scan on all those documents is needed to load the documents data from redis hashes and return them.

The time complexity for more complex queries varies, but in general it's proportional to the number of words, the number of intersection points between them and the number of results in the result set.

## Examples

Search for the term "wizard" in every TEXT attribute of an index containing book data.

```
127.0.0.1:6379> FT.SEARCH books-idx "wizard"
```

Search for the term dogs in the title attribute.

```
127.0.0.1:6379> FT.SEARCH books-idx "@title:dogs"
```

Search for books published in 2020 or 2021.

```
127.0.0.1:6379> FT.SEARCH books-idx "@published_at:[2020 2021]"
```

Search for Chinese restaurants within 5 kilometers of longitude -122.41, latitude 37.77 (San Francisco).

```
127.0.0.1:6379> FT.SEARCH restaurants-idx "chinese @location:[-122.41 37.77 5 km]"
```

Search for the term dogs or cats in the title attribute, but give matches of dogs a higher relevance score (also known as boosting).

```
127.0.0.1:6379> FT.SEARCH books-idx "(@title:dogs | @title:cats) | (@title:dogs) => { $weight: 5.0; }"
```

Search for books with dogs in any TEXT attribute in the index and request an explanation of scoring for each result.

```
127.0.0.1:6379> FT.SEARCH books-idx "dogs" WITHSCORES EXPLAINSCORE
```

Search for books with space in the title that have science in the TAG attribute categories.

```
127.0.0.1:6379> FT.SEARCH books-idx "@title:space @categories:{science}"
```

Search for books with Python in any TEXT attribute, returning 10 results starting with the 11th result in the entire result set (the offset parameter is zero-based), and return only the title attribute for each result.

```
127.0.0.1:6379> FT.SEARCH books-idx "python" LIMIT 10 10 RETURN 1 title
```

Search for books with Python in any TEXT attribute, returning the price stored in the original JSON document.

```
127.0.0.1:6379> FT.SEARCH books-idx "python" RETURN 3 $.book.price AS price
```

Search for books with semantically similar title to Planet Earth. Return top 10 results sorted by distance.

```
127.0.0.1:6379> FT.SEARCH books-idx "*=>[KNN 10 @title_embedding $query_vec AS title_score]" PARAMS 2 query_vec <"Planet Earth" embedding BLOB> SORTBY title_score DIALECT 2
```

Search for a phrase hello world. First, create an index.

```
127.0.0.1:6379> FT.CREATE memes SCHEMA phrase TEXT
OK
```

Add variations of the phrase hello world.

```
127.0.0.1:6379> HSET s1 phrase "hello world"
(integer) 1
127.0.0.1:6379> HSET s2 phrase "hello simple world"
(integer) 1
127.0.0.1:6379> HSET s3 phrase "hello somewhat less simple world"
(integer) 1
127.0.0.1:6379> HSET s4 phrase "hello complicated yet encouraging problem solving world"
(integer) 1
127.0.0.1:6379> HSET s5 phrase "hello complicated yet amazingly encouraging problem solving world"
(integer) 1
```

Then, search for the phrase hello world. The result returns all documents that contain the phrase.

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(hello world)' NOCONTENT 
1) (integer) 5
2) "s1"
3) "s2"
4) "s3"
5) "s4"
6) "s5"
```

Now, return all documents that have one of fewer words between hello and world.

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(hello world)' NOCONTENT SLOP 1
1) (integer) 2
2) "s1"
3) "s2"
```

Now, return all documents with three or fewer words between hello and world.

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(hello world)' NOCONTENT SLOP 3
1) (integer) 3
2) "s1"
3) "s2"
4) "s3"
```

s5 needs a higher SLOP to match, SLOP 6 or higher, to be exact. See what happens when you set SLOP to 5.

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(hello world)' NOCONTENT SLOP 5
1) (integer) 4
2) "s1"
3) "s2"
4) "s3"
5) "s4"
```

If you add additional terms (and stemming), you get these results.

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(hello amazing world)' NOCONTENT 
1) (integer) 1
2) "s5"
```

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(hello encouraged world)' NOCONTENT SLOP 5
1) (integer) 2
2) "s4"
3) "s5"
```

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(hello encouraged world)' NOCONTENT SLOP 4
1) (integer) 1
2) "s4"
```

If you swap the terms, you can still retrieve the correct phrase.

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(amazing hello world)' NOCONTENT
1) (integer) 1
2) "s5"
```

But, if you use INORDER, you get zero results.

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(amazing hello world)' NOCONTENT INORDER
1) (integer) 0
```

Likewise, if you use a query attribute $inorder set to true, s5 is not retrieved.

```
127.0.0.1:6379> FT.SEARCH memes '@phrase:(amazing hello world)=>{$inorder: true;}' NOCONTENT
1) (integer) 0
```

To sum up, the INORDER argument or $inorder query attribute require the query terms to match terms with similar ordering.

## See also

FT.CREATE | FT.AGGREGATE

## Related topics

- Extensions
- Highlighting
- Query syntax
- RediSearch

## History

- Starting with Redis version 2.0.0: Deprecated WITHPAYLOADS and PAYLOAD arguments

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.search/
