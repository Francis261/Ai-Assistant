# Attributes overview

Source: https://devdocs.io/php/language.attributes.overview

## Attributes overview

(PHP 8)

PHP attributes provide structured, machine-readable metadata for classes, methods, functions, parameters, properties, and constants. They can be inspected at runtime via the Reflection API, enabling dynamic behavior without modifying code. Attributes provide a declarative way to annotate code with metadata.

Attributes enable the decoupling of a feature's implementation from its usage. While interfaces define structure by enforcing methods, attributes provide metadata across multiple elements, including methods, functions, properties, and constants. Unlike interfaces, which enforce method implementations, attributes annotate code without altering its structure.

Attributes can complement or replace optional interface methods by providing metadata instead of enforced structure. Consider an ActionHandler interface that represents an operation in an application. Some implementations may require a setup step while others do not. Instead of forcing all classes implementing ActionHandler to define a setUp() method, an attribute can indicate setup requirements. This approach increases flexibility, allowing attributes to be applied multiple times when necessary.

Example #1 Implementing optional methods of an interface with Attributes

```
<?php
interface ActionHandler
{
    public function execute();
}

#[Attribute]
class SetUp {}

class CopyFile implements ActionHandler
{
    public string $fileName;
    public string $targetDirectory;

    #[SetUp]
    public function fileExists()
    {
        if (!file_exists($this->fileName)) {
            throw new RuntimeException("File does not exist");
        }
    }

    #[SetUp]
    public function targetDirectoryExists()
    {
        if (!file_exists($this->targetDirectory)) {
            mkdir($this->targetDirectory);
        } elseif (!is_dir($this->targetDirectory)) {
            throw new RuntimeException("Target directory $this->targetDirectory is not a directory");
        }
    }

    public function execute()
    {
        copy($this->fileName, $this->targetDirectory . '/' . basename($this->fileName));
    }
}

function executeAction(ActionHandler $actionHandler)
{
    $reflection = new ReflectionObject($actionHandler);

    foreach ($reflection->getMethods() as $method) {
        $attributes = $method->getAttributes(SetUp::class);

        if (count($attributes) > 0) {
            $methodName = $method->getName();

            $actionHandler->$methodName();
        }
    }

    $actionHandler->execute();
}

$copyAction = new CopyFile();
$copyAction->fileName = "/tmp/foo.jpg";
$copyAction->targetDirectory = "/home/user";

executeAction($copyAction);
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.attributes.overview.php
