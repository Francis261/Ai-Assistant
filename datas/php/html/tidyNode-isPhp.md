# tidyNode::isPhp

Source: https://devdocs.io/php/tidynode.isphp

(PHP 5, PHP 7, PHP 8)

tidyNode::isPhp — Checks if a node is PHP

### Description

```
public tidyNode::isPhp(): bool
```

Tells if the node is PHP.

### Parameters

This function has no parameters.

### Return Values

Returns true if the current node is PHP code, false otherwise.

### Examples

Example #1 Extract PHP code from a mixed HTML document

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
    if($node->isPhp()) {
        echo "\n\n# php node #" . ++$GLOBALS['num'] . "\n";
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
# php node #1
<?php echo '<title>title</title>'; ?>

# php node #2
<?php
  // PHP code
  echo 'hello world!';
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidynode.isphp.php
