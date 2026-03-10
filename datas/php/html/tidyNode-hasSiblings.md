# tidyNode::hasSiblings

Source: https://devdocs.io/php/tidynode.hassiblings

(PHP 5, PHP 7, PHP 8)

tidyNode::hasSiblings — Checks if a node has siblings

### Description

```
public tidyNode::hasSiblings(): bool
```

Tells if the node has siblings.

### Parameters

This function has no parameters.

### Return Values

Returns true if the node has siblings, false otherwise.

### Examples

Example #1 tidyNode::hasSiblings() example

```
<?php

$html = <<< HTML
<html><head>
<?php echo '<title>title</title>'; ?>
<# 
  /* JSTE code */
  alert('Hello World'); 
#>
</head>
<body>

<?php
  // PHP code
  echo 'hello world!';
?>

<%
  /* ASP code */
  response.write("Hello World!")
%>

<!-- Comments -->
Hello World
</body></html>
Outside HTML
HTML;

$tidy = tidy_parse_string($html);
$num = 0;

// the html tag
var_dump($tidy->html()->hasSiblings());

// the head tag
var_dump($tidy->html()->child[0]->hasSiblings());

?>
```

The above example will output:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidynode.hassiblings.php
