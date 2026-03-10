# RecursiveDirectoryIterator::getSubPath

Source: https://devdocs.io/php/recursivedirectoryiterator.getsubpath

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

RecursiveDirectoryIterator::getSubPath — Get sub path

### Description

```
public RecursiveDirectoryIterator::getSubPath(): string
```

Returns the sub path relative to the directory given in the constructor.

### Parameters

This function has no parameters.

### Return Values

The sub path.

### Examples

Example #1 getSubPath() example

```
$directory = '/tmp';
      
      $it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory));
      
      foreach ($it as $file) {
          echo 'SubPathName: ' . $it->getSubPathName() . "\n";
          echo 'SubPath:     ' . $it->getSubPath() . "\n\n";
      }
```

The above example will output something similar to:

```
SubPathName: fruit/apple.xml
     SubPath:     fruit
     
     SubPathName: stuff.xml
     SubPath:     
     
     SubPathName: veggies/carrot.xml
     SubPath:     veggies
```

### See Also

- RecursiveDirectoryIterator::getSubPathName() - Get sub path and name
- RecursiveDirectoryIterator::key() - Return path and filename of current dir entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursivedirectoryiterator.getsubpath.php
