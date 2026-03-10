# pg_field_type_oid

Source: https://devdocs.io/php/function.pg-field-type-oid

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

pg_field_type_oid — Returns the type ID (OID) for the corresponding field number

### Description

```
pg_field_type_oid(PgSql\Result $result, int $field): string|int
```

pg_field_type_oid() returns an integer containing the OID of the base type of the given field in the given result instance.

You can get more information about the field type by querying PostgreSQL's pg_type system table using the OID obtained with this function. The PostgreSQL format_type() function will convert a type OID into an SQL standard type name.

Note:

If the field uses a PostgreSQL domain (rather than a basic type), it is the OID of the domain's underlying type that is returned, rather than the OID of the domain itself.

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Field number, starting from 0.

### Return Values

The OID of the field's base type.

### Changelog

### Examples

Example #1 Getting information about fields

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  // Assume 'title' is a varchar type
  $res = pg_query($dbconn, "select title from authors where author = 'Orwell'");

  echo "Title field type OID: ", pg_field_type_oid($res, 0);
?>
```

The above example will output:

```
Title field type OID: 1043
```

### See Also

- pg_field_type() - Returns the type name for the corresponding field number
- pg_field_prtlen() - Returns the printed length
- pg_field_name() - Returns the name of a field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-field-type-oid.php
