# <b>: The Bring Attention To element

Source: https://devdocs.io/html/reference/elements/b

The <b> HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the <strong> element.

## Try it

```
<p>
  The two most popular science courses offered by the school are
  <b class="term">chemistry</b> (the study of chemicals and the composition of
  substances) and <b class="term">physics</b> (the study of the nature and
  properties of matter and energy).
</p>
```

```
b {
  /* Add your styles here */
}
```

## Attributes

This element only includes the global attributes.

## Usage notes

- Use the <b> for cases like keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced (but not including any special importance).
- Do not confuse the <b> element with the <strong>, <em>, or <mark> elements. The <strong> element represents text of certain importance, <em> puts some emphasis on the text and the <mark> element represents text of certain relevance. The <b> element doesn't convey such special semantic information; use it only when no others fit.
- Similarly, do not mark titles and headings using the <b> element. For this purpose, use the h1 to h6 tags. Further, stylesheets can change the default style of these elements, with the result that they are not necessarily displayed in bold.
- It is a good practice to use the class attribute on the <b> element in order to convey additional semantic information as needed (for example <b class="lead"> for the first sentence in a paragraph). This makes it easier to manage multiple use cases of <b> if your stylistic needs change, without the need to change all of its uses in the HTML.
- Historically, the <b> element was meant to make text boldface. Styling information has been deprecated since HTML4, so the meaning of the <b> element has been changed.
- If there is no semantic purpose to using the <b> element, you should use the CSS font-weight property with the value "bold" instead in order to make text bold.

## Examples

```
<p>
  This article describes several <b class="keywords">text-level</b> elements. It
  explains their usage in an <b class="keywords">HTML</b> document.
</p>
Keywords are displayed with the default style of the
<b>element, likely in bold.</b>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Other elements conveying text-level semantics: <a>, <em>, <strong>, <small>, <cite>, <q>, <dfn>, <abbr>, <time>, <code>, <var>, <samp>, <kbd>, <sub>, <sup>, <i>, <mark>, <ruby>, <rp>, <rt>, <bdo>, <span>, <br>, <wbr>.
- Using <b> and <i> elements (W3C)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/b
