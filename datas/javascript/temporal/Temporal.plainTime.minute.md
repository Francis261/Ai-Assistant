# Temporal.PlainTime.prototype.minute

Source: https://devdocs.io/javascript/global_objects/temporal/plaintime/minute

The minute accessor property of Temporal.PlainTime instances returns an integer from 0 to 59 representing the minute component of this time.

The set accessor of minute is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainTime object with the desired new value.

## Examples

### Using minute

```
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.minute); // 34
```

### Changing minute

```
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ minute: 58 });
console.log(newTime.toString()); // 12:58:56
```

You can also use add() or subtract() to move a certain number of minutes from the current time.

```
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ minutes: 24 });
console.log(newTime.toString()); // 12:58:56
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainTime
- Temporal.PlainTime.prototype.with()
- Temporal.PlainTime.prototype.add()
- Temporal.PlainTime.prototype.subtract()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/minute
