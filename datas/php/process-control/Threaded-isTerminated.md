# Threaded::isTerminated

Source: https://devdocs.io/php/threaded.isterminated

(PECL pthreads >= 2.0.0)

Threaded::isTerminated — State Detection

### Description

```
public Threaded::isTerminated(): bool
```

Tell if the referenced object was terminated during execution; suffered fatal errors, or threw uncaught exceptions

### Parameters

This function has no parameters.

### Return Values

A boolean indication of state

### Examples

Example #1 Detect the state of the referenced object

```
<?php
class My extends Thread {
    public function run() {
        i_do_not_exist();
    }
}
$my = new My();
$my->start();
$my->join();
var_dump($my->isTerminated());
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/threaded.isterminated.php
