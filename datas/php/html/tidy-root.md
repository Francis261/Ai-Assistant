# tidy::root

Source: https://devdocs.io/php/tidy.root

# tidy_get_root

(PHP 5, PHP 7, PHP 8, PECL tidy 0.5.2-1.0.0)

tidy::root -- tidy_get_root — Returns a tidyNode object representing the root of the tidy parse tree

### Description

Object-oriented style

```
public tidy::root(): ?tidyNode
```

Procedural style

```
tidy_get_root(tidy $tidy): ?tidyNode
```

Returns a tidyNode object representing the root of the tidy parse tree.

### Parameters

The Tidy object.

### Return Values

Returns the tidyNode object.

### Examples

Example #1 tidy::root() example

```
<?php

$html = <<< HTML
<html><body>

<p>paragraph</p>
<br/>

</body></html>
HTML;

$tidy = tidy_parse_string($html);
dump_nodes($tidy->root(), 1);

function dump_nodes($node, $indent) {

    if($node->hasChildren()) {
        foreach($node->child as $child) {
            echo str_repeat('.', $indent*2) . ($child->name ? $child->name : '"'.$child->value.'"'). "\n";

            dump_nodes($child, $indent+1);
        }
    }
}
?>
```

The above example will output:

```
..html
....head
......title
....body
......p
........"paragraph"
......br
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.root.php
