# RarArchive::open

Source: https://devdocs.io/php/rararchive.open

# rar_open

(PECL rar >= 2.0.0)

RarArchive::open -- rar_open — Open RAR archive

### Description

Object-oriented style (method):

```
public static RarArchive::open(string $filename, string $password = NULL, callable $volume_callback = NULL): RarArchive|false
```

Procedural style:

```
rar_open(string $filename, string $password = NULL, callable $volume_callback = NULL): RarArchive|false
```

Open specified RAR archive and return RarArchive instance representing it.

Note:

If opening a multi-volume archive, the path of the first volume should be passed as the first parameter. Otherwise, not all files will be shown. This is by design.

### Parameters

Path to the Rar archive.

A plain password, if needed to decrypt the headers. It will also be used by default if encrypted files are found. Note that the files may have different passwords in respect to the headers and among them.

A function that receives one parameter – the path of the volume that was not found – and returns a string with the correct path for such volume or null if such volume does not exist or is not known. The programmer should ensure the passed function doesn't cause loops as this function is called repeatedly if the path returned in a previous call did not correspond to the needed volume. Specifying this parameter omits the notice that would otherwise be emitted whenever a volume is not found; an implementation that only returns null can therefore be used to merely omit such notices.

Prior to version 2.0.0, this function would not handle relative paths correctly. Use realpath() as a workaround.

### Return Values

Returns the requested RarArchive instance or false on failure.

### Changelog

### Examples

Example #1 Object-oriented style

```
<?php
$rar_arch = RarArchive::open('encrypted_headers.rar', 'samplepassword');
if ($rar_arch === FALSE)
    die("Failed opening file");
    
$entries = $rar_arch->getEntries();
if ($entries === FALSE)
    die("Failed fetching entries");

echo "Found " . count($entries) . " files.\n";

if (empty($entries))
    die("No valid entries found.");
    
$stream = reset($entries)->getStream();
if ($stream === FALSE)
    die("Failed opening first file");

$rar_arch->close();

echo "Content of first one follows:\n";
echo stream_get_contents($stream);

fclose($stream);
?>
```

The above example will output something similar to:

```
Found 2 files.
Content of first one follows:
Encrypted file 1 contents.
```

Example #2 Procedural style

```
<?php
$rar_arch = rar_open('encrypted_headers.rar', 'samplepassword');
if ($rar_arch === FALSE)
    die("Failed opening file");
    
$entries = rar_list($rar_arch);
if ($entries === FALSE)
    die("Failed fetching entries");

echo "Found " . count($entries) . " files.\n";

if (empty($entries))
    die("No valid entries found.");
    
$stream = reset($entries)->getStream();
if ($stream === FALSE)
    die("Failed opening first file");

rar_close($rar_arch);

echo "Content of first one follows:\n";
echo stream_get_contents($stream);

fclose($stream);
?>
```

Example #3 Volume Callback

```
<?php
/* In this example, there's a volume named multi_broken.part1.rar
 * whose next volume is named multi.part2.rar */
function resolve($vol) {
    if (preg_match('/_broken/', $vol))
        return str_replace('_broken', '', $vol);
    else
        return null;
}
$rar_file1 = rar_open(dirname(__FILE__).'/multi_broken.part1.rar', null, 'resolve');
$entry = $rar_file1->getEntry('file2.txt');
$entry->extract(null, dirname(__FILE__) . "/temp_file2.txt");
?>
```

### See Also

- rar:// wrapper

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rararchive.open.php
