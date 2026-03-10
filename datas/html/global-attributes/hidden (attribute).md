# HTML hidden global attribute

Source: https://devdocs.io/html/reference/global_attributes/hidden

The hidden global attribute is an enumerated attribute indicating that the browser should not render the contents of the element. For example, it can be used to hide elements of the page that can't be used until the login process has been completed.

## Try it

```
<p>
  This content should be read right now, as it is important. I am so glad you
  are able to find it!
</p>

<p hidden>
  This content is not relevant to this page right now, so should not be seen.
  Nothing to see here. Nada.
</p>
```

```
p {
  background: #ffe8d4;
  border: 1px solid #f69d3c;
  padding: 5px;
  border-radius: 5px;
}
```

## Description

The hidden attribute indicates that the content of an element should not be presented to the user. The attribute takes any one of the following values:

- the keyword hidden
- the keyword until-found
- an empty string or no value

Invalid hidden attribute values also place the element in the hidden state. Therefore, all the following elements are in the hidden state:

```
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
<span hidden="bananas">I'm equally as hidden!</span>
```

The keyword until-found sets the element to the hidden until found state:

```
<span hidden="until-found">I'm hidden until found</span>
```

### The hidden state

The hidden state indicates that the element is not currently relevant to the page, or that it is being used to declare content for reuse by other parts of the page and should not be directly presented to the user. The browser will not render elements that are in the hidden state.

Web browsers may implement the hidden state using display: none, in which case the element will not participate in page layout. Additionally, changing the value of the CSS display property on a hidden element will override the hidden state. For instance, elements styled display: block will be displayed despite the hidden attribute's presence.

### The hidden until found state

In the hidden until found state, the element is hidden but its content will be accessible to the browser's "Find in page" feature or to fragment navigation. When these features cause a scroll to an element in a hidden until found subtree, the browser will:

1. Fire a beforematch event on the hidden element
2. Remove the hidden attribute from the element
3. Scroll to the element

This lets you collapse a section of content while still allowing users to find it through search or navigation.

Browsers typically implement hidden until found using content-visibility: hidden. This means that, unlike elements in the hidden state, elements in the hidden until-found state generate boxes, and:

- they participate in page layout
- their margin, borders, padding, and background are rendered

Also, the element needs to be affected by layout containment in order to be revealed. If the element in the hidden until found state has a display value of none, contents, or inline, then the element will not be revealed by "Find in page" or fragment navigation.

## Usage notes

The hidden attribute must not be used to hide content just from one presentation. If something is marked hidden, it is hidden from all presentations, including, for instance, screen readers.

Hidden elements shouldn't be linked from visible elements unless using hidden="until-found". For example, it would be incorrect to use the href attribute to link to a section with the hidden attribute. If the content is not applicable or relevant, it shouldn't be linked.

It is fine, however, to use the ARIA aria-describedby attribute to refer to hidden descriptions. While hiding the descriptions implies that they're not useful on their own, they can provide helpful context when referenced in this way.

Similarly, a canvas element with the hidden attribute could be used by a scripted graphics engine as an off-screen buffer, and a form control could refer to a hidden form element using its form attribute.

Finally, note that elements that are descendants of a hidden element are still active, which means that script elements can still execute, and form elements can still submit:

```
<div hidden>
  <script>
    console.warn("Boo! I'm hidden *and* running!");
  </script>
</div>
```

## Examples

### Using the hidden attribute

In this example, we have three <div> elements. The first and the third are not hidden, while the second has a hidden attribute. Note that the hidden element has no generated box.

```
<div>I'm not hidden</div>
<div hidden>I'm hiding!</div>
<div>I'm not hidden, either</div>
```

### Using the until-found value

In this example, we have three <div> elements. The first and the third are visible, while the second has the hidden="until-found" and id="until-found-box" attributes. The element with a until-found-box id has a dotted red border and a gray background.

We also have a link that targets the "until-found-box" fragment and JavaScript that listens for the beforematch event firing on that hidden element. The event handler changes the text content of the box to illustrate an action that can occur when the hidden until found state is about to be removed.

#### HTML

```
<a href="#until-found-box">Go to hidden content</a>

<div>I'm not hidden</div>
<div id="until-found-box" hidden="until-found">Hidden until found</div>
<div>I'm hidden</div>
```

#### CSS

```
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}

div#until-found-box {
  color: red;
  border: 5px dotted red;
  background-color: lightgray;
}
```

#### JavaScript

```
const untilFound = document.querySelector("#until-found-box");
untilFound.addEventListener(
  "beforematch",
  () => (untilFound.textContent = "I've been revealed!"),
);
```

#### Result

Clicking the "Go to hidden content" link navigates to the hidden until found element. The beforematch event fires, the text content is updated, and the element becomes visible. Note that although the content of the element is hidden, the element still has a generated box, occupying space in the layout and with background and borders rendered.

To run the example again, click "Reset".

## Specifications

## Browser compatibility

## See also

- HTMLElement.hidden
- All global attributes
- The aria-hidden attribute
- The beforematch event

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/hidden
