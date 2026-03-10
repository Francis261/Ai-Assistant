# Pool::submit

Source: https://devdocs.io/php/pool.submit

(PECL pthreads >= 2.0.0)

Pool::submit — Submits an object for execution

### Description

```
public Pool::submit(Threaded $task): int
```

Submit the task to the next Worker in the Pool

### Parameters

The task for execution

### Return Values

the identifier of the Worker executing the object

### Examples

Example #1 Submitting Tasks

```
<?php
class MyWork extends Threaded {
    
    public function run() {
        /* ... */
    }
}

class MyWorker extends Worker {
    
    public function __construct(Something $something) {
        $this->something = $something;
    }
    
    public function run() {
        /** ... **/
    }
}

$pool = new Pool(8, \MyWorker::class, [new Something()]);
$pool->submit(new MyWork());
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
  array(1) {
    [0]=>
    object(MyWorker)#4 (1) {
      ["something"]=>
      object(Something)#5 (0) {
      }
    }
  }
  ["work":protected]=>
  array(1) {
    [0]=>
    object(MyWork)#3 (1) {
      ["worker"]=>
      object(MyWorker)#5 (1) {
        ["something"]=>
        object(Something)#6 (0) {
        }
      }
    }
  }
  ["ctor":protected]=>
  array(1) {
    [0]=>
    object(Something)#2 (0) {
    }
  }
  ["last":protected]=>
  int(1)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pool.submit.php
