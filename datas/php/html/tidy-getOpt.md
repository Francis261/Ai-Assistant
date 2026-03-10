# tidy::getOpt

Source: https://devdocs.io/php/tidy.getopt

# tidy_getopt

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

tidy::getOpt -- tidy_getopt — Returns the value of the specified configuration option for the tidy document

### Description

Object-oriented style

```
public tidy::getOpt(string $option): string|int|bool
```

Procedural style

```
tidy_getopt(tidy $tidy, string $option): string|int|bool
```

Returns the value of the specified option for the specified tidy tidy.

### Parameters

The Tidy object.

You will find a list with each configuration option and their types at: » http://api.html-tidy.org/#quick-reference.

### Return Values

Returns the value of the specified option. The return type depends on the type of the specified one.

### Examples

Example #1 tidy_getopt() example

```
<?php

$html ='<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">
<html><head><title>Title</title></head>
<body>

<p><img src="img.png"></p>

</body></html>';

$config = array('accessibility-check' => 3,
                'alt-text' => 'some text');

$tidy = new tidy();
$tidy->parseString($html, $config);

var_dump($tidy->getOpt('accessibility-check')); //integer
var_dump($tidy->getOpt('lower-literals')); //boolean
var_dump($tidy->getOpt('alt-text')); //string

?>
```

The above example will output:

```
int(3)
bool(true)
string(9) "some text"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.getopt.php
