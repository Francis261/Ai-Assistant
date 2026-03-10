# Escaping from HTML

Source: https://devdocs.io/php/language.basic-syntax.phpmode

## Escaping from HTML

Everything outside of a pair of opening and closing tags is ignored by the PHP parser which allows PHP files to have mixed content. This allows PHP to be embedded in HTML documents, for example to create templates.

Example #1 Embedding PHP in HTML

```
<p>This is going to be ignored by PHP and displayed by the browser.</p>
<?php echo 'While this is going to be parsed.'; ?>
<p>This will also be ignored by PHP and displayed by the browser.</p>
```

This works as expected, because when the PHP interpreter hits the ?> closing tags, it simply starts outputting whatever it finds (except for the immediately following newline - see instruction separation) until it hits another opening tag unless in the middle of a conditional statement in which case the interpreter will determine the outcome of the conditional before making a decision of what to skip over. See the next example.

Using structures with conditions

Example #2 Advanced escaping using conditions

```
<?php if ($expression == true): ?>
  This will show if the expression is true.
<?php else: ?>
  Otherwise this will show.
<?php endif; ?>
```

For outputting large blocks of text, dropping out of PHP parsing mode is generally more efficient than sending all of the text through echo or print.

Note:

If PHP is embeded within XML or XHTML the normal PHP <?php ?> must be used to remain compliant with the standards.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.basic-syntax.phpmode.php
