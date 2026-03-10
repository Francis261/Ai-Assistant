# Standard PHP Library (SPL)

Source: https://devdocs.io/php/book.spl

# Introduction

The Standard PHP Library (SPL) extension defines interfaces and classes that are meant to solve common problems.

The extension provides various datastructures, generic exceptions, iterators, classes to work with filesystems using an object oriented API, and utility functions.

- Interfaces
  - OuterIterator — The OuterIterator interface
  - RecursiveIterator — The RecursiveIterator interface
  - SeekableIterator — The SeekableIterator interface
  - SplObserver — The SplObserver interface
  - SplSubject — The SplSubject interface
- Datastructures
  - SplDoublyLinkedList — The SplDoublyLinkedList class
  - SplStack — The SplStack class
  - SplQueue — The SplQueue class
  - SplHeap — The SplHeap class
  - SplMaxHeap — The SplMaxHeap class
  - SplMinHeap — The SplMinHeap class
  - SplPriorityQueue — The SplPriorityQueue class
  - SplFixedArray — The SplFixedArray class
  - ArrayObject — The ArrayObject class
  - SplObjectStorage — The SplObjectStorage class
- Exceptions
  - BadFunctionCallException — The BadFunctionCallException class
  - BadMethodCallException — The BadMethodCallException class
  - DomainException — The DomainException class
  - InvalidArgumentException — The InvalidArgumentException class
  - LengthException — The LengthException class
  - LogicException — The LogicException class
  - OutOfBoundsException — The OutOfBoundsException class
  - OutOfRangeException — The OutOfRangeException class
  - OverflowException — The OverflowException class
  - RangeException — The RangeException class
  - RuntimeException — The RuntimeException class
  - UnderflowException — The UnderflowException class
  - UnexpectedValueException — The UnexpectedValueException class
- Iterators
  - AppendIterator — The AppendIterator class
  - ArrayIterator — The ArrayIterator class
  - CachingIterator — The CachingIterator class
  - CallbackFilterIterator — The CallbackFilterIterator class
  - DirectoryIterator — The DirectoryIterator class
  - EmptyIterator — The EmptyIterator class
  - FilesystemIterator — The FilesystemIterator class
  - FilterIterator — The FilterIterator class
  - GlobIterator — The GlobIterator class
  - InfiniteIterator — The InfiniteIterator class
  - IteratorIterator — The IteratorIterator class
  - LimitIterator — The LimitIterator class
  - MultipleIterator — The MultipleIterator class
  - NoRewindIterator — The NoRewindIterator class
  - ParentIterator — The ParentIterator class
  - RecursiveArrayIterator — The RecursiveArrayIterator class
  - RecursiveCachingIterator — The RecursiveCachingIterator class
  - RecursiveCallbackFilterIterator — The RecursiveCallbackFilterIterator class
  - RecursiveDirectoryIterator — The RecursiveDirectoryIterator class
  - RecursiveFilterIterator — The RecursiveFilterIterator class
  - RecursiveIteratorIterator — The RecursiveIteratorIterator class
  - RecursiveRegexIterator — The RecursiveRegexIterator class
  - RecursiveTreeIterator — The RecursiveTreeIterator class
  - RegexIterator — The RegexIterator class
- File Handling
  - SplFileInfo — The SplFileInfo class
  - SplFileObject — The SplFileObject class
  - SplTempFileObject — The SplTempFileObject class
- SPL Functions
  - class_implements — Return the interfaces which are implemented by the given class or interface
  - class_parents — Return the parent classes of the given class
  - class_uses — Return the traits used by the given class
  - iterator_apply — Call a function for every element in an iterator
  - iterator_count — Count the elements in an iterator
  - iterator_to_array — Copy the iterator into an array
  - spl_autoload — Default implementation for __autoload()
  - spl_autoload_call — Try all registered __autoload() functions to load the requested class
  - spl_autoload_extensions — Register and return default file extensions for spl_autoload
  - spl_autoload_functions — Return all registered __autoload() functions
  - spl_autoload_register — Register given function as __autoload() implementation
  - spl_autoload_unregister — Unregister given function as __autoload() implementation
  - spl_classes — Return available SPL classes
  - spl_object_hash — Return hash id for given object
  - spl_object_id — Return the integer object handle for given object

