# <ul>: The Unordered List element

Source: https://devdocs.io/html/reference/elements/ul

The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list.

## Try it

```
<ul>
  <li>Milk</li>
  <li>
    Cheese
    <ul>
      <li>Blue cheese</li>
      <li>Feta</li>
    </ul>
  </li>
</ul>
```

```
li {
  list-style-type: circle;
}

li li {
  list-style-type: square;
}
```

## Attributes

This element includes the global attributes.

This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute is browser-specific. Use CSS instead: to give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80%.

This attribute sets the bullet style for the list. The values defined under HTML3.2 and the transitional version of HTML 4.0/4.01 are:

- circle
- disc
- square

A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: triangle.

If not present and if no CSS list-style-type property applies to the element, the user agent selects a bullet type depending on the nesting level of the list.

Warning: Do not use this attribute, as it has been deprecated; use the CSS list-style-type property instead.

## Usage notes

- The <ul> element is for grouping a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle, or a square. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.
- The <ul> and <ol> elements may be nested as deeply as desired. Moreover, the nested lists may alternate between <ol> and <ul> without restriction.
- The <ol> and <ul> elements both represent a list of items. They differ in that, with the <ol> element, the order is meaningful. To determine which one to use, try changing the order of the list items; if the meaning is changed, the <ol> element should be used, otherwise you can use <ul>.

## Examples

### Basic example

```
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

#### Result

### Nesting a list

```
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ul>
      <li>second item first subitem</li>
      <li>
        second item second subitem
        <!-- Same for the second nested unordered list! -->
        <ul>
          <li>second item second subitem first sub-subitem</li>
          <li>second item second subitem second sub-subitem</li>
          <li>second item second subitem third sub-subitem</li>
        </ul>
      </li>
      <!-- Closing </li> tag for the li that
                  contains the third unordered list -->
      <li>second item third subitem</li>
    </ul>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

#### Result

### Ordered list inside unordered list

```
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Other list-related HTML Elements: <ol>, <li>, <menu>
- CSS properties that may be specially useful to style the <ul> element:
  - the list-style property, to choose the way the ordinal displays.
  - CSS counters, to handle complex nested lists.
  - the line-height property, to simulate the deprecated compact attribute.
  - the margin property, to control the list indentation.

- the list-style property, to choose the way the ordinal displays.
- CSS counters, to handle complex nested lists.
- the line-height property, to simulate the deprecated compact attribute.
- the margin property, to control the list indentation.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul
