# Using HTML comments <!-- … -->

Source: https://devdocs.io/html/guides/comments

An HTML comment is used to add explanatory notes to the markup or to prevent the browser from interpreting specific parts of the document.

Comments start with the string <!-- and end with the string -->, generally with text in between. This text cannot start with the string > or ->, cannot contain the strings --> or --!>, nor end with the string <!-, though <! is allowed.

The browser ignores comments as it renders the code. In other words, they are not visible on the page - just in the code. HTML comments are a way for you to write helpful notes about your code or logic.

The above is true for XML comments as well. In addition, in XML, such as in SVG or MathML markup, a comment cannot contain the character sequence --.

Comments can be used on a single line, or span multiple lines. They can be used in the following places:

- Before and after the Doctype
- Before and after the <html> element
- As the content of most elements except: <script>, <style>, <title>, <textarea>, because these elements interpret their content as raw text

Note: While <script> elements should not have HTML comments and should use JavaScript comments instead, there was a legacy practice to enclose the whole script content in an HTML comment so ancient browsers that don't support JavaScript don't render it as text. This is now a legacy feature of JavaScript itself and you should not rely on it.

## Syntax

```
<!-- Comment -->
```

## Examples

```
<!-- A one-line comment -->

<!--
A comment
that stretches
over several
lines
-->

<!-- The comment below disables
   the HTML contained within -->
<!--
<p>
   This content will not be rendered.
</p>
-->
```

## Notes

HTML comments are only permitted as content. You cannot use it within a tag, such as before an HTML attribute.

As with most programming languages that use the <!-- --> comment syntax, comments cannot be nested. In other words, the first instance of --> that follows an instance of <!-- closes the comment.

While comments do start with a < and end in a >, a comment is not an HTML element.

## Specifications

## See also

- Comments in JavaScript
- Comments in CSS
- Comment API (Comment inherits from Node)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Comments
