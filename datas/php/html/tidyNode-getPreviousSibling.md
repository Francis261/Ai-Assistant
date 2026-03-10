# tidyNode::getPreviousSibling

Source: https://devdocs.io/php/tidynode.getprevioussibling

(PHP 8 >= 8.4.0)

tidyNode::getPreviousSibling — Returns the previous sibling node of the current node

### Description

```
public tidyNode::getPreviousSibling(): ?tidyNode
```

Returns the previous sibling node of the current node.

### Parameters

This function has no parameters.

### Return Values

Returns a tidyNode if the node has a previous sibling, or null otherwise.

### Examples

Example #1 tidyNode::getPreviousSibling() example

```
<?php

$html = <<< HTML
<html>
 <head>
 </head>
 <body>
  <p>Hello</p><p>World</p>
 </body>
</html>

HTML;

$tidy = tidy_parse_string($html);

$node = $tidy->body();
var_dump($node->child[1]->getPreviousSibling()->value);

?>
```

The above example will output:

```
string(13) "<p>Hello</p>
"
```

### See Also

- tidyNode::getParent() - Returns the parent node of the current node
- tidyNode::getNextSibling() - Returns the next sibling node of the current node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidynode.getprevioussibling.php
