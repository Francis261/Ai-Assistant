# tidy::body

Source: https://devdocs.io/php/tidy.body

# tidy_get_body

(PHP 5, PHP 7, PHP 8, PECL tidy 0.5.2-1.0)

tidy::body -- tidy_get_body — Returns a tidyNode object starting from the <body> tag of the tidy parse tree

### Description

Object-oriented style

```
public tidy::body(): ?tidyNode
```

Procedural style

```
tidy_get_body(tidy $tidy): ?tidyNode
```

Returns a tidyNode object starting from the <body> tag of the tidy parse tree.

### Parameters

The Tidy object.

### Return Values

Returns a tidyNode object starting from the <body> tag of the tidy parse tree.

### Examples

Example #1 tidy::getBody() example

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

$body = $tidy->Body();
echo $body->value;
?>
```

The above example will output:

```
<body>
<p>paragraph</p>
</body>
```

### See Also

- tidy::head() - Returns a tidyNode object starting from the <head> tag of the tidy parse tree
- tidy::html() - Returns a tidyNode object starting from the <html> tag of the tidy parse tree

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.body.php
