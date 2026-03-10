# Content categories

Source: https://devdocs.io/html/guides/content_categories

Most HTML elements are a member of one or more content categories — these categories group elements that share common characteristics. This is a loose grouping (it doesn't actually create a relationship among elements of these categories), but they help define and describe the categories' shared behavior and their associated rules. It's possible for elements (such as <track>) to not be a member of any of these categories.

The content categories are used to define the content model of elements, in other words what each element can take as descendants. For example, a <p> element can only contain phrasing content, while a <div> element can contain flow content.

There are seven main content categories, which can be summarized with the Venn diagram below:

Note: A more detailed discussion of these content categories and their comparative functionalities is beyond the scope of this article; for that, you may wish to read the relevant portions of the HTML specification.

## Metadata content

Elements belonging to the metadata content category modify the presentation or the behavior of the rest of the document, set up links to other documents, or convey other out-of-band information. Everything in the <head>, including the <title>, <link>, <script>, <style>, and the lesser used <base>, is metadata content. There is a <meta> element for metadata that cannot be represented by these other elements.

The metadata elements are:

- <base>
- <link>
- <meta>
- <noscript>
- <script>
- <style>
- <template>
- <title>

Some of these elements belong to more than one content category. For example, <script> is a member of the metadata, flow, and phrasing content categories, and is a script-supporting element; <script> can be used where metadata content, phrasing content, or script-supporting elements are expected.

## Flow content

Flow content is a broad category that encompasses most elements that can go inside the <body> element, including heading elements, sectioning elements, phrasing elements, embedding elements, interactive elements, and form-related elements. It also includes text nodes (but not those that only consist of white space characters).

The flow elements are:

- <a>
- <abbr>
- <address>
- <article>
- <aside>
- <audio>
- <b>
- <bdi>
- <bdo>
- <blockquote>
- <br>
- <button>
- <canvas>
- <cite>
- <code>
- <data>
- <datalist>
- <del>
- <details>
- <dfn>
- <dialog>
- <div>
- <dl>
- <em>
- <embed>
- <fieldset>
- <figure>
- <footer>
- <form>
- <h1>-<h6>
- <header>
- <hgroup>
- <hr>
- <i>
- <iframe>
- <img>
- <input>
- <ins>
- <kbd>
- <label>
- <main>
- <map>
- <mark>
- <math>
- <menu>
- <meter>
- <nav>
- <noscript>
- <object>
- <ol>
- <output>
- <p>
- <picture>
- <pre>
- <progress>
- <q>
- <ruby>
- <s>
- <samp>
- <script>
- <search>
- <section>
- <select>
- <slot>
- <small>
- <span>
- <strong>
- <sub>
- <sup>
- <svg>
- <table>
- <template>
- <textarea>
- <time>
- <u>
- <ul>
- <var>
- <video>
- <wbr>
- Autonomous custom elements
- Plain text

A few other elements belong to this category, but only if a specific condition is fulfilled:

- <area>, if it is a descendant of a <map> element
- <link>, if the itemprop attribute is present
- <meta>, if the itemprop attribute is present

## Sectioning content

Sectioning content, a subset of flow content, creates a section in the current outline defining the scope of <header> and <footer> elements.

The sectioning elements are:

- <article>
- <aside>
- <nav>
- <section>

## Heading content

Heading content, a subset of flow content, defines the title of a section. This definition applies both to sections marked by an explicit sectioning content elements and to those implicitly defined by the heading content itself.

The heading elements are:

- <h1>-<h6>
- <hgroup>

Note: Though likely to contain heading content, the <header> is not heading content itself.

## Phrasing content

Phrasing content, a subset of flow content, refers to the text and the markup within a document. Sequences of phrasing content make up paragraphs.

The phrasing elements are:

- <abbr>
- <audio>
- <b>
- <bdi>
- <bdo>
- <br>
- <button>
- <canvas>
- <cite>
- <code>
- <data>
- <datalist>
- <dfn>
- <em>
- <embed>
- <i>
- <iframe>
- <img>
- <input>
- <kbd>
- <label>
- <mark>
- <math>
- <meter>
- <noscript>
- <object>
- <output>
- <picture>
- <progress>
- <q>
- <ruby>
- <s>
- <samp>
- <script>
- <select>
- <slot>
- <small>
- <span>
- <strong>
- <sub>
- <sup>
- <svg>
- <template>
- <textarea>
- <time>
- <u>
- <var>
- <video>
- <wbr>
- Autonomous custom elements
- Plain text

A few other elements belong to this category, but only if a specific condition is fulfilled:

- <a>, if it contains only phrasing content
- <area>, if it is a descendant of a <map> element
- <del>, if it contains only phrasing content
- <ins>, if it contains only phrasing content
- <link>, if the itemprop attribute is present
- <map>, if it contains only phrasing content
- <meta>, if the itemprop attribute is present

## Embedded content

Embedded content, a subset of flow content, imports another resource or inserts content from another markup language or namespace into the document.

The embedded content elements are:

- <audio>
- <canvas>
- <embed>
- <iframe>
- <img>
- <math>
- <object>
- <picture>
- <svg>
- <video>

## Interactive content

Interactive content, a subset of flow content, includes elements that are specifically designed for user interaction.

The interactive content elements are:

- <button>
- <details>
- <embed>
- <iframe>
- <label>
- <select>
- <textarea>

Some elements belong to this category only under specific conditions:

- <a>, if the href attribute is present
- <audio>, if the controls attribute is present
- <img>, if the usemap attribute is present
- <input>, if the type attribute is not in the hidden state
- <object>, if the usemap attribute is present
- <video>, if the controls attribute is present

## Palpable content

Palpable content is content that is neither empty nor hidden; it is content that is rendered and substantive. Palpable content is not used to define content models but is used to define a general rule: Elements whose content model allows any flow content or phrasing content should have at least one node in its contents that is palpable content and that does not have the hidden attribute specified.

The palpable elements are:

- <a>
- <abbr>
- <address>
- <article>
- <aside>
- <b>
- <bdi>
- <bdo>
- <blockquote>
- <button>
- <canvas>
- <cite>
- <code>
- <data>
- <del>
- <details>
- <dfn>
- <div>
- <em>
- <embed>
- <fieldset>
- <footer>
- <figure>
- <form>
- <iframe>
- <img>
- <ins>
- <kbd>
- <label>
- <main>
- <map>
- <mark>
- <math>
- <meter>
- <nav>
- <object>
- <p>
- <picture>
- <pre>
- <progress>
- <q>
- <ruby>
- <s>
- <samp>
- <search>
- <section>
- <select>
- <small>
- <span>
- <strong>
- <sub>
- <sup>
- <svg>
- <table>
- <textarea>
- <time>
- <u>
- <var>
- <video>
- Autonomous custom elements
- Plain text that is not inter-element whitespace

Some elements belong to this category only under specific conditions:

- <audio>, if the controls attribute is present
- <dl>, if the element's children include at least one name-value group
- <input>, if the type attribute is not in the hidden state
- <ol>, if it's children include at least one <li> element
- <ul>, if it's children include at least one <li> element

## Script-supporting elements

Script-supporting elements are elements that don't directly contribute to a document's rendered output. Instead, they serve to support scripts, either by containing or specifying script code directly or by specifying data that will be used by scripts. Nearly all elements, including those that only take specific elements (such as <ul>, which takes <li> elements), can contain script-supporting elements.

The script-supporting elements are:

- <script>
- <template>

## Form-associated content

Form-associated content is a subset of flow content comprising elements that have a form owner and can be used everywhere flow content is expected. A form owner is either the containing <form> element or the <form> whose id is specified in the element's form attribute.

The form-associated elements are:

- <button>
- <fieldset>
- <input>
- <object>
- <output>
- <select>
- <textarea>
- <img>

This category contains several sub-categories:

Elements that are listed in the HTMLFormElement.elements and HTMLFieldSetElement.elements collections. Includes <button>, <fieldset>, <input>, <object>, <output>, <select>, and <textarea>.

Elements that can be used for constructing the form data set when the form is submitted. Includes <button>, <input>, <select>, and <textarea>.

Elements that can be affected when a form is reset. Includes <input>, <output>, <select>, and <textarea>.

Elements that inherit the autocapitalize and autocorrect attributes from their form owner. Includes <button>, <fieldset>, <input>, <output>, <select>, and <textarea>.

Elements that can be associated with <label> elements. Includes <button>, <input> (all types other than hidden), <meter>, <output>, <progress>, <select>, and <textarea>.

## Transparent content model

If an element has a transparent content model, then its contents must be structured such that they would be valid HTML, even if the transparent element were removed and replaced by the child elements.

For example, the <del> and <ins> elements are transparent:

```
<p><del>Shopping</del> <ins>Returns</ins> list</p>
<ul>
  <del>
    <li>Oranges</li>
    <li>Toilet paper</li>
  </del>
  <li>Toothpaste</li>
</ul>
```

If those elements were removed, this fragment would still be valid HTML (if not correct English).

```
<p>Shopping Returns list</p>
<ul>
  <li>Oranges</li>
  <li>Toilet paper</li>
  <li>Toothpaste</li>
</ul>
```

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories
