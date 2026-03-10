# SplFileObject::key

Source: https://devdocs.io/php/splfileobject.key

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::key — Get line number

### Description

```
public SplFileObject::key(): int
```

Gets the current line number.

Note:

This number may not reflect the actual line number in the file if SplFileObject::setMaxLineLen() is used to read fixed lengths of the file.

### Parameters

This function has no parameters.

### Return Values

Returns the current line number.

### Examples

Example #1 SplFileObject::key() example

```
<?php
$file = new SplFileObject("lipsum.txt");
foreach ($file as $line) {
    echo $file->key() . ". " . $line;
}
?>
```

The above example will output something similar to:

```
0. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
1. Duis nec sapien felis, ac sodales nisl. 
2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

Example #2 SplFileObject::key() example with SplFileObject::setMaxLineLen()

```
<?php
$file = new SplFileObject("lipsum.txt");
$file->setMaxLineLen(20);
foreach ($file as $line) {
    echo $file->key() . ". " . $line . "\n";
}
?>
```

The above example will output something similar to:

```
0. Lorem ipsum dolor s
1. it amet, consectetu
2. r adipiscing elit. 
3. 

4. Duis nec sapien fel
5. is, ac sodales nisl
6. . 

7. Lorem ipsum dolor s
8. it amet, consectetu
9. r adipiscing elit.
```

### See Also

- SplFileObject::current() - Retrieve current line of file
- SplFileObject::seek() - Seek to specified line
- SplFileObject::next() - Read next line
- SplFileObject::rewind() - Rewind the file to the first line
- SplFileObject::valid() - Not at EOF

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.key.php
