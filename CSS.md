# CSS for starters

This is a mega simple starter help but it should be enough to let you adjust the overlays to your liking.  
Please take some time to review the provided resources. CSS education falls outside the scope of this project.




## Useful resources

- [CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
- [What is CSS?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
- [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started)




## Commonly used properties

Here's a list of the most commonly used properties for your Browser-Source's CSS field.  
Follow the links for documentation and interactive examples!

- [background](https://developer.mozilla.org/docs/Web/CSS/background): Set the background.
- [border-radius](https://developer.mozilla.org/docs/Web/CSS/border-radius): Set the border edge roundness.
- [border](https://developer.mozilla.org/docs/Web/CSS/border): Set the border.
- [color](https://developer.mozilla.org/docs/Web/CSS/color): Set text color.
- [content](https://developer.mozilla.org/docs/Web/CSS/content): Replace or insert content.
- [display](https://developer.mozilla.org/docs/Web/CSS/display): Set display type.
- [font-family](https://developer.mozilla.org/docs/Web/CSS/font-family): Set text font.
- [font-size](https://developer.mozilla.org/docs/Web/CSS/font-size): Set text size.
- [font-weight](https://developer.mozilla.org/docs/Web/CSS/font-weight): Set text weight/boldness.
- [margin](https://developer.mozilla.org/docs/Web/CSS/margin): Set margin area.
- [opacity](https://developer.mozilla.org/docs/Web/CSS/opacity): Set element opacity.
- [padding](https://developer.mozilla.org/docs/Web/CSS/padding): Set padding area.
- [text-align](https://developer.mozilla.org/docs/Web/CSS/text-align): Set horizontal alignment.
- [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow): Add shadows to text.
- [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before): Create an element before another element.
- [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after): Create an element after another element.
- [content](https://developer.mozilla.org/en-US/docs/Web/CSS/content): Replace content with a value.

Here's a fictional example that uses all the properties from the list above:

```css
.mod {
    background: #333333;
    border-radius: 5px;
    border: 2px solid #077990;
    color: #000099;
    display: inline-block;
    font-family: 'Times New Roman', serif;
    font-size: 24px;
    font-weight: bold;
    margin: 40px;
    opacity: 0.8;
    padding: 20px;
    text-align: center;
    text-shadow: #ff0000 20px 20px 5px;
}

.mod::before { 
    content: 'before! ';
}

.mod::before { 
    content: ' after!';
}
```


## CSS selectors

Imagine we work with this HTML code:

```html
<div class="sound">
    <span class="cat">miaoo</span>
    <span class="sheep">bhaah</span>
</div>

<div class="weight">
    <span class="cat">light</span>
    <span class="sheep">heavy</span>
</div>
```

```css
.sound .cat {
    color: #11aa77;
}

.sound .sheep {
    color: #003399;
}

.weight .cat {
    color: #11aa77;
}

.weight .sheep {
    color: #003399;
}

/* could also be combined: */

.sound .sheep,
.weight .sheep {
    color: #003399;
}

.sound .cat,
.weight .cat {
    color: #11aa77;
}
```
