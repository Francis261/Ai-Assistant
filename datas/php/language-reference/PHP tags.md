# PHP tags

Source: https://devdocs.io/php/language.basic-syntax.phptags

## PHP tags

When PHP processes a file, it recognizes the opening and closing tags, <?php and ?>, to define the boundaries of PHP code execution. Content outside these tags is ignored by the PHP parser, allowing PHP to seamlessly embed in various document types.

A whitespace character (space, tab, or newline) must follow <?php to ensure proper token separation. Omitting this whitespace will result in a syntax error.

PHP also includes the short echo tag <?=, which is shorthand for <?php echo.

Example #1 PHP Opening and Closing Tags

```
1.  <?php echo 'if you want to serve PHP code in XHTML or XML documents,
                use these tags'; ?>

2.  You can use the short echo tag to <?= 'print this string' ?>.
    It's equivalent to <?php echo 'print this string' ?>.

3.  <? echo 'this code is within short tags, but will only work '.
            'if short_open_tag is enabled'; ?>
```

Short tags (example three) are available by default but can be disabled either via the short_open_tag php.ini configuration file directive, or are disabled by default if PHP is built with the --disable-short-tags configuration.

Note:

As short tags can be disabled it is recommended to only use the normal tags (<?php ?> and <?= ?>) to maximise compatibility.

If a file ends with PHP code, it is preferable to omit the PHP closing tag at the end of the file. This prevents accidental whitespace or new lines being added after the PHP closing tag, which may cause unwanted effects because PHP will start output buffering when there is no intention from the programmer to send any output at that point in the script.

Example #2 PHP Code Only File

```
<?php
echo "Hello world\n";

// ... more code

echo "Last statement\n";

// the script ends here with no PHP closing tag
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.basic-syntax.phptags.php
