# Hot Module Replacement

Source: https://devdocs.io/webpack~5/api/hot-module-replacement

If Hot Module Replacement has been enabled via the HotModuleReplacementPlugin, its interface will be exposed under the module.hot property as well as import.meta.webpackHot property. Note that only import.meta.webpackHot can be used in strict ESM.

Typically, users will check to see if the interface is accessible, then begin working with it. As an example, here's how you might accept an updated module:

```
if (module.hot) {
  module.hot.accept('./library.js', function () {
    // Do something with the updated library module...
  });
}

// or
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept('./library.js', function () {
    // Do something with the updated library module…
  });
}
```

The following methods are supported...

## Module API

### accept

Accept updates for the given dependencies and fire a callback to react to those updates, in addition, you can attach an optional error handler:

```
module.hot.accept(
  dependencies, // Either a string or an array of strings
  callback, // Function to fire when the dependencies are updated
  errorHandler // (err, {moduleId, dependencyId}) => {}
);

// or
import.meta.webpackHot.accept(
  dependencies, // Either a string or an array of strings
  callback, // Function to fire when the dependencies are updated
  errorHandler // (err, {moduleId, dependencyId}) => {}
);
```

When using ESM import all imported symbols from dependencies are automatically updated. Note: The dependency string must match exactly with the from string in the import. In some cases callback can even be omitted. Using require() in the callback doesn't make sense here.

When using CommonJS you need to update dependencies manually by using require() in the callback. Omitting the callback doesn't make sense here.

#### errorHandler for accept

(err, {moduleId, dependencyId}) => {}

- err: the error thrown by the callback in second argument or during dependency execution when using ESM dependencies.
- moduleId: the current module id.
- dependencyId: the module id of the (first) changed dependency.

### accept (self)

Accept updates for itself.

```
module.hot.accept(
  errorHandler // Function to handle errors when evaluating the new version
);

// or
import.meta.webpackHot.accept(
  errorHandler // Function to handle errors when evaluating the new version
);
```

When this module or dependencies are updated, this module can be disposed and re-evaluated without informing parents. This makes sense if this module has no exports (or exports are updated in another way).

The errorHandler is fired when the evaluation of this module (or dependencies) has thrown an exception.

#### errorHandler for self accept

(err, {moduleId, module}) => {}

- err: the error when evaluating the new version.
- moduleId: the current module id.
- module: the current module instance.
  - module.hot: allow to use the HMR API of the errored module instance. A common scenario is to self accept it again. It also makes sense to add a dispose handler to pass data along. Note that the errored module might be already partially executed, so make sure to not get into a inconsistent state. You can use module.hot.data to store partial state.
  - module.exports: can be overridden, but be careful since property names might be mangled in production mode.

- module.hot: allow to use the HMR API of the errored module instance. A common scenario is to self accept it again. It also makes sense to add a dispose handler to pass data along. Note that the errored module might be already partially executed, so make sure to not get into a inconsistent state. You can use module.hot.data to store partial state.
- module.exports: can be overridden, but be careful since property names might be mangled in production mode.

### decline

Reject updates for the given dependencies forcing the update to fail with a 'decline' code.

```
module.hot.decline(
  dependencies // Either a string or an array of strings
);

// or
import.meta.webpackHot.decline(
  dependencies // Either a string or an array of strings
);
```

Flag a dependency as not-update-able. This makes sense when changing exports of this dependency can't be handled or handling is not implemented yet. Depending on your HMR management code, an update to these dependencies (or unaccepted dependencies of it) usually causes a full-reload of the page.

### decline (self)

Reject updates for itself.

```
module.hot.decline();

// or
import.meta.webpackHot.decline();
```

Flag this module as not-update-able. This makes sense when this module has irreversible side-effects, or HMR handling is not implemented for this module yet. Depending on your HMR management code, an update to this module (or unaccepted dependencies) usually causes a full-reload of the page.

### dispose (or addDisposeHandler)

Add a handler which is executed when the current module code is replaced. This should be used to remove any persistent resource you have claimed or created. If you want to transfer state to the updated module, add it to the given data parameter. This object will be available at module.hot.data after the update.

```
module.hot.dispose((data) => {
  // Clean up and pass data to the updated module...
});

// or
import.meta.webpackHot.dispose((data) => {
  // Clean up and pass data to the updated module...
});
```

### invalidate

Calling this method will invalidate the current module, which disposes and recreates it when the HMR update is applied. This bubbles like a normal update of this module. invalidate can't be self-accepted by this module.

When called during the idle state, a new HMR update will be created containing this module. HMR will enter the ready state.

When called during the ready or prepare state, this module will be added to the current HMR update.

