# Parle\RParser::push

Source: https://devdocs.io/php/parle-rparser.push

(PECL parle >= 0.7.0)

Parle\RParser::push — Add a grammar rule

### Description

```
public Parle\RParser::push(string $name, string $rule): int
```

Push a grammar rule. The production id returned can be used later in the parsing process to identify the rule matched.

### Parameters

Rule name.

The rule to be added. The syntax is Bison compatible.

### Return Values

Returns int representing the rule index.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/parle-rparser.push.php
