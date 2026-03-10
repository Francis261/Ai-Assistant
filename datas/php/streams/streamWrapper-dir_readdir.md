# streamWrapper::dir_readdir

Source: https://devdocs.io/php/streamwrapper.dir-readdir

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::dir_readdir — Read entry from directory handle

### Description

```
public streamWrapper::dir_readdir(): string|bool
```

This method is called in response to readdir().

### Parameters

This function has no parameters.

### Return Values

Should return string representing the next filename, or false if there is no next file.

Returning true or false will have the same effect of signaling there is no next file. However, returning true is discouraged and false should be used to signal this condition instead.

Note:

A non-boolean return value will be casted to string.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

### Examples

Example #1 Listing files from tar archives

```
<?php
class streamWrapper {
    protected $fp;

    public function dir_opendir($path, $options) {
        $url = parse_url($path);

        $path = $url["host"] . $url["path"];

        if (!is_readable($path)) {
            trigger_error("$path isn't readable for me", E_USER_NOTICE);
            return false;
        }
        if (!is_file($path)) {
            trigger_error("$path isn't a file", E_USER_NOTICE);
            return false;
        }

        $this->fp = fopen($path, "rb");
        return true;
    }

    public function dir_readdir() {
        // Extract the header for this entry
        $header      = fread($this->fp, 512);
        $data = unpack("a100filename/a8mode/a8uid/a8gid/a12size/a12mtime/a8checksum/a1filetype/a100link/a100linkedfile", $header);

        // Trim the filename and filesize
        $filename    = trim($data["filename"]);

        // No filename? We are the end of the archive
        if (!$filename) {
            return false;
        }

        $octal_bytes = trim($data["size"]);
        // Filesize is defined in octects
        $bytes       = octdec($octal_bytes);

        // tar rounds up filesizes up to multiple of 512 bytes (zero filled)
        $rest        = $bytes % 512;
        if ($rest > 0) {
            $bytes      += 512 - $rest;
        }

        // Seek over the file
        fseek($this->fp, $bytes, SEEK_CUR);

        return $filename;
    }

    public function dir_closedir() {
        return fclose($this->fp);
    }

    public function dir_rewinddir() {
        return fseek($this->fp, 0, SEEK_SET);
    }
}

stream_wrapper_register("tar", "streamWrapper");
$handle = opendir("tar://example.tar");
while (false !== ($file = readdir($handle))) {
    var_dump($file);
}

echo "Rewinding..\n";
rewind($handle);
var_dump(readdir($handle));

closedir($handle);
?>
```

The above example will output something similar to:

```
string(13) "construct.xml"
string(16) "dir-closedir.xml"
string(15) "dir-opendir.xml"
string(15) "dir-readdir.xml"
string(17) "dir-rewinddir.xml"
string(9) "mkdir.xml"
string(10) "rename.xml"
string(9) "rmdir.xml"
string(15) "stream-cast.xml"
string(16) "stream-close.xml"
string(14) "stream-eof.xml"
string(16) "stream-flush.xml"
string(15) "stream-lock.xml"
string(15) "stream-open.xml"
string(15) "stream-read.xml"
string(15) "stream-seek.xml"
string(21) "stream-set-option.xml"
string(15) "stream-stat.xml"
string(15) "stream-tell.xml"
string(16) "stream-write.xml"
string(10) "unlink.xml"
string(12) "url-stat.xml"
Rewinding..
string(13) "construct.xml"
```

### See Also

- readdir() - Read entry from directory handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.dir-readdir.php
