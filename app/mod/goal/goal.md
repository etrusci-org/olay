# [Olay](../../../README.md) - goal

Display a goal status. Manually updated.

**Base URL**: <https://etrusci.org/tool/olay/?mod=goal>  
**Default configuration**: [goal.conf.js](./goal.conf.js)  
**Default style**: [goal.default.css](./goal.default.css)

---

## Examples

- [mod=goal](https://etrusci.org/tool/olay/?mod=goal)
- [mod=goal&description=New Goal!](https://etrusci.org/tool/olay/?mod=goal&description=New+Goal!)
- [mod=goal&value=3&target=10](https://etrusci.org/tool/olay/?mod=goal&value=3&target=10)
- [mod=goal&unit=Apples](https://etrusci.org/tool/olay/?mod=goal&unit=Apples)

---

## Configuration

### description

Goal description.

Valid: `text, HTML`

### value

Current goal value.

Valid: `text, HTML`

### target

Goal target value.

Valid: `text, HTML`

### unit

Unit the **value** and **target** refer to.

Valid: `text, HTML`

---
<!-- 
## Output Styling

This module adds additional HTML elements inside `div.mod`:

```html
<div class="description">{DESCRIPTION}</div>
<div class="status">
    <span class="value">{VALUE}</span> /
    <span class="target">{TARGET}</span>
    <span class="unit">{UNIT}</span>
</div>
<div class="progressbar">
    <div style="width: {VALUE_PERCENTAGE}%;"></div>
</div>
```

CSS selectors:

```css
/* <div> for description */
div.description {}

/* <div> for status */
div.status {}

/* <span> for value */
span.value {}

/* <span> for target */
span.target {}

/* <span> for unit */
span.unit {}

/* <div> for outer progressbar container */
div.progressbar {}

/* <div> for inner progress/percentage bar */
div.progressbar > div {}
``` -->