- OuterIterator — The OuterIterator interface
- RecursiveIterator — The RecursiveIterator interface
- SeekableIterator — The SeekableIterator interface
- SplObserver — The SplObserver interface
- SplSubject — The SplSubject interface

- SplDoublyLinkedList — The SplDoublyLinkedList class
- SplStack — The SplStack class
- SplQueue — The SplQueue class
- SplHeap — The SplHeap class
- SplMaxHeap — The SplMaxHeap class
- SplMinHeap — The SplMinHeap class
- SplPriorityQueue — The SplPriorityQueue class
- SplFixedArray — The SplFixedArray class
- ArrayObject — The ArrayObject class
- SplObjectStorage — The SplObjectStorage class

- BadFunctionCallException — The BadFunctionCallException class
- BadMethodCallException — The BadMethodCallException class
- DomainException — The DomainException class
- InvalidArgumentException — The InvalidArgumentException class
- LengthException — The LengthException class
- LogicException — The LogicException class
- OutOfBoundsException — The OutOfBoundsException class
- OutOfRangeException — The OutOfRangeException class
- OverflowException — The OverflowException class
- RangeException — The RangeException class
- RuntimeException — The RuntimeException class
- UnderflowException — The UnderflowException class
- UnexpectedValueException — The UnexpectedValueException class

- AppendIterator — The AppendIterator class
- ArrayIterator — The ArrayIterator class
- CachingIterator — The CachingIterator class
- CallbackFilterIterator — The CallbackFilterIterator class
- DirectoryIterator — The DirectoryIterator class
- EmptyIterator — The EmptyIterator class
- FilesystemIterator — The FilesystemIterator class
- FilterIterator — The FilterIterator class
- GlobIterator — The GlobIterator class
- InfiniteIterator — The InfiniteIterator class
- IteratorIterator — The IteratorIterator class
- LimitIterator — The LimitIterator class
- MultipleIterator — The MultipleIterator class
- NoRewindIterator — The NoRewindIterator class
- ParentIterator — The ParentIterator class
- RecursiveArrayIterator — The RecursiveArrayIterator class
- RecursiveCachingIterator — The RecursiveCachingIterator class
- RecursiveCallbackFilterIterator — The RecursiveCallbackFilterIterator class
- RecursiveDirectoryIterator — The RecursiveDirectoryIterator class
- RecursiveFilterIterator — The RecursiveFilterIterator class
- RecursiveIteratorIterator — The RecursiveIteratorIterator class
- RecursiveRegexIterator — The RecursiveRegexIterator class
- RecursiveTreeIterator — The RecursiveTreeIterator class
- RegexIterator — The RegexIterator class

- SplFileInfo — The SplFileInfo class
- SplFileObject — The SplFileObject class
- SplTempFileObject — The SplTempFileObject class

- class_implements — Return the interfaces which are implemented by the given class or interface
- class_parents — Return the parent classes of the given class
- class_uses — Return the traits used by the given class
- iterator_apply — Call a function for every element in an iterator
- iterator_count — Count the elements in an iterator
- iterator_to_array — Copy the iterator into an array
- spl_autoload — Default implementation for __autoload()
- spl_autoload_call — Try all registered __autoload() functions to load the requested class
- spl_autoload_extensions — Register and return default file extensions for spl_autoload
- spl_autoload_functions — Return all registered __autoload() functions
- spl_autoload_register — Register given function as __autoload() implementation
- spl_autoload_unregister — Unregister given function as __autoload() implementation
- spl_classes — Return available SPL classes
- spl_object_hash — Return hash id for given object
- spl_object_id — Return the integer object handle for given object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/book.spl.php
