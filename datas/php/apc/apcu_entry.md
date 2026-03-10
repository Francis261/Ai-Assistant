# apcu_entry

Source: https://devdocs.io/php/function.apcu-entry

(PECL apcu >= 5.1.0)

apcu_entry — Atomically fetch or generate a cache entry

### Description

```
apcu_entry(string $key, callable $callback, int $ttl = 0): mixed
```

Atomically attempts to find key in the cache, if it cannot be found callback is called, passing key as the only argument. The return value of the call is then cached with the optionally specified ttl, and returned.

Note: When control enters apcu_entry() the lock for the cache is acquired exclusively, it is released when control leaves apcu_entry(): In effect, this turns the body of callback into a critical section, disallowing two processes from executing the same code paths concurrently. In addition, it prohibits the concurrent execution of any other APCu functions, since they will acquire the same lock.

The only APCu function that can be called safely by callback is apcu_entry().

### Parameters

Identity of cache entry

A callable that accepts key as the only argument and returns the value to cache.

Time To Live; store the callback's return value in the cache for ttl seconds. After the ttl has passed, the stored entry will be expunged from the cache (on the next request). If no ttl is supplied (or if the ttl is 0), the value will persist until it is removed from the cache manually, or otherwise fails to exist in the cache (clear, restart, etc.).

### Return Values

Returns the cached value

### Examples

Example #1 An apcu_entry() example

```
<?php
$config = apcu_entry("config", function($key) {
 return [
   "fruit" => apcu_entry("config.fruit", function($key){
     return [
       "apples",
       "pears"
     ];
   }), 
   "people" => apcu_entry("config.people", function($key){
     return [
      "bob",
      "joe",
      "niki"
     ];
   })
 ];
});

var_dump($config);
?>
```

The above example will output:

```
array(2) {
  ["fruit"]=>
  array(2) {
    [0]=>
    string(6) "apples"
    [1]=>
    string(5) "pears"
  }
  ["people"]=>
  array(3) {
    [0]=>
    string(3) "bob"
    [1]=>
    string(3) "joe"
    [2]=>
    string(4) "niki"
  }
}
```

### See Also

- apcu_store() - Cache a variable in the data store
- apcu_fetch() - Fetch a stored variable from the cache
- apcu_delete() - Removes a stored variable from the cache

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apcu-entry.php
