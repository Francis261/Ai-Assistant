# tidyNode::isHtml

Source: https://devdocs.io/php/tidynode.ishtml

(PHP 5, PHP 7, PHP 8)

tidyNode::isHtml — Checks if a node is an element node

### Description

```
public tidyNode::isHtml(): bool
```

Tells if the node is an element node, but not the root node of the document.

### Parameters

This function has no parameters.

### Return Values

Returns true if the node is an element node, but not the root node of the document, false otherwise.

### Changelog

### Examples

Example #1 Extract HTML code from a mixed HTML document

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

get_nodes($tidy->html());

function get_nodes($node) {
    // check if the current node is of requested type
    if($node->isHtml()) {
        echo "\n\n# html node #" . ++$GLOBALS['num'] . "\n";
        echo $node->value;
    }

    // check if the current node has childrens
    if($node->hasChildren()) {
        foreach($node->child as $child) {
            get_nodes($child);
        }
    }
}

?>
```

The above example will output:

```
# html node #1
<html>
<head>
<?php echo '<title>title</title>'; ?><#
  /* JSTE code */
  alert('Hello World');
#>
<title></title>
</head>
<body>
<?php
  // PHP code
  echo 'hello world!';
?><%
  /* ASP code */
  response.write("Hello World!")
%><!-- Comments -->
Hello WorldOutside HTML
</body>
</html>

# html node #2
<head>
<?php echo '<title>title</title>'; ?><#
  /* JSTE code */
  alert('Hello World');
#>
<title></title>
</head>

# html node #3
<title></title>

# html node #4
<body>
<?php
  // PHP code
  echo 'hello world!';
?><%
  /* ASP code */
  response.write("Hello World!")
%><!-- Comments -->
Hello WorldOutside HTML
</body>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidynode.ishtml.php
