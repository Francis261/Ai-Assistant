# ldap_get_attributes

Source: https://devdocs.io/php/function.ldap-get-attributes

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_get_attributes — Get attributes from a search result entry

### Description

```
ldap_get_attributes(LDAP\Connection $ldap, LDAP\ResultEntry $entry): array
```

Reads attributes and values from an entry in the search result.

Having located a specific entry in the directory, you can find out what information is held for that entry by using this call. You would use this call for an application which "browses" directory entries and/or where you do not know the structure of the directory entries. In many applications you will be searching for a specific attribute such as an email address or a surname, and won't care what other data is held.

```
return_value["count"] = number of attributes in the entry
return_value[0] = first attribute
return_value[n] = nth attribute

return_value["attribute"]["count"] = number of values for attribute
return_value["attribute"][0] = first value of the attribute
return_value["attribute"][i] = (i+1)th value of the attribute
```

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\ResultEntry instance.

### Return Values

Returns a complete entry information in a multi-dimensional array.

### Changelog

### Examples

Example #1 Show the list of attributes held for a particular directory entry

```
<?php
// $ds is a valid LDAP\Connection instance for a directory server

// $sr is a valid search result from a prior call to
// one of the ldap directory search calls

$entry = ldap_first_entry($ds, $sr);

$attrs = ldap_get_attributes($ds, $entry);

echo $attrs["count"] . " attributes held for this entry:<p>";

for ($i=0; $i < $attrs["count"]; $i++) {
    echo $attrs[$i] . "<br />";
}
?>
```

### See Also

- ldap_first_attribute() - Return first attribute
- ldap_next_attribute() - Get the next attribute in result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-get-attributes.php
