# The Yaf_Config_Ini class

Source: https://devdocs.io/php/class.yaf-config-ini

## Introduction

(Yaf >=1.0.0)

Yaf_Config_Ini enables developers to store configuration data in a familiar INI format and read them in the application by using nested object property syntax. The INI format is specialized to provide both the ability to have a hierarchy of configuration data keys and inheritance between configuration data sections. Configuration data hierarchies are supported by separating the keys with the dot or period character ("."). A section may extend or inherit from another section by following the section name with a colon character (":") and the name of the section from which data are to be inherited.

Note:

Yaf_Config_Ini utilizes the » parse_ini_file() PHP function. Please review this documentation to be aware of its specific behaviors, which propagate to Yaf_Config_Ini, such as how the special values of "true", "false", "yes", "no", and "null" are handled.

## Class synopsis

```
public count(): void
```

```
public current(): void
```

```
public __get(string $name = ?): void
```

```
public __isset(string $name): void
```

```
public key(): void
```

```
public next(): void
```

```
public offsetExists(string $name): void
```

```
public offsetGet(string $name): void
```

```
public offsetSet(string $name, string $value): void
```

```
public offsetUnset(string $name): void
```

```
public readonly(): void
```

```
public rewind(): void
```

```
public __set(string $name, mixed $value): void
```

```
public toArray(): array
```

```
public valid(): void
```

```
abstract public Yaf_Config_Abstract::get(string $name, mixed $value): mixed
```

```
abstract public Yaf_Config_Abstract::readonly(): bool
```

```
abstract public Yaf_Config_Abstract::set(): Yaf_Config_Abstract
```

```
abstract public Yaf_Config_Abstract::toArray(): array
```

## Properties

## Examples

Example #1 Yaf_Config_Ini()example

This example illustrates a basic use of Yaf_Config_Ini for loading configuration data from an INI file. In this example there are configuration data for both a production system and for a staging system. Because the staging system configuration data are very similar to those for production, the staging section inherits from the production section. In this case, the decision is arbitrary and could have been written conversely, with the production section inheriting from the staging section, though this may not be the case for more complex situations. Suppose, then, that the following configuration data are contained in /path/to/config.ini:

```
; Production site configuration data
[production]
webhost                  = www.example.com
database.adapter         = pdo_mysql
database.params.host     = db.example.com
database.params.username = dbuser
database.params.password = secret
database.params.dbname   = dbname
 
; Staging site configuration data inherits from production and
; overrides values as necessary
[staging : production]
database.params.host     = dev.example.com
database.params.username = devuser
database.params.password = devsecret
```

```
<?php
$config = new Yaf_Config_Ini('/path/to/config.ini', 'staging');
 
var_dump($config->database->params->host); 
var_dump($config->database->params->dbname);
var_dump($config->get("database.params.username"));
?>
```

The above example will output something similar to:

```
string(15) "dev.example.com"
string(6) "dbname"
string(7) "devuser
```

## Table of Contents

- Yaf_Config_Ini::__construct — Yaf_Config_Ini constructor
- Yaf_Config_Ini::count — Count all elements in Yaf_Config.ini
- Yaf_Config_Ini::current — Retrieve the current value
- Yaf_Config_Ini::__get — Retrieve a element
- Yaf_Config_Ini::__isset — Determine if a key is exists
- Yaf_Config_Ini::key — Fetch current element's key
- Yaf_Config_Ini::next — Advance the internal pointer
- Yaf_Config_Ini::offsetExists — The offsetExists purpose
- Yaf_Config_Ini::offsetGet — The offsetGet purpose
- Yaf_Config_Ini::offsetSet — The offsetSet purpose
- Yaf_Config_Ini::offsetUnset — The offsetUnset purpose
- Yaf_Config_Ini::readonly — The readonly purpose
- Yaf_Config_Ini::rewind — The rewind purpose
- Yaf_Config_Ini::__set — The __set purpose
- Yaf_Config_Ini::toArray — Return config as a PHP array
- Yaf_Config_Ini::valid — The valid purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-config-ini.php
