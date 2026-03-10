# Memcached::getResultMessage

Source: https://devdocs.io/php/memcached.getresultmessage

(PECL memcached >= 1.0.0)

Memcached::getResultMessage — Return the message describing the result of the last operation

### Description

```
public Memcached::getResultMessage(): string
```

Memcached::getResultMessage() returns a string that describes the result code of the last executed Memcached method.

### Parameters

This function has no parameters.

### Return Values

Message describing the result of the last Memcached operation.

### Examples

Example #1 Memcached::getResultMessage() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->add('foo', 'bar'); // first time should succeed
$m->add('foo', 'bar');
echo $m->getResultMessage(),"\n";
?>
```

The above example will output:

```
NOT STORED
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getresultmessage.php
