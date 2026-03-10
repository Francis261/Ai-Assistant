# <time>: The (Date) Time element

Source: https://devdocs.io/html/reference/elements/time

The <time> HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.

It may represent one of the following:

- A time on a 24-hour clock.
- A precise date in the Gregorian calendar (with optional time and timezone information).
- A valid time duration.

## Try it

```
<p>
  The Cure will be celebrating their 40th anniversary on
  <time datetime="2018-07-07">July 7</time> in London's Hyde Park.
</p>

<p>
  The concert starts at <time datetime="20:00">20:00</time> and you'll be able
  to enjoy the band for at least <time datetime="PT2H30M">2h 30m</time>.
</p>
```

```
time {
  font-weight: bold;
}
```

## Attributes

Like all other HTML elements, this element supports the global attributes.

This attribute indicates the time and/or date of the element and must be in one of the formats described below.

## Usage notes

This element is for presenting dates and times in a machine-readable format. For example, this can help a user agent offer to add an event to a user's calendar.

This element should not be used for dates prior to the introduction of the Gregorian calendar (due to complications in calculating those dates).

The datetime value (the machine-readable value of the datetime) is the value of the element's datetime attribute, which must be in the proper format (see below). If the element does not have a datetime attribute, it must not have any element descendants, and the datetime value is the element's child text content.

### Valid datetime values

## Examples

### Basic example

#### HTML

```
<p>The concert starts at <time datetime="2018-07-07T20:00:00">20:00</time>.</p>
```

#### Result

### datetime example

#### HTML

```
<p>
  The concert took place on <time datetime="2001-05-15T19:00">May 15</time>.
</p>
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- The <data> element, allowing to signal other kind of values.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time
