# Comparing generators with Iterator objects

Source: https://devdocs.io/php/language.generators.comparison

## Comparing generators with Iterator objects

The primary advantage of generators is their simplicity. Much less boilerplate code has to be written compared to implementing an Iterator class, and the code is generally much more readable. For example, the following function and class are equivalent:

```
<?php
function getLinesFromFile($fileName) {
    if (!$fileHandle = fopen($fileName, 'r')) {
        return;
    }

    while (false !== $line = fgets($fileHandle)) {
        yield $line;
    }

    fclose($fileHandle);
}

// versus...

class LineIterator implements Iterator {
    protected $fileHandle;

    protected $line;
    protected $i;

    public function __construct($fileName) {
        if (!$this->fileHandle = fopen($fileName, 'r')) {
            throw new RuntimeException('Couldn\'t open file "' . $fileName . '"');
        }
    }

    public function rewind() {
        fseek($this->fileHandle, 0);
        $this->line = fgets($this->fileHandle);
        $this->i = 0;
    }

    public function valid() {
        return false !== $this->line;
    }

    public function current() {
        return $this->line;
    }

    public function key() {
        return $this->i;
    }

    public function next() {
        if (false !== $this->line) {
            $this->line = fgets($this->fileHandle);
            $this->i++;
        }
    }

    public function __destruct() {
        fclose($this->fileHandle);
    }
}
?>
```

This flexibility does come at a cost, however: generators are forward-only iterators, and cannot be rewound once iteration has started. This also means that the same generator can't be iterated over multiple times: the generator will need to be rebuilt by calling the generator function again.

### See Also

- Object Iteration

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.generators.comparison.php
