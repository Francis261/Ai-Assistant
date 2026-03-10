# odbc_foreignkeys

Source: https://devdocs.io/php/function.odbc-foreignkeys

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_foreignkeys — Retrieves a list of foreign keys

### Description

```
odbc_foreignkeys(
 Odbc\Connection $odbc,
 ?string $pk_catalog,
 string $pk_schema,
 string $pk_table,
 string $fk_catalog,
 string $fk_schema,
 string $fk_table
): Odbc\Result|false
```

Retrieves a list of foreign keys in the specified table or a list of foreign keys in other tables that refer to the primary key in the specified table

### Parameters

The ODBC connection object, see odbc_connect() for details.

The catalog ('qualifier' in ODBC 2 parlance) of the primary key table.

The schema ('owner' in ODBC 2 parlance) of the primary key table.

The primary key table.

The catalog ('qualifier' in ODBC 2 parlance) of the foreign key table.

The schema ('owner' in ODBC 2 parlance) of the foreign key table.

The foreign key table.

### Return Values

Returns an ODBC result object or false on failure.

The result set has the following columns:

- PKTABLE_CAT
- PKTABLE_SCHEM
- PKTABLE_NAME
- PKCOLUMN_NAME
- FKTABLE_CAT
- FKTABLE_SCHEM
- FKTABLE_NAME
- FKCOLUMN_NAME
- KEY_SEQ
- UPDATE_RULE
- DELETE_RULE
- FK_NAME
- PK_NAME
- DEFERRABILITY

If the foreign keys associated with a primary key are requested, the result set is ordered by FKTABLE_CAT, FKTABLE_SCHEM, FKTABLE_NAME and KEY_SEQ. If the primary keys associated with a foreign key are requested, the result set is ordered by PKTABLE_CAT, PKTABLE_SCHEM, PKTABLE_NAME and KEY_SEQ.

If pk_table contains a table name, odbc_foreignkeys() returns a result set containing the primary key of the specified table and all of the foreign keys that refer to it.

If fk_table contains a table name, odbc_foreignkeys() returns a result set containing all of the foreign keys in the specified table and the primary keys (in other tables) to which they refer.

If both pk_table and fk_table contain table names, odbc_foreignkeys() returns the foreign keys in the table specified in fk_table that refer to the primary key of the table specified in pk_table. This should be one key at most.

### Changelog

### See Also

- odbc_tables() - Get the list of table names stored in a specific data source
- odbc_primarykeys() - Gets the primary keys for a table

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-foreignkeys.php
