# <menu>: The Menu element

Source: https://devdocs.io/html/reference/elements/menu

The <menu> HTML element is described in the HTML specification as a semantic alternative to <ul>, but treated by browsers (and exposed through the accessibility tree) as no different than <ul>. It represents an unordered list of items (which are represented by <li> elements).

## Try it

```
<div class="news">
  <a href="#">NASA’s Webb Delivers Deepest Infrared Image of Universe Yet</a>
  <menu>
    <li><button id="save">Save for later</button></li>
    <li><button id="share">Share this news</button></li>
  </menu>
</div>
```

```
.news {
  background-color: bisque;
  padding: 1em;
  border: solid thin black;
}

menu {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
  gap: 1em;
}
```

## Attributes

This element also accepts the global attributes.

This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute is browser-specific. Use CSS instead: to give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80%.

## Usage notes

The <menu> and <ul> elements both represent an unordered list of items. The key difference is that <ul> primarily contains items for display, while <menu> represents a toolbar containing commands that the user can perform or activate.

Note: In early versions of the HTML specification, the <menu> element had an additional use case as a context menu. This functionality is considered obsolete and is not in the specification.

## Examples

### Toolbar

In this example, a <menu> is used to create a toolbar for an editing application.

#### HTML

```
<menu>
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</menu>
```

Note that this is functionally no different from:

```
<ul>
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</ul>
```

#### CSS

```
menu,
ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li {
  flex-grow: 1;
}

button {
  width: 100%;
}
```

#### Result

## Technical summary

Flow content. If the element's children include at least one <li> element: Palpable content.

Zero or more occurrences of <li>, <script>, and <template>.

## Specifications

## Browser compatibility

## See also

- Other list-related HTML Elements: <ol>, <ul>, and <li>.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/menu
