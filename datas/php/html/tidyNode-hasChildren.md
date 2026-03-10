# tidyNode::hasChildren

Source: https://devdocs.io/php/tidynode.haschildren

(PHP 5, PHP 7, PHP 8)

tidyNode::hasChildren — Checks if a node has children

### Description

```
public tidyNode::hasChildren(): bool
```

Tells if the node has children.

### Parameters

This function has no parameters.

### Return Values

Returns true if the node has children, false otherwise.

### Examples

Example #1 tidyNode::hasChildren() example

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

// the head tag
var_dump($tidy->html()->child[0]->hasChildren());

// the php inside the head tag
var_dump($tidy->html()->child[0]->child[0]->hasChildren());

?>
```

The above example will output:

```
bool(true)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidynode.haschildren.php
