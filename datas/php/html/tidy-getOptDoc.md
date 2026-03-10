# tidy::getOptDoc

Source: https://devdocs.io/php/tidy.getoptdoc

# tidy_get_opt_doc

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

tidy::getOptDoc -- tidy_get_opt_doc — Returns the documentation for the given option name

### Description

Object-oriented style

```
public tidy::getOptDoc(string $option): string|false
```

Procedural style

```
tidy_get_opt_doc(tidy $tidy, string $option): string|false
```

tidy_get_opt_doc() returns the documentation for the given option name.

Note:

You need at least libtidy from 25 April, 2005 for this function be available.

### Parameters

The Tidy object.

The option name

### Return Values

Returns a string if the option exists and has documentation available, or false otherwise.

### Examples

Example #1 Print all options along with their documentation and default value

```
<?php

$tidy = new tidy;
$config = $tidy->getConfig();

ksort($config);

foreach ($config as $opt => $val) {

    if (!$doc = $tidy->getOptDoc($opt))
        $doc = 'no documentation available!';

    $val = ($tidy->getOpt($opt) === true)  ? 'true'  : $val;
    $val = ($tidy->getOpt($opt) === false) ? 'false' : $val;

    echo "<p><b>$opt</b> (default: '$val')<br />".
         "$doc</p><hr />\n";
}

?>
```

### See Also

- tidy::getConfig() - Get current Tidy configuration
- tidy::getOpt() - Returns the value of the specified configuration option for the tidy document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/tidy.getoptdoc.php
