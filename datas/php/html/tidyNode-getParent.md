# tidyNode::getParent

Source: https://devdocs.io/php/tidynode.getparent

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

tidyNode::getParent — Returns the parent node of the current node

### Description

```
public tidyNode::getParent(): ?tidyNode
```

Returns the parent node of the current node.

### Parameters

This function has no parameters.

### Return Values

Returns a tidyNode if the node has a parent, or null otherwise.

### Examples

Example #1 tidyNode::getParent() example

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
 Hello World
 </body>
</html>

HTML;

$tidy = tidy_parse_string($html);
$num = 0;

$node = $tidy->html()->child[0]->child[0];

var_dump($node->getParent()->name);
?>
```

The above example will output:

```
string(4) "head"
```

### See Also

- tidyNode::getPreviousSibling() - Returns the previous sibling node of the current node
- tidyNode::getNextSibling() - Returns the next sibling node of the current node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidynode.getparent.php
