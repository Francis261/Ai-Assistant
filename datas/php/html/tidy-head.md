# tidy::head

Source: https://devdocs.io/php/tidy.head

# tidy_get_head

(PHP 5, PHP 7, PHP 8, PECL tidy 0.5.2-1.0.0)

tidy::head -- tidy_get_head — Returns a tidyNode object starting from the <head> tag of the tidy parse tree

### Description

Object-oriented style

```
public tidy::head(): ?tidyNode
```

Procedural style

```
tidy_get_head(tidy $tidy): ?tidyNode
```

Returns a tidyNode object starting from the <head> tag of the tidy parse tree.

### Parameters

The Tidy object.

### Return Values

Returns the tidyNode object.

### Examples

Example #1 tidy::head() example

```
<?php
$html = '
<html>
  <head>
    <title>test</title>
  </head>
  <body>
    <p>paragraph</p>
  </body>
</html>';

$tidy = tidy_parse_string($html);

$head = $tidy->head();
echo $head->value;
?>
```

The above example will output:

```
<head>
<title>test</title>
</head>
```

### See Also

- tidy::body() - Returns a tidyNode object starting from the <body> tag of the tidy parse tree
- tidy::html() - Returns a tidyNode object starting from the <html> tag of the tidy parse tree

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.head.php
