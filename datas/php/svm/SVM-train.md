# SVM::train

Source: https://devdocs.io/php/svm.train

(PECL svm >= 0.1.0)

SVM::train — Create a SVMModel based on training data

### Description

```
public svm::train(array $problem, array $weights = ?): SVMModel
```

Train a support vector machine based on the supplied training data.

### Parameters

The problem can be provided in three different ways. An array, where the data should start with the class label (usually 1 or -1) then followed by a sparse data set of dimension => data pairs. A URL to a file containing a SVM Light formatted problem, with the each line being a new training example, the start of each line containing the class (1, -1) then a series of tab separated data values shows as key:value. A opened stream pointing to a data source formatted as in the file above.

Weights are an optional set of weighting parameters for the different classes, to help account for unbalanced training sets. For example, if the classes were 1 and -1, and -1 had significantly more example than one, the weight for -1 could be 0.5. Weights should be in the range 0-1.

### Return Values

Returns an SVMModel that can be used to classify previously unseen data. Throws SVMException on error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/svm.train.php
