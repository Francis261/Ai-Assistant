# tidy::html

Source: https://devdocs.io/php/tidy.html

# tidy_get_html

(PHP 5, PHP 7, PHP 8, PECL tidy 0.5.2-1.0.0)

tidy::html -- tidy_get_html — Returns a tidyNode object starting from the <html> tag of the tidy parse tree

### Description

Object-oriented style

```
public tidy::html(): ?tidyNode
```

Procedural style

```
tidy_get_html(tidy $tidy): ?tidyNode
```

Returns a tidyNode object starting from the <html> tag of the tidy parse tree.

### Parameters

The Tidy object.

### Return Values

Returns the tidyNode object.

### Examples

Example #1 tidy::html() example

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

$html = $tidy->html();
echo $html->value;
?>
```

The above example will output:

```
<html>
<head>
<title>test</title>
</head>
<body>
<p>paragraph</p>
</body>
</html>
```

### See Also

- tidy::body() - Returns a tidyNode object starting from the <body> tag of the tidy parse tree
- tidy::head() - Returns a tidyNode object starting from the <head> tag of the tidy parse tree

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.php.html
