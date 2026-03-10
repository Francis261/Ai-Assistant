# RecursiveDirectoryIterator::getSubPathname

Source: https://devdocs.io/php/recursivedirectoryiterator.getsubpathname

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

RecursiveDirectoryIterator::getSubPathname — Get sub path and name

### Description

```
public RecursiveDirectoryIterator::getSubPathname(): string
```

Gets the sub path and filename.

### Parameters

This function has no parameters.

### Return Values

The sub path (sub directory) and filename.

### Examples

Example #1 getSubPathname() example

```
$directory = '/tmp';
      
      $it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory));
      
      foreach ($it as $file) {
          echo 'SubPathName: ' . $it->getSubPathname() . "\n";
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

- RecursiveDirectoryIterator::getSubPath() - Get sub path
- RecursiveDirectoryIterator::key() - Return path and filename of current dir entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursivedirectoryiterator.getsubpathname.php
