# FinalizationRegistry.prototype.unregister()

Source: https://devdocs.io/javascript/global_objects/finalizationregistry/unregister

The unregister() method of FinalizationRegistry instances unregisters a target value from this FinalizationRegistry.

## Syntax

```
unregister(unregisterToken)
```

### Parameters

The token used with the register() method when registering the target value. Multiple cells registered with the same unregisterToken will be unregistered together.

### Return value

A boolean value that is true if at least one cell was unregistered and false if no cell was unregistered.

### Exceptions

Thrown if unregisterToken is not an object or a non-registered symbol.

## Description

When a target value has been reclaimed, it is no longer registered in the registry. There is no need to call unregister in your cleanup callback. Only call unregister if you haven't received a cleanup callback and no longer need to receive one.

## Examples

### Using unregister

This example shows registering a target object using that same object as the unregister token, then later unregistering it via unregister:

```
class Thingy {
  static #cleanup = (label) => {
    //               ^^^^^−−−−− held value
    console.error(
      `The "release" method was never called for the object with the label "${label}"`,
    );
  };
  #registry = new FinalizationRegistry(Thingy.#cleanup);

  /**
   * Constructs a `Thingy` instance.
   * Be sure to call `release` when you're done with it.
   *
   * @param label A label for the `Thingy`.
   */
  constructor(label) {
    //                            vvvvv−−−−− held value
    this.#registry.register(this, label, this);
    //          target −−−−−^^^^         ^^^^−−−−− unregister token
  }

  /**
   * Releases resources held by this `Thingy` instance.
   */
  release() {
    this.#registry.unregister(this);
    //                        ^^^^−−−−− unregister token
  }
}
```

This example shows registering a target object using a different object as its unregister token:

```
class Thingy {
  static #cleanup = (file) => {
    //               ^^^^−−−−− held value
    console.error(
      `The "release" method was never called for the "Thingy" for the file "${file.name}"`,
    );
  };
  #registry = new FinalizationRegistry(Thingy.#cleanup);
  #file;

  /**
   * Constructs a `Thingy` instance for the given file.
   * Be sure to call `release` when you're done with it.
   *
   * @param filename The name of the file.
   */
  constructor(filename) {
    this.#file = File.open(filename);
    //                            vvvvv−−−−− held value
    this.#registry.register(this, label, this.#file);
    //          target −−−−−^^^^         ^^^^^^^^^^−−−−− unregister token
  }

  /**
   * Releases resources held by this `Thingy` instance.
   */
  release() {
    if (this.#file) {
      this.#registry.unregister(this.#file);
      //                        ^^^^^^^^^^−−−−− unregister token
      File.close(this.#file);
      this.#file = null;
    }
  }
}
```

## Specifications

## Browser compatibility

## See also

- FinalizationRegistry

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
