# class expression

Source: https://devdocs.io/javascript/operators/class

The class keyword can be used to define a class inside an expression.

You can also define classes using the class declaration.

## Try it

```
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};

console.log(new Rectangle(5, 8).area());
// Expected output: 40
```

## Syntax

```
class {
  // class body
}
class name {
  // class body
}
```

Note: An expression statement cannot begin with the keyword class to avoid ambiguity with a class declaration. The class keyword only begins an expression when it appears in a context that cannot accept statements.

## Description

A class expression is very similar to, and has almost the same syntax as, a class declaration. As with class declarations, the body of a class expression is executed in strict mode. The main difference between a class expression and a class declaration is the class name, which can be omitted in class expressions to create anonymous classes. Class expressions allow you to redefine classes, while redeclaring a class using class declarations throws a SyntaxError. See also the chapter about classes for more information.

## Examples

### A basic class expression

This is just an anonymous class expression which you can refer to using the variable Foo.

```
const Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

const instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // "Foo"
```

### Named class expressions

If you want to refer to the current class inside the class body, you can create a named class expression. The name is only visible within the scope of the class expression itself.

```
const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
const bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"
```

## Specifications

## Browser compatibility

## See also

- class
- Classes

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class
