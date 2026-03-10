# Pool::__construct

Source: https://devdocs.io/php/pool.construct

(PECL pthreads >= 2.0.0)

Pool::__construct — Creates a new Pool of Workers

### Description

Construct a new pool of workers. Pools lazily create their threads, which means new threads will only be spawned when they are required to execute tasks.

### Parameters

The maximum number of workers for this pool to create

The class for new Workers. If no class is given, then it defaults to the Worker class.

An array of arguments to be passed to new workers' constructors

### Examples

Example #1 Creating Pools

```
<?php
class MyWorker extends Worker {
    
    public function __construct(Something $something) {
        $this->something = $something;
    }
    
    public function run() {
        /** ... **/
    }
}

$pool = new Pool(8, \MyWorker::class, [new Something()]);

var_dump($pool);
?>
```

The above example will output:

```
object(Pool)#1 (6) {
  ["size":protected]=>
  int(8)
  ["class":protected]=>
  string(8) "MyWorker"
  ["workers":protected]=>
  NULL
  ["work":protected]=>
  NULL
  ["ctor":protected]=>
  array(1) {
    [0]=>
    object(Something)#2 (0) {
    }
  }
  ["last":protected]=>
  int(0)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pool.construct.php
