# apache_note

Source: https://devdocs.io/php/function.apache-note

(PHP 4, PHP 5, PHP 7, PHP 8)

apache_note — Get and set apache request notes

### Description

```
apache_note(string $note_name, ?string $note_value = null): string|false
```

This function is a wrapper for Apache's table_get and table_set. It edits the table of notes that exists during a request. The table's purpose is to allow Apache modules to communicate.

The main use for apache_note() is to pass information from one module to another within the same request.

### Parameters

The name of the note.

The value of the note.

### Return Values

If note_value is omitted or null, it returns the current value of note note_name. Otherwise, it sets the value of note note_name to note_value and returns the previous value of note note_name. If the note cannot be retrieved, false is returned.

### Changelog

### Examples

Example #1 Passing information between PHP and Perl

```
<?php

apache_note('name', 'Fredrik Ekengren');

// Call perl script
virtual("/perl/some_script.pl");

$result = apache_note("resultdata");
?>
```

```
# Get Apache request object
my $r = Apache->request()->main();

# Get passed data
my $name = $r->notes('name');

# some processing

# Pass result back to PHP
$r->notes('resultdata', $result);
```

Example #2 Logging values in access.log

```
<?php

apache_note('sessionID', session_id());

?>
```

```
# "%{sessionID}n" can be used in the LogFormat directive
```

### See Also

- virtual() - Perform an Apache sub-request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apache-note.php
