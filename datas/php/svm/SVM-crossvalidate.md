# SVM::crossvalidate

Source: https://devdocs.io/php/svm.crossvalidate

(PECL svm >= 0.1.0)

SVM::crossvalidate — Test training params on subsets of the training data

### Description

```
public svm::crossvalidate(array $problem, int $number_of_folds): float
```

Crossvalidate can be used to test the effectiveness of the current parameter set on a subset of the training data. Given a problem set and a n "folds", it separates the problem set into n subsets, and the repeatedly trains on one subset and tests on another. While the accuracy will generally be lower than a SVM trained on the enter data set, the accuracy score returned should be relatively useful, so it can be used to test different training parameters.

### Parameters

The problem data. This can either be in the form of an array, the URL of an SVMLight formatted file, or a stream to an opened SVMLight formatted datasource.

The number of sets the data should be divided into and cross tested. A higher number means smaller training sets and less reliability. 5 is a good number to start with.

### Return Values

The correct percentage, expressed as a floating point number from 0-1. In the case of NU_SVC or EPSILON_SVR kernels the mean squared error will returned instead.

### See Also

- SVM::train() - Create a SVMModel based on training data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/svm.crossvalidate.php
