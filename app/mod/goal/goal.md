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

## Output Styling

### HTML Elements

```html
<div class="description">{description}</div>
<div class="status">
    <span class="value">{value}</span> /
    <span class="target">{target}</span>
    <span class="unit">{unit}</span>
</div>
<div class="progressbar">
    <div style="width: {progress_percentage}%;"></div>
</div>
```

### Available CSS Selectors

```css
.mod {} /* or */ .mod.goal {} /* Module output container */

.description {} /* Goal description */

.status {} /* Goal status */

.status > .value {} /* Value in status */

.status > .target {} /* Target in status */

.status > .unit {} /* Unit in status */

.progressbar {} /* Progressbar container */

.progressbar > div {} /* Progressbar percentage display */

```

---
