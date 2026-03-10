# <dl>: The Description List element

Source: https://devdocs.io/html/reference/elements/dl

The <dl> HTML element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).

## Try it

```
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

## Attributes

This element also accepts the global attributes.

This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute is browser-specific. Use CSS instead: to give a similar effect as the compact attribute, the CSS property line-height can be used with a value of 80%.

## Accessibility

Each screen reader exposes <dl> content differently, including total count, terms/definitions context, and navigation methods. These differences are not necessarily bugs. As of iOS 14, VoiceOver will announce that <dl> content is a list when navigating with the virtual cursor (not via the read-all command). VoiceOver does not support list navigation commands with <dl>. Be careful applying ARIA term and definition roles to <dl> constructs as VoiceOver (macOS and iOS) will adjust how they are announced.

- VoiceOver on iOS 14 Supports Description Lists
- Brief Note on Description List Support

## Examples

### Single term and description

```
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### Result

### Multiple terms, single description

```
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### Result

### Single term, multiple descriptions

```
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
  <dd>
    The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox, is a
    mostly herbivorous mammal, slightly larger than a domestic cat (60 cm long).
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### Result

### Multiple terms and descriptions

It is also possible to define multiple terms with multiple corresponding descriptions, by combining the examples above.

### Metadata

Description lists are useful for displaying metadata as a list of key-value pairs.

```
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

#### Result

Tip: It can be handy to define a key-value separator in the CSS, such as:

```
dt::after {
  content: ": ";
}
```

### Wrapping name-value groups in div elements

HTML allows wrapping each name-value group in a <dl> element in a <div> element. This can be useful when using microdata, or when global attributes apply to a whole group, or for styling purposes.

```
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>
```

#### Result

## Notes

Do not use this element (nor <ul> elements) to merely create indentation on a page. Although it works, this is a bad practice and obscures the meaning of description lists.

To change the indentation of a description term, use the CSS margin property.

## Technical summary

Either: Zero or more groups each consisting of one or more <dt> elements followed by one or more <dd> elements, optionally intermixed with <script> and <template> elements.Or: (in WHATWG HTML, W3C HTML 5.2 and later) One or more <div> elements, optionally intermixed with <script> and <template> elements.

## Specifications

## Browser compatibility

## See also

- <dt>
- <dd>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl
