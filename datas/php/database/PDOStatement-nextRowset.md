# PDOStatement::nextRowset

Source: https://devdocs.io/php/pdostatement.nextrowset

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.2.0)

PDOStatement::nextRowset — Advances to the next rowset in a multi-rowset statement handle

### Description

```
public PDOStatement::nextRowset(): bool
```

Some database servers support stored procedures that return more than one rowset (also known as a result set). PDOStatement::nextRowset() enables you to access the second and subsequent rowsets associated with a PDOStatement object. Each rowset can have a different set of columns from the preceding rowset.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Fetching multiple rowsets returned from a stored procedure

The following example shows how to call a stored procedure, MULTIPLE_ROWSETS, which returns three rowsets. We use a do-while loop to call the PDOStatement::nextRowset() method until it returns false and terminates the loop when no more rowsets are available.

```
<?php
$sql = 'CALL multiple_rowsets()';
$stmt = $conn->query($sql);
$i = 1;
do {
    $rowset = $stmt->fetchAll(PDO::FETCH_NUM);
    if ($rowset) {
        printResultSet($rowset, $i);
    }
    $i++;
} while ($stmt->nextRowset());

function printResultSet(&$rowset, $i) {
    print "Result set $i:\n";
    foreach ($rowset as $row) {
        foreach ($row as $col) {
            print $col . "\t";
        }
        print "\n";
    }
    print "\n";
}
?>
```

The above example will output:

```
Result set 1:
apple    red
banana   yellow

Result set 2:
orange   orange    150
banana   yellow    175

Result set 3:
lime     green
apple    red
banana   yellow
```

### See Also

- PDOStatement::columnCount() - Returns the number of columns in the result set
- PDOStatement::execute() - Executes a prepared statement
- PDOStatement::getColumnMeta() - Returns metadata for a column in a result set
- PDO::query() - Prepares and executes an SQL statement without placeholders

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.nextrowset.php
