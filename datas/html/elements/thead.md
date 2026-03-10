# <thead>: The Table Head element

Source: https://devdocs.io/html/reference/elements/thead

The <thead> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the head of a table with information about the table's columns. This is usually in the form of column headers (<th> elements).

## Try it

```
<table>
  <caption>
    Council budget (in £) 2018
  </caption>
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Donuts</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">Stationery</th>
      <td>18,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Totals</th>
      <td>21,000</td>
    </tr>
  </tfoot>
</table>
```

```
thead,
tfoot {
  background-color: #2c5e77;
  color: white;
}

tbody {
  background-color: #e4f0f5;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td {
  text-align: center;
}
```

## Attributes

This element includes the global attributes.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

Specifies the horizontal alignment of each head cell. The possible enumerated values are left, center, right, justify, and char. When supported, the char value aligns the textual content on the character defined in the char attribute and the offset defined by the charoff attribute. Use the text-align CSS property instead, as this attribute is deprecated.

Defines the background color of each head cell. The value is an HTML color; either a 6-digit hexadecimal RGB code, prefixed by a #, or a color keyword. Other CSS <color> values are not supported. Use the background-color CSS property instead, as this attribute is deprecated.

Does nothing. It was originally intended to specify the alignment of the content to a character of each head cell. If align is not set to char, this attribute is ignored.

Does nothing. It was originally intended to specify the number of characters to offset the head cell content from the alignment character specified by the char attribute.

Specifies the vertical alignment of each head cell. The possible enumerated values are baseline, bottom, middle, and top. Use the vertical-align CSS property instead, as this attribute is deprecated.

## Usage notes

- The <thead> is placed after any <caption> and <colgroup> elements, but before any <tbody>, <tfoot>, and <tr> elements.
- Along with its related <tbody> and <tfoot> elements, the <thead> element provides useful semantic information and can be used when rendering for either screen or print. Specifying such table content groups also provides valuable contextual information for assistive technologies, including screen readers and search engines.
- When printing a document, in the case of a multipage table, the table head usually specifies information that remains the same on each page.

## Examples

See <table> for a complete table example introducing common standards and best practices.

### Basic head structure

This example demonstrates a table divided into a head section with column headers and a body section with the table's main data.

#### HTML

The <thead> and <tbody> elements are used to structure the table rows into semantic sections. The <thead> element represents the head section of the table, which contains a row (<tr>) of column headers cells (<th>).

```
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
      <th>Major</th>
      <th>Credits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>Computer Science</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>Russian Literature</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>Astrophysics</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Some basic CSS is used to style and highlight the table head so that the headings of the columns stand out from the data in the table body.

```
thead {
  border-bottom: 2px solid rgb(160 160 160);
  text-align: center;
  background-color: #2c5e77;
  color: white;
}

tbody {
  background-color: #e4f0f5;
}
```

#### Result

### Multiple head rows

This example demonstrates a table head section with two rows.

#### HTML

We extend the markup the table from the basic example in this example by including two table rows (<tr>) within the <thead> element creating a multi-row table head. We included an additional column, splitting the student names into first and last names.

```
<table>
  <thead>
    <tr>
      <th rowspan="2">Student ID</th>
      <th colspan="2">Student</th>
      <th rowspan="2">Major</th>
      <th rowspan="2">Credits</th>
    </tr>
    <tr>
      <th>First name</th>
      <th>Last name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Martha</td>
      <td>Jones</td>
      <td>Computer Science</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Victor</td>
      <td>Nim</td>
      <td>Russian Literature</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Alexandra</td>
      <td>Petrov</td>
      <td>Astrophysics</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### Cell spanning

In order to associate and line up the header cells with the correct columns and rows, the colspan and rowspan attributes are used on the <th> elements. The values set in these attributes specify how many cells each header cell (<th>) spans. Due to the way these attributes are set, the two second-row header cells are lined up with the columns they head. These each span one row and one column as the default values for the colspan and rowspan attributes are both 1.

The column and row spanning demonstrated by this example are illustrated in the following figure:

#### CSS

The CSS is unchanged from the previous example.

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Learn: HTML table basics
- <caption>, <col>, <colgroup>, <table>, <tbody>, <td>, <tfoot>, <th>, <tr>: Other table-related elements
- background-color: CSS property to set the background color of each head cell
- border: CSS property to control borders of head cells
- text-align: CSS property to horizontally align each head cell content
- vertical-align: CSS property to vertically align each head cell content

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead
