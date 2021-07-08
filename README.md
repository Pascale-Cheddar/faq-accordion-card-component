### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS
- Mobile-first workflow

### What I learned

```js
let rotation = 0;
const rotateSvg = () => {
  rotation += 180; //add 180 degrees
  if (rotation === 360) {
    // 360 means rotate back to 0
    rotation = 0;
  }

  document.querySelector("#svg").style.transform = `rotate(${rotation}deg)`;
};
```
