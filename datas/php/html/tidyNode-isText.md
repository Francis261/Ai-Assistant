# tidyNode::isText

Source: https://devdocs.io/php/tidynode.istext

(PHP 5, PHP 7, PHP 8)

tidyNode::isText — Checks if a node represents text (no markup)

### Description

```
public tidyNode::isText(): bool
```

Tells if the node represents a text (without any markup).

### Parameters

This function has no parameters.

### Return Values

Returns true if the node represent a text, false otherwise.

### Examples

Example #1 Extract text from a mixed HTML document

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
    if($node->isText()) {
        echo "\n\n# text node #" . ++$GLOBALS['num'] . "\n";
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
# text node #1
Hello World

# text node #2
Outside HTML
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidynode.istext.php
