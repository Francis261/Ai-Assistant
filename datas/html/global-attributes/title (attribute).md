# HTML title global attribute

Source: https://devdocs.io/html/reference/global_attributes/title

The title global attribute contains text representing advisory information related to the element it belongs to.

## Try it

```
<p>
  Use the <code>title</code> attribute on an <code>iframe</code> to clearly
  identify the content of the <code>iframe</code> to screen readers.
</p>

<iframe
  title="Wikipedia page for the HTML language"
  src="https://en.m.wikipedia.org/wiki/HTML"></iframe>
<iframe
  title="Wikipedia page for the CSS language"
  src="https://en.m.wikipedia.org/wiki/CSS"></iframe>
```

```
iframe {
  height: 200px;
  margin-bottom: 24px;
  width: 100%;
}
```

The main use of the title attribute is to label <iframe> elements for assistive technology.

The title attribute may also be used to label controls in data tables.

The title attribute, when added to <link rel="stylesheet">, creates an alternate stylesheet. When defining an alternative style sheet with <link rel="alternate"> the attribute is required and must be set to a non-empty string.

If included on the <abbr> opening tag, the title must be a full expansion of the abbreviation or acronym. Instead of using title, when possible, provide an expansion of the abbreviation or acronym in plain text on first use, using the <abbr> to mark up the abbreviation. This enables all users know what name or term the abbreviation or acronym shortens while providing a hint to user agents on how to announce the content.

While title can be used to provide a programmatically associated label for an <input> element, this is not good practice. Use a <label> instead.

## Multiline titles

The title attribute may contain several lines. Each U+000A LINE FEED (LF) character represents a line break. Some caution must be taken, as this means the following renders across two lines:

### HTML

```
<p>
  Newlines in <code>title</code> should be taken into account. This
  <span
    title="This is a
multiline title">
    example span
  </span>
  has a title a attribute with a newline.
</p>
<hr />
<pre id="output"></pre>
```

### JavaScript

We can query the title attribute and display it in the empty <pre> element as follows:

```
const span = document.querySelector("span");
const output = document.querySelector("#output");
output.textContent = span.title;
```

### Result

## Title attribute inheritance

If an element has no title attribute, then it inherits it from its parent node, which in turn may inherit it from its parent, and so on.

If this attribute is set to the empty string, it means its ancestors' titles are irrelevant and shouldn't be used in the tooltip for this element.

### HTML

```
<div title="CoolTip">
  <p>Hovering here will show "CoolTip".</p>
  <p title="">Hovering here will show nothing.</p>
</div>
```

### Result

## Accessibility concerns

Use of the title attribute is highly problematic for:

- People using touch-only devices
- People navigating with keyboards
- People navigating with assistive technology such as screen readers or magnifiers
- People experiencing fine motor control impairment
- People with cognitive concerns

This is due to inconsistent browser support, compounded by the additional assistive technology parsing of the browser-rendered page. If a tooltip effect is desired, it is better to use a more accessible technique that can be accessed with the above browsing methods.

- 3.2.5.1. The title attribute | W3C HTML 5.2: 3. Semantics, structure, and APIs of HTML documents
- Using the HTML title attribute – updated | The Paciello Group
- Tooltips & Toggletips - Inclusive Components
- The Trials and Tribulations of the Title Attribute - 24 Accessibility

## Specifications

## Browser compatibility

## See also

- All global attributes.
- HTMLElement.title that reflects this attribute.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title
