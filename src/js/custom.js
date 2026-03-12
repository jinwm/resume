export const vTextJustify = {
  mounted(el, { value }) {
    const { text, width, minWidth, noJustify } = value;
    if (!noJustify) {
      text.split('').forEach(t => {
        el.innerHTML += `<block>${t}</block>`
      })
    } else {
      el.innerHTML = text;
    }
    el.style.width = `${width}`;
    el.style.minWidth = `${minWidth}rem`;
    el.style.display = 'flex';
    el.style.justifyContent = 'space-between';
  }
}