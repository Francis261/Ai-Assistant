# mysqli::get_charset

Source: https://devdocs.io/php/mysqli.get-charset

# mysqli_get_charset

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

mysqli::get_charset -- mysqli_get_charset — Returns a character set object

### Description

Object-oriented style

```
public mysqli::get_charset(): ?object
```

Procedural style

```
mysqli_get_charset(mysqli $mysql): ?object
```

Returns a character set object providing several properties of the current active character set.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

The function returns a character set object with the following properties:

Character set name

Collation name

Directory the charset description was fetched from (?) or "" for built-in character sets

Minimum character length in bytes

Maximum character length in bytes

Internal character set number

Character set status (?)

### Examples

Example #1 mysqli::get_charset() example

Object-oriented style

```
<?php
  $db = mysqli_init();
  $db->real_connect("localhost","root","","test");
  var_dump($db->get_charset());
?>
```

Procedural style

```
<?php
  $db = mysqli_init();
  mysqli_real_connect($db, "localhost","root","","test");
  var_dump(mysqli_get_charset($db));
?>
```

The above examples will output:

```
object(stdClass)#2 (7) {
  ["charset"]=>
  string(6) "latin1"
  ["collation"]=>
  string(17) "latin1_swedish_ci"
  ["dir"]=>
  string(0) ""
  ["min_length"]=>
  int(1)
  ["max_length"]=>
  int(1)
  ["number"]=>
  int(8)
  ["state"]=>
  int(801)
}
```

### See Also

- mysqli_character_set_name() - Returns the current character set of the database connection
- mysqli_set_charset() - Sets the client character set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.get-charset.php
