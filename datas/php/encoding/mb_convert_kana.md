# mb_convert_kana

Source: https://devdocs.io/php/function.mb-convert-kana

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_convert_kana — Convert "kana" one from another ("zen-kaku", "han-kaku" and more)

### Description

```
mb_convert_kana(string $string, string $mode = "KV", ?string $encoding = null): string
```

Performs a "han-kaku" - "zen-kaku" conversion for string string. This function is only useful for Japanese.

### Parameters

The string being converted.

The conversion option.

Specify with a combination of following options.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

The converted string.

### Errors/Exceptions

Throws a ValueError if the combination of different modes is invalid. For example "sS".

### Changelog

### Examples

Example #1 mb_convert_kana() example

```
<?php
/* Convert all "han-kaku" "kata-kana" to "zen-kaku" "hira-gana" */
echo mb_convert_kana('ﾔﾏﾀﾞ ﾊﾅｺ', "HV") . "\n";

/* Convert "han-kaku" "kata-kana" to "zen-kaku" "kata-kana" 
   and "zen-kaku" alphanumeric to "han-kaku" */
echo mb_convert_kana('ｺｳｻﾞﾊﾞﾝｺﾞｳ ０１２３４５６', "KVa") . "\n";
?>
```

The above example will output:

```
やまだ はなこ
コウザバンゴウ 0123456
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-convert-kana.php
