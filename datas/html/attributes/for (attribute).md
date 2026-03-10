# HTML attribute: for

Source: https://devdocs.io/html/reference/attributes/for

The for attribute is an allowed attribute for <label> and <output>. When used on a <label> element it indicates the form element that this label describes. When used on an <output> element it allows for an explicit relationship between the elements that represent values which are used in the output.

## Try it

```
<p>
  <label>First Name (no "for" attribute):</label>
  <input id="first" type="text" value="Jane" />
</p>
<p>
  <label for="last">Last Name (w/ "for" attribute):</label>
  <input id="last" type="text" value="Doe" />
</p>
<p id="result">
  <strong id="result-label">Full Name:</strong>
  <output for="first last" aria-labelledby="result-label" id="output"></output>
</p>
```

```
label[for="paragraph"] {
  color: rebeccapurple;
}

#result {
  text-align: center;
}

#result-label {
  font-size: 16pt;
}

#result-label,
#output {
  display: block;
}
```

```
const firstNameEl = document.getElementById("first");
const lastNameEl = document.getElementById("last");
const outputEl = document.getElementById("output");

function updateOutput() {
  const value = `${firstNameEl.value} ${lastNameEl.value}`;
  outputEl.innerText = value;
}

updateOutput();
firstNameEl.addEventListener("input", updateOutput);
lastNameEl.addEventListener("input", updateOutput);
```

## Usage notes

When used as an attribute of <label>, the for attribute has a value which is the id of the form element it relates to.

```
<label for="username">Your name</label> <input type="text" id="username" />
```

When used as an attribute of <output>, the for attribute has a value which is a space separated list of the id values of the elements which are used to create the output.

```
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## Examples

See examples of usage on the element pages for <label> and <output>.

## Specifications

## Browser compatibility

### html.elements.label.for

### html.elements.output.for

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/for
