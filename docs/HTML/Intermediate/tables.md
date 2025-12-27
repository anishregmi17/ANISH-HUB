---
sidebar_position: 1
---

# Tables

Tables allow web developers to arrange data into rows and columns.

## Basic Table Structure

- `<table>`: The container
- `<tr>`: Table Row
- `<th>`: Table Header (bold and centered by default)
- `<td>`: Table Data (regular cell)

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

## Spanning
You can make cells span multiple rows or columns.

### Colspan
```html
<th colspan="2">Name</th>
```

### Rowspan
```html
<td rowspan="2">Phone</td>
```

## Semantic Header, Body, Footer
For complex tables and accessibility, grouping rows is recommended.

```html
<table>
  <thead>
    <tr>
      <th>Items</th>
      <th>Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Donuts</td>
      <td>3,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>3,000</td>
    </tr>
  </tfoot>
</table>
```
