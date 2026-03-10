# Comments

Source: https://devdocs.io/php/language.basic-syntax.comments

## Comments

PHP supports 'C', 'C++' and Unix shell-style (Perl style) comments. For example:

Example #1 Comments

```
<?php
    echo "This is a test\n"; // This is a one-line c++ style comment
    /* This is a multi line comment
       yet another line of comment */
    echo "This is yet another test\n";
    echo "One Final Test\n"; # This is a one-line shell-style comment
?>
```

The "one-line" comment styles only comment to the end of the line or the current block of PHP code, whichever comes first. This means that HTML code after // ... ?> or # ... ?> WILL be printed: ?> breaks out of PHP mode and returns to HTML mode, and // or # cannot influence that.

Example #2 One Line Comments

```
<h1>This is an <?php # echo 'simple';?> example</h1>
<p>The header above will say 'This is an  example'.</p>
```

'C' style comments end at the first */ encountered. Make sure you don't nest 'C' style comments. It is easy to make this mistake if you are trying to comment out a large block of code.

```
<?php
 /*
    echo 'This is a test'; /* This comment will cause a problem */
 */
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.basic-syntax.comments.php
