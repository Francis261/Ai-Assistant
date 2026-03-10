# The Yaf_Controller_Abstract class

Source: https://devdocs.io/php/class.yaf-controller-abstract

## Introduction

(Yaf >=1.0.0)

Yaf_Controller_Abstract is the heart of Yaf's system. MVC stands for Model-View-Controller and is a design pattern targeted at separating application logic from display logic.

Every custom controller shall inherit Yaf_Controller_Abstract.

You will find that you can not define __construct function for your custom controller, thus, Yaf_Controller_Abstract provides a magic method: Yaf_Controller_Abstract::init().

If you have defined a init() method in your custom controller, it will be called as long as the controller was instantiated.

Action may have arguments, when a request coming, if there are the same name variable in the request parameters(see Yaf_Request_Abstract::getParam()) after routed, Yaf will pass them to the action method (see Yaf_Action_Abstract::execute()).

Note:

These arguments are directly fetched without filtering, it should be carefully processed before use them.

## Class synopsis

```
protected display(string $tpl, array $parameters = ?): bool
```

```
public forward(string $action, array $paramters = ?): bool
```

```
public getInvokeArg(string $name): void
```

```
public getInvokeArgs(): void
```

```
public getModuleName(): string
```

```
public getName(): string
```

```
public getRequest(): Yaf_Request_Abstract
```

```
public getResponse(): Yaf_Response_Abstract
```

```
public getView(): Yaf_View_Interface
```

```
public getViewpath(): string
```

```
public init(): void
```

```
public initView(array $options = ?): void
```

```
public redirect(string $url): bool
```

```
protected render(string $tpl, array $parameters = ?): string
```

```
public setViewpath(string $view_directory): void
```

## Properties

You can also define an action method in a separate PHP script by using this property and Yaf_Action_Abstract.

Example #1 define action in a separate file

```
<?php
class IndexController extends Yaf_Controller_Abstract {
    protected $actions = array(
        /** now dummyAction is defined in a separate file */
        "dummy" => "actions/Dummy_action.php",
    );

    /* action method may have arguments */
    public function indexAction($name, $id) {
       /* $name and $id are unsafe raw data */
       assert($name == $this->getRequest()->getParam("name"));
       assert($id   == $this->_request->getParam("id"));
    }
}
?>
```

Example #2 Dummy_action.php

```
<?php
class DummyAction extends Yaf_Action_Abstract {
    /* an action class shall define this method as the entry point */
    public function execute() {
    }
}
?>
```

module name

controller name

current request object

current response object

view engine object

## Table of Contents

- Yaf_Controller_Abstract::__construct — Yaf_Controller_Abstract constructor
- Yaf_Controller_Abstract::display — The display purpose
- Yaf_Controller_Abstract::forward — Forward to another action
- Yaf_Controller_Abstract::getInvokeArg — The getInvokeArg purpose
- Yaf_Controller_Abstract::getInvokeArgs — The getInvokeArgs purpose
- Yaf_Controller_Abstract::getModuleName — Get module name
- Yaf_Controller_Abstract::getName — Get self name
- Yaf_Controller_Abstract::getRequest — Retrieve current request object
- Yaf_Controller_Abstract::getResponse — Retrieve current response object
- Yaf_Controller_Abstract::getView — Retrieve the view engine
- Yaf_Controller_Abstract::getViewpath — The getViewpath purpose
- Yaf_Controller_Abstract::init — Controller initializer
- Yaf_Controller_Abstract::initView — The initView purpose
- Yaf_Controller_Abstract::redirect — Redirect to a URL
- Yaf_Controller_Abstract::render — Render view template
- Yaf_Controller_Abstract::setViewpath — The setViewpath purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-controller-abstract.php