When called during the check state, this module will be added to the update when an update is available. If no update is available it will create a new update. HMR will enter the ready state.

When called during the dispose or apply state, HMR will pick it up after getting out of those states.

#### Use Cases

Conditional Accepting

A module can accept a dependency, but can call invalidate when the change of the dependency is not handleable:

```
import { x, y } from './dep';
import { processX, processY } from 'anotherDep';

const oldY = y;

processX(x);
export default processY(y);

module.hot.accept('./dep', () => {
  if (y !== oldY) {
    // This can't be handled, bubble to parent
    module.hot.invalidate();
    return;
  }
  // This can be handled
  processX(x);
});
```

Conditional self accept

A module can self-accept itself, but can invalidate itself when the change is not handleable:

```
const VALUE = 'constant';

export default VALUE;

if (
  module.hot.data &&
  module.hot.data.value &&
  module.hot.data.value !== VALUE
) {
  module.hot.invalidate();
} else {
  module.hot.dispose((data) => {
    data.value = VALUE;
  });
  module.hot.accept();
}
```

Triggering custom HMR updates

```
const moduleId = chooseAModule();
const code = __webpack_modules__[moduleId].toString();
__webpack_modules__[moduleId] = eval(`(${makeChanges(code)})`);
if (require.cache[moduleId]) {
  require.cache[moduleId].hot.invalidate();
  module.hot.apply();
}
```

### removeDisposeHandler

Remove the handler added via dispose or addDisposeHandler.

```
module.hot.removeDisposeHandler(callback);

// or
import.meta.webpackHot.removeDisposeHandler(callback);
```

## Management API

### status

Retrieve the current status of the hot module replacement process.

```
module.hot.status(); // Will return one of the following strings...

// or
import.meta.webpackHot.status();
```

### check

Test all loaded modules for updates and, if updates exist, apply them.

```
module.hot
  .check(autoApply)
  .then((outdatedModules) => {
    // outdated modules...
  })
  .catch((error) => {
    // catch errors
  });

// or
import.meta.webpackHot
  .check(autoApply)
  .then((outdatedModules) => {
    // outdated modules...
  })
  .catch((error) => {
    // catch errors
  });
```

The autoApply parameter can either be a boolean or options to pass to the apply method when called.

### apply

Continue the update process (as long as module.hot.status() === 'ready').

```
module.hot
  .apply(options)
  .then((outdatedModules) => {
    // outdated modules...
  })
  .catch((error) => {
    // catch errors
  });

// or
import.meta.webpackHot
  .apply(options)
  .then((outdatedModules) => {
    // outdated modules...
  })
  .catch((error) => {
    // catch errors
  });
```

The optional options object can include the following properties:

- ignoreUnaccepted (boolean): Ignore changes made to unaccepted modules.
- ignoreDeclined (boolean): Ignore changes made to declined modules.
- ignoreErrored (boolean): Ignore errors thrown in accept handlers, error handlers and while reevaluating module.
- onDeclined (function(info)): Notifier for declined modules
- onUnaccepted (function(info)): Notifier for unaccepted modules
- onAccepted (function(info)): Notifier for accepted modules
- onDisposed (function(info)): Notifier for disposed modules
- onErrored (function(info)): Notifier for errors

The info parameter will be an object containing some of the following values:

```
{
  type: 'self-declined' | 'declined' |
        'unaccepted' | 'accepted' |
        'disposed' | 'accept-errored' |
        'self-accept-errored' | 'self-accept-error-handler-errored',
  moduleId: 4, // The module in question.
  dependencyId: 3, // For errors: the module id owning the accept handler.
  chain: [1, 2, 3, 4], // For declined/accepted/unaccepted: the chain from where the update was propagated.
  parentId: 5, // For declined: the module id of the declining parent
  outdatedModules: [1, 2, 3, 4], // For accepted: the modules that are outdated and will be disposed
  outdatedDependencies: { // For accepted: The location of accept handlers that will handle the update
    5: [4]
  },
  error: new Error(...), // For errors: the thrown error
  originalError: new Error(...) // For self-accept-error-handler-errored:
                                // the error thrown by the module before the error handler tried to handle it.
}
```

### addStatusHandler

Register a function to listen for changes in status.

```
module.hot.addStatusHandler((status) => {
  // React to the current status...
});

// or
import.meta.webpackHot.addStatusHandler((status) => {
  // React to the current status...
});
```

Bear in mind that when the status handler returns a Promise, the HMR system will wait for the Promise to resolve before continuing.

### removeStatusHandler

Remove a registered status handler.

```
module.hot.removeStatusHandler(callback);

// or
import.meta.webpackHot.removeStatusHandler(callback);
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/api/hot-module-replacement
